"use client";

import React, { useEffect, useMemo, useState } from "react";
import { data } from "../constant/TopSellingItem";
import { useProductStore } from "../store/useProductStore";
import Image from "next/image";
import Link from "next/link";

const TopSellingItem = () => {
  const { products, fetchProducts, loading, error } = useProductStore();
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter(
      (item) =>
        item.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [products, activeCategory]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 px-4 py-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-56 bg-gray-200 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
          <div>
            <p className="uppercase text-xs tracking-widest text-orange-500 font-semibold">
              Most Selling Items
            </p>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2 text-gray-900">
              Top Selling Categories This Week
            </h1>
          </div>

          {/* FILTER */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory px-1 pb-2">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition scroll-x-n ${
                activeCategory === "All"
                  ? "bg-black text-white"
                  : "bg-white border text-gray-700 hover:bg-black hover:text-white no-scrollbar"
              }`}
            >
              All
            </button>

            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveCategory(item.buttonText)}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
                  activeCategory === item.buttonText
                    ? "bg-black text-white"
                    : "bg-white border text-gray-700 hover:bg-black hover:text-white"
                }`}
              >
                {item.buttonText}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {filteredProducts.slice(0, 12).map((item) => (
            <Link
              href={`/products/${item.id}`}
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col lg:flex-row items-center lg:items-start gap-3 group"
            >
              {/* IMAGE */}
              <div className="relative w-24 h-24 lg:w-20 lg:h-20 flex-shrink-0">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                <p className="text-gray-400 text-xs uppercase">
                  {item.category}
                </p>

                <p className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {item.title}
                </p>

                <p className="text-black font-bold text-sm mt-1">
                  ${item.price}
                </p>

                <p className="text-yellow-500 text-xs mt-1">
                  ⭐ {item.rating || 4.5}
                </p>

                <span className="text-xs text-orange-500 mt-1">
                  View Product →
                </span>
              </div>
            </Link>
          ))}

        </div>

        {/* EMPTY */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TopSellingItem;