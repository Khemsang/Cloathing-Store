"use client";

import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import Image from "next/image";
import Link from "next/link";

const LatestItem = () => {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ✅ LOADING
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-12 py-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-60 bg-gray-200 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  // ✅ ERROR
  if (error) {
    return (
      <p className="text-center text-red-500 py-10 font-medium">
        {error}
      </p>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Trending Products 🔥
          </h2>

          <span className="text-sm text-gray-500">
            Updated recently
          </span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* PRICE */}
                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  ${product.price}
                </div>

                {/* RATING */}
                <div className="absolute top-2 right-2 bg-white/90 text-yellow-600 text-xs px-2 py-1 rounded-full">
                  ⭐ {product.rating || 4.5}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3 sm:p-4 text-center">
                <p className="text-xs text-gray-400 uppercase">
                  {product.category}
                </p>

                <h3 className="text-sm font-semibold text-gray-800 mt-1 line-clamp-1">
                  {product.title}
                </h3>

                <Link href={`/products/${product.id}`}>
                  <button className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs sm:text-sm hover:opacity-90 transition">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LatestItem;