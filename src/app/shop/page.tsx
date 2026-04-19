"use client";

import { useProductStore } from "@/src/store/useProductStore";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function Page() {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const gridProducts = useMemo(() => products?.slice(0, 12) ?? [], [products]);

  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] bg-gray-100 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-100 p-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 h-full">
        
        {/* ✅ LEFT SIDEBAR */}
        <aside className="h-full overflow-y-auto pr-2 scrollbar-hide">
          
          {/* 🔥 Sticky Search (no overlap now) */}
          <div className="sticky top-0 z-10 bg-gray-100 pb-3">
            <div className="bg-pink-50 p-4 rounded-xl ">
              <div className="flex items-center bg-white rounded-lg px-3 py-2">
                <input
                  type="text"
                  placeholder="Search Items"
                  className="w-full text-sm outline-none focus:outline-none"
                />
                <span className="text-pink-500">🔍</span>
              </div>
            </div>
          </div>

          {/* 💰 Price */}
          <div className="bg-pink-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">Filter by price</h3>
            <input
              type="range"
              className="w-full accent-pink-500 outline-none"
            />
            <p className="text-sm mt-2 text-gray-600">$19 - $69</p>
          </div>

          {/* 📂 Categories */}
          <div className="bg-pink-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {Array.from({ length: 15 }).map((_, i) => (
                <li key={i}>› Category {i + 1}</li>
              ))}
            </ul>
          </div>

          {/* 🎨 Color */}
          <div className="bg-pink-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">Filter By Color</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  Black
                </span>
                <span>14</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                  Green
                </span>
                <span>14</span>
              </div>
            </div>
          </div>

        </aside>

        {/* ✅ RIGHT CONTENT */}
        <div className="h-full overflow-y-auto pr-2 scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-3">
            {gridProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition "
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">${product.price}</span>
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    25% Off
                  </span>
                </div>

                <div className="relative w-full h-60 mb-4 group">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition outline-none">
                      <FaEye size={14} />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition outline-none">
                      <FiShoppingBag size={14} />
                    </button>

                    <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition outline-none">
                      <FaHeart size={14} />
                    </button>
                  </div>
                </div>

                <h4 className="font-medium text-primary">{product.title}</h4>
                <p className="text-xs text-pink-500 mt-1">
                  {product.category}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}