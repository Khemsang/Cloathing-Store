"use client";

import React, { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import Image from "next/image";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


const Testimonial = () => {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-10 py-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-64 bg-gray-100 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <div className="py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="uppercase text-sm text-red-500">
          customer reviews
        </span>
        <h1 className="text-2xl font-bold">Product Reviews</h1>
        <p className="text-gray-500">
          Our references are very valuable, the result of a great effort...
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="px-8"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="  rounded-xl shadow-md h-[230px] space-y-7 p-4 ">
              <span className="text-yellow-500 font-bold">
                ⭐ {item.rating}
              </span>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between  mt-auto">
                <div className="flex items-center gap-3">
                  <div className="relative p-2 bg-gray-300 rounded-full h-18 w-18 flex justify-center items-center">
                    <Image
                    src={item.thumbnail}
                    alt="image"
                    fill
                    className="rounded-full p-2"
                  />
                  </div>

                  <div>
                    <span className="text-sm font-semibold block">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                <BiSolidQuoteAltRight className="text-red-600 text-4xl" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;