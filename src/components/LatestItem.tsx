"use client";

import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import Image from "next/image";
import Link from "next/link";

const LatestItem = () => {
  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 py-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 py-10 font-medium">
        {error}
      </p>
    );
  }

  return (
    <section className="px-10 py-12 bg-gray-50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Trending Products 🔥
        </h2>
        <span className="text-sm text-gray-500">
          Updated recently
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0,8).map((product) => (
          <div
            key={product.id}
         className="bg-white shadow-xl rounded-3xl p-6 hover:shadow-xl transition space-y-5 border border-gray-300"
          >
            <div className="relative overflow-hidden ">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={400}
                height={200}
                 className="object-cover rounded-2xl hover:scale-107 duration-700"
              />

              <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                ${product.price}
              </div>

              <div className="absolute top-3 right-3 bg-white/90 text-yellow-600 text-xs px-2 py-1 rounded-full">
                ⭐ {product.rating}
              </div>
            </div>

            <div className="p-4">
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                {product.category}
              </p>

              <h3 className="font-semibold text-sm mt-1 line-clamp-1 group-hover:text-orange-500 transition">
                {product.title}
              </h3>

              <button className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition">
               <Link href={`/products/${product.id}`}>
  View Product
</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestItem;