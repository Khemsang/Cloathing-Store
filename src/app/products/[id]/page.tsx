"use client";

import api from "@/src/lib/axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium animate-pulse">Loading...</p>
      </div>
    );

  if (!product)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">Product not found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl w-full grid md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {product.title}
            </h1>

            <p className="text-gray-500 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              ${product.price}
            </h2>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}