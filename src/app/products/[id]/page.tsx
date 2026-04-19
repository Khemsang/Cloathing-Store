"use client";

import api from "@/src/lib/axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { SocialLinks } from "@/src/constant/Icon";
import { reviews } from "@/src/constant/Review";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

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
    <div className="bg-gray-100 py-8 md:py-14">
      <div className="container px-4 mx-auto">

        {/* MAIN */}
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {/* IMAGE */}
          <div className="relative flex items-center justify-center bg-gray-50 rounded-xl p-3 md:p-4">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={400}
              height={400}
              className="rounded-lg object-contain w-full max-h-[250px] md:max-h-[400px]"
            />

            <div className="absolute flex justify-between w-full px-2 md:px-5 text-2xl md:text-4xl text-gray-500">
              <button className="p-2 bg-white rounded-full shadow">
                <GrFormPrevious />
              </button>
              <button className="p-2 bg-white rounded-full shadow">
                <MdOutlineNavigateNext />
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="py-4 md:py-7">

            <div className="border-b pb-4 md:pb-5">
              <h2 className="text-xl md:text-2xl font-semibold text-green-600">
                ${product.price}
              </h2>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1 md:mt-2">
                {product.title}
              </h1>

              <p className="text-sm md:text-base text-gray-500 mt-2 md:mt-3">
                {product.description}
              </p>
            </div>

            {/* SIZE & COLOR */}
            <div className="border-b py-4 md:py-6 space-y-4 md:space-y-6">

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <p className="text-base font-semibold">Size</p>
                <div className="flex flex-wrap gap-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 border rounded hover:bg-black hover:text-white text-sm"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <p className="text-base font-semibold">Color</p>
                <div className="flex gap-2">
                  {["#000", "#fff", "#f00", "#00f", "#0f0"].map((color) => (
                    <button
                      key={color}
                      style={{ backgroundColor: color }}
                      className="h-6 w-6 rounded-full border"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* QUANTITY */}
            <div className="flex items-center  gap-3 py-4 md:py-5">
              <p className="font-medium">Quantity</p>

              <div className="flex items-center  rounded overflow-hidden">
                <div className="px-4 py-2 w-10 text-center font-bold">1</div>

                <div className="flex flex-col">
                  <button className="px-3 text-lg hover:bg-gray-100">+</button>
                  <button className="px-3 text-lg hover:bg-gray-100">−</button>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="primary-btn w-full sm:w-auto">
                  Add to Cart
                </button>
                <button className="primary-btn w-full sm:w-auto">
                  Wishlist
                </button>
              </div>

              <div className="flex justify-center sm:justify-end gap-4 text-xl md:text-2xl">
                {SocialLinks.map((item) => (
                  <a key={item.id} href={item.link}>
                    <item.icon />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-10 px-4 md:px-0">
          {product.description}
        </div>

        {/* REVIEWS */}
        <div className="container py-10 px-4 md:px-0">

          <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>

          <div className="border-b pb-8 space-y-8">

            {reviews.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4">

                <div className="shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="flex-1">

                  <div className="flex justify-between items-start">

                    <div>
                      <h1 className="font-semibold text-gray-800">
                        {item.name}
                      </h1>
                      <p className="text-xs text-gray-500">
                        {item.date}
                      </p>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, index) => {
                        const starIndex = index + 1;

                        return (
                          <span
                            key={index}
                            className={`text-lg ${
                              starIndex <= item.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ★
                          </span>
                        );
                      })}

                      <span className="ml-2 text-xs text-gray-500">
                        ({item.rating}/5)
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.message}
                  </p>

                  <button className="mt-3 text-sm text-blue-600 hover:underline">
                    Reply
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* REVIEW FORM */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold">Write A Review</h2>

            <p className="text-sm text-gray-500 mt-1">
              Your email will not be published.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-xl px-4 py-3 w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-xl px-4 py-3 w-full"
              />
            </div>

            <textarea
              placeholder="Your Review"
              rows={5}
              className="w-full border rounded-xl px-4 py-3 mt-4"
            />

            <button className="mt-6 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-orange-500">
              POST REVIEW
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
