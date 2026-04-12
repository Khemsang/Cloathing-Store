'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Banner1 } from '../image';
import { BsPlayFill } from 'react-icons/bs';
import { trendingData } from '../constant/VideoSection';

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Parallax Effect
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || !imageRef.current) return;
      const { top } = containerRef.current.getBoundingClientRect();
      imageRef.current.style.transform = `translateY(${-top * 0.3}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* 🔥 Video Banner */}
      <section className="max-w-[calc(clamp(1100px,93.8vw,1785px)+30px)] mx-auto px-[15px] ">
        <div
          ref={containerRef}
          className="relative my-[clamp(40px,4.2vw,80px)] rounded-[30px] overflow-hidden group"
          style={{ aspectRatio: '1800/740' }}
        >
          <Image
            ref={imageRef}
            src={Banner1}
            alt="Video Banner"
            fill
            className="object-cover scale-110 transition-transform duration-500 group-hover:scale-125"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Play Button */}
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 m-auto w-20 h-20 z-10
              bg-red-500 rounded-full flex items-center justify-center
              shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-300"
          >
            <BsPlayFill size={35} className="text-white" />
          </button>
        </div>
      </section>

      {/* 🎥 Video Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90vw] max-w-4xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>

            <iframe
              src="https://www.youtube.com/embed/cNOKQIw81SE?autoplay=1"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full rounded-xl"
              style={{ aspectRatio: '16/9' }}
            />
          </div>
        </div>
      )}

      {/* 🛍️ Trending Cards */}
      <section className="max-w-7xl mx-auto px-4 mt-10 ">
        <div className="grid md:grid-cols-3 gap-10">
          {trendingData.map((item) => (
            <div
              key={item.id}
              className=" relative group rounded-2xl overflow-hidden cursor-pointer bg-pink-500 flex h-70 items-end"
            >
              {/* Background Image */}
              {/* <Image
                src={item.image}
                alt={item.category}
                width={500}
                height={300}
                className="w-full h-[220px]  transition-transform duration-500 group-hover:scale-110"
              /> */}

              {/* Gradient Overlay */}
              <div className=" inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className=" bottom-0 pl-5 py-3 text-white z-10">
                <h3 className="text-lg font-semibold inline">{item.title}</h3>
                <p className="text-sm opacity-90">{item.category}</p>
                <p className="text-xs text-orange-300 mt-1">
                  {item.discount}
                </p>

                <button className="mt-3 bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition">
                  {item.buttonText}
                </button>
              </div>

              {/* Small Floating Image */}
              <Image
                src={item.image}
                alt="badge"
                width={100}
                height={40}
                className=" h-50 w-70   absolute bottom-0 right-3 overflow-hidden"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}