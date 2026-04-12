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
    <div className="px-20 py-10 bg-gray-200">
      <div className="bg-[#fdf6f6] rounded-3xl p-10">
        
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Summer Collection
            </p>
            <h2 className="text-3xl font-semibold">
              Shopping Every Day
            </h2>
          </div>

          <button className="border px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
            More Collection →
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6">

          <div className="flex flex-col gap-6">
            {products.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="relative h-[350px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-lg font-semibold">
                    Trending Now Only This Weekend!
                  </h3>

                  <button className="mt-4 bg-white text-black px-5 py-2 rounded-full flex items-center gap-2 w-fit">
                    Shop Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-6">
              {products.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-lg transition group"
                >
                  
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold">${item.price}</h3>
                    <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
                      25% Off
                    </span>
                  </div>

                  <div className="relative h-[220px] rounded-2xl overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                      <button className="bg-white p-2 rounded-full shadow">
                        <FaEye size={14} />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow">
                        <FiShoppingBag size={14} />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow">
                        <FaHeart size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400 uppercase">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CollectionHighlight;