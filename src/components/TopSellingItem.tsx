"use client";

import React, { useEffect } from "react";
import { data } from "../constant/TopSellingItem";
import { useProductStore } from "../store/useProductStore";
import Image from "next/image";

const TopSellingItem = () => {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-6 py-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-40 bg-gray-200 rounded-xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="px-5 lg:px-12">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 gap-5">
          <div>
            <span className="uppercase text-sm tracking-widest text-orange-500 font-semibold">
              most selling items
            </span>
            <h1 className="text-2xl lg:text-4xl font-bold mt-2 text-gray-900">
              Top Selling Categories This Week
            </h1>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex gap-2 flex-wrap">
            <button className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow hover:bg-orange-600 transition">
              All
            </button>

            {data.map((item) => (
              <button
                key={item.id}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-1.5 rounded-full text-sm hover:bg-gray-900 hover:text-white transition"
              >
                {item.buttonText}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(0, 12).map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer group"
            >
              {/* IMAGE */}
              <div className="w-40 h-40 relative flex-shrink-0">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col">
                <p className="text-orange-500 font-semibold text-lg">
                  ${item.price}
                </p>

                <p className="text-gray-900 font-semibold text-base line-clamp-1">
                  {item.title}
                </p>

                <p className="text-gray-500 text-sm capitalize">
                  {item.category}
                </p>

                <p className="text-yellow-500 text-sm font-medium">
                  ⭐ {item.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellingItem;