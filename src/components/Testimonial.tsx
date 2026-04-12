"use client";

import React, { useEffect } from "react";
import { testReviewData } from "../constant/Testimonials";
import { useProductStore } from "../store/useProductStore";
import Image from "next/image";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonial = () => {
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
    <div>
      <div>
        <div >
          <div className="text-center">
            <span>customer reviews</span>
            <h1>product reviews</h1>
            <p>
              Our references are very valuable, the result of a great effort...
            </p>
          </div>
          <div className="">
            <div className="">
              {products.map((item) => (
                <div key={item.id}>
                  <span>{item.rating}</span>
                  <p>{item.description}</p>
                  <div>
                    <div>
                      <Image
                        src={item.thumbnail}
                        alt="image"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div>
                      <span>{item.title}</span>
                      <span>{item.category}</span>
                    </div>
                    <BiSolidQuoteAltRight />
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

export default Testimonial;
