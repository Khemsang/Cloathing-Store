"use client";

import Image from "next/image";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const CollectionHighlight = () => {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-6 py-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-10">{error}</p>
    );
  }

  return (
    <div className="px-6 md:px-16 py-12 bg-gray-100">

      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">

          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              Summer Collection
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
              Shopping Every Day
            </h2>
          </div>

          <button className="px-6 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
            More Collection →
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* LEFT FEATURE CARDS */}
          <div className="flex lg:flex-col gap-6 lg:col-span-1">

            {products.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="relative h-[280px] w-full rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">

                  <h3 className="text-sm font-semibold leading-tight">
                    Trending Now This Weekend
                  </h3>

                  <button className="mt-3 bg-white text-black text-sm px-4 py-2 rounded-full w-fit hover:scale-105 transition">
                    Shop Now →
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* RIGHT PRODUCTS */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition group"
              >

                {/* PRICE + BADGE */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">
                    ${item.price}
                  </h3>

                  <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                    25% OFF
                  </span>
                </div>

                {/* IMAGE */}
                <div className="relative h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* HOVER ACTIONS */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition bg-black/30">

                    <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                      <FaEye size={14} />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                      <FiShoppingBag size={14} />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
                      <FaHeart size={14} />
                    </button>

                  </div>

                </div>

                {/* TITLE */}
                <div className="mt-4 text-center">
                  <h4 className="font-medium text-gray-800 line-clamp-1">
                    {item.title}
                  </h4>

                  <p className="text-xs text-gray-400 uppercase mt-1">
                    {item.category}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default CollectionHighlight;