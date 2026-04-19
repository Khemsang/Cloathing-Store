"use client";

import Image from "next/image";
import Link from "next/link";
import { useProductStore } from "../store/useProductStore";
import { useEffect, useMemo } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const CollectionHighlight = () => {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const featured = useMemo(() => products?.slice(0, 1) ?? [], [products]);
  const gridProducts = useMemo(() => products?.slice(0, 6) ?? [], [products]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-8 sm:px-6 sm:py-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-40 sm:h-48 bg-gray-100 rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-500">
        {error}
      </p>
    );
  }

  return (
    <div className="bg-gray-100 px-4 sm:px-6 md:px-16 py-8 sm:py-10">
      <div className="container">
        <div className="bg-white rounded-3xl p-4 sm:p-6 md:p-10 shadow-sm">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                Summer Collection
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                Shopping Every Day
              </h2>
            </div>

            <button className="px-5 py-2 rounded-full border hover:bg-black hover:text-white transition w-fit text-sm sm:text-base">
              More Collection →
            </button>
          </div>

          {/* GRID WRAPPER */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">

            {/* FEATURE */}
            <div className="lg:col-span-1">
              {featured.map((item) => (
                <div
                  key={item.id}
                  className="relative h-[200px] sm:h-[240px] md:h-[280px] rounded-2xl overflow-hidden mb-4 sm:mb-6"
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-5 text-white">
                    <h3 className="text-sm sm:text-base font-semibold">
                      Trending Now
                    </h3>

                    <button className="mt-2 bg-white text-black text-xs sm:text-sm px-4 py-1 rounded-full w-fit">
                      Shop Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* PRODUCTS GRID (UNIFORM MOBILE CARDS) */}
            <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

              {gridProducts.map((item) => (
                <Link key={item.id} href={`/products/${item.id}`}>
                  <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-sm hover:shadow-md transition group flex flex-col h-[230px] sm:h-[270px]">

                    {/* PRICE */}
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-xs sm:text-sm">
                        ${item.price}
                      </h3>

                      <span className="text-[9px] sm:text-xs bg-black text-white px-2 py-1 rounded-full">
                        25% OFF
                      </span>
                    </div>

                    {/* IMAGE (SMALL + FIXED) */}
                    <div className="relative w-full h-[90px] sm:h-[120px] md:h-[150px] rounded-xl overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    {/* TITLE */}
                    <div className="mt-3 flex flex-col flex-1 text-center justify-between">

                      <h4 className="text-[11px] sm:text-sm font-medium line-clamp-2 leading-tight">
                        {item.title}
                      </h4>

                      <p className="text-[9px] sm:text-xs text-gray-400 uppercase mt-1">
                        {item.category}
                      </p>

                      {/* ACTIONS */}
                      <div className="flex justify-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition">
                        <button className="bg-gray-100 p-1.5 rounded-full">
                          <FaEye size={12} />
                        </button>
                        <button className="bg-gray-100 p-1.5 rounded-full">
                          <FiShoppingBag size={12} />
                        </button>
                        <button className="bg-gray-100 p-1.5 rounded-full">
                          <FaHeart size={12} />
                        </button>
                      </div>

                    </div>

                  </div>
                </Link>
              ))}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CollectionHighlight;