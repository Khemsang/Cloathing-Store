"use client";

import api from "@/src/lib/axios";
import { useEffect, useState } from "react";
import Image from "next/image";

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
  params: { id: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/${params.id}`);
        setProduct(res.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) return <p>Loading...</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
        className="rounded-lg mb-4"
      />

      <p className="text-gray-600 mb-3">{product.description}</p>

      <h3 className="text-xl font-semibold text-green-600">
        ${product.price}
      </h3>
    </div>
  );
}