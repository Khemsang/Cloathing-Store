"use client";

import Image from "next/image";
import { useState } from "react";
import { BsTrash2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";


type WishlistItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    {
      id: 1,
      title: "Nike Air Jordan",
      price: 120,
      thumbnail:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    },
    {
      id: 2,
      title: "Apple Watch Series",
      price: 399,
      thumbnail:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ]);

  const removeItem = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <CiHeart className="text-pink-500" /> My Wishlist
        </h1>
        <p className="text-sm text-gray-500">
          {wishlist.length} items saved
        </p>
      </div>

      {/* Empty State */}
      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <CiHeart className="mx-auto text-gray-300 w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mt-2">
            Start adding products you love 💕
          </p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-pink-500 font-bold mt-1">
                  ${item.price}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <button className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
                    View
                  </button>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <BsTrash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}