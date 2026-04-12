"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { FaEye, FaHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const FlashSell = () => {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-10 py-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 bg-gray-100 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <div className="px-6 md:px-10 py-14">
      <div className="grid md:grid-cols-5 gap-6 items-stretch h-130 relative ">

        {/* LEFT SECTION */}
        <div className="md:col-span-3 bg-[#fdf4f4] rounded-3xl p-6 overflow-hidden " >

          {/* HEADER */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6 border-b border-gray-600 pb-5">
            <div>
              <p className="text-red-500 uppercase text-xs tracking-widest">
                New Collection
              </p>
              <h1 className="text-2xl font-bold">
                Trending Flash Sell
              </h1>
            </div>

            {/* TIMER */}
            <div className="flex gap-2">
              {["Days", "Hours", "Min", "Sec"].map((label, i) => (
                <div
                  key={i}
                  className="bg-white w-12 h-12 rounded-full flex flex-col items-center justify-center text-[10px] shadow"
                >
                  <span className="font-bold text-xs">00</span>
                  <span className="text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute w-full pr-3 pb-10">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
                className="w-full"
            >
              {products.slice(0, 16).map((item) => (
                <SwiperSlide key={item.id} style={{ width: "300px" }}>

                  {/* YOUR ORIGINAL CARD DESIGN (UNCHANGED) */}
                  <div className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-lg transition group mt-25 pt-">

                    {/* PRICE */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-sm">
                        ${item.price}
                      </h3>
                      <span className="bg-black text-white text-[10px] px-2 py-1 rounded-full">
                        25% Off
                      </span>
                    </div>

                    {/* IMAGE */}
                    <div className="relative h-[140px] rounded-xl overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />

                      {/* HOVER ICONS */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <button className="bg-white p-2 rounded-full shadow">
                          <FaEye size={12} />
                        </button>
                        <button className="bg-white p-2 rounded-full shadow">
                          <FiShoppingBag size={12} />
                        </button>
                        <button className="bg-white p-2 rounded-full shadow">
                          <FaHeart size={12} />
                        </button>
                      </div>
                    </div>

                    {/* INFO */}
                    <div className="mt-3 text-center">
                      <h4 className="text-xs font-medium line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 uppercase">
                        {item.category}
                      </p>
                    </div>

                  </div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* RIGHT SECTION (UNCHANGED) */}
        <div className="md:col-span-2 bg-red-500 rounded-3xl flex justify-center pt-10 ">
          <div>
            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-red-500 transition">
            View All Collection →
          </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlashSell;