"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useProductStore } from "../store/useProductStore";
import Image from "next/image";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";

const Testimonial = () => {
  const { products, fetchProducts, loading, error } = useProductStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ✅ FILTER
  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  // ✅ LOADING
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-52 bg-gray-200 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  // ✅ ERROR
  if (error) {
    return (
      <p className="text-center text-red-500 py-10">{error}</p>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 space-y-2">
          <span className="uppercase text-xs tracking-widest text-orange-500">
            customer reviews
          </span>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Product Reviews
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
            Our references are very valuable, the result of a great effort...
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          loop
          grabCursor
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => {
              const productId = item.id ?? item.productId;

              return (
                <SwiperSlide key={productId}>
                  <Link href={`/products/${productId}`}>

                    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between h-full min-h-[220px]">

                      {/* TOP */}
                      <div>
                        <span className="text-yellow-500 text-sm font-semibold">
                          ⭐ {item.rating || 4.5}
                        </span>

                        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      {/* BOTTOM */}
                      <div className="flex items-center justify-between mt-4">

                        <div className="flex items-center gap-3">

                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200">
                            <Image
                              src={item.thumbnail}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="max-w-[120px]">
                            <p className="text-sm font-semibold text-gray-800 truncate">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-400 capitalize">
                              {item.category}
                            </p>
                          </div>

                        </div>

                        <BiSolidQuoteAltRight className="text-orange-400 text-2xl sm:text-3xl" />

                      </div>

                    </div>

                  </Link>
                </SwiperSlide>
              );
            })
          ) : (
            <p className="text-center text-gray-400 py-10">
              No reviews found.
            </p>
          )}
        </Swiper>

      </div>
    </div>
  );
};

export default Testimonial;