"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Banner1, Banner2, Banner3 } from "../image";

const images = [Banner1, Banner2, Banner3];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // auto slide (desktop feel maintain)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full py-3">
      <div className="container mx-auto px-3">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

          {/* BIG (mobile + desktop) */}
          <div className="md:col-span-2 h-[300px] md:h-[650px] relative overflow-hidden rounded-2xl">

            {/* SLIDER */}
            <div
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, i) => (
                <div key={i} className="min-w-full h-full relative flex-shrink-0">
                  <Image src={img} alt="banner" fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="absolute inset-0 bg-black/20" />

            {/* 🔥 MOBILE BUTTONS ONLY */}
            <div className="md:hidden absolute inset-0 flex items-center justify-between px-3">
              
              <button
                onClick={prev}
                className="bg-black/50 text-white p-2 rounded-full"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={next}
                className="bg-black/50 text-white p-2 rounded-full"
              >
                <FaChevronRight />
              </button>

            </div>

          </div>

          {/* SMALL 1 (desktop only) */}
          <div className="hidden md:block h-[650px] relative overflow-hidden rounded-2xl">
            <Image
              src={images[(current + 1) % images.length]}
              alt="banner"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* SMALL 2 (desktop only) */}
          <div className="hidden md:block h-[650px] relative overflow-hidden rounded-2xl">
            <Image
              src={images[(current + 2) % images.length]}
              alt="banner"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Banner;