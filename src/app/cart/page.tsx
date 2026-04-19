"use client";

import Image from "next/image";

export default function CartPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Table Header */}
      <div className="grid grid-cols-5 font-semibold text-gray-700 border-b pb-4">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>

      {/* Product Row */}
      <div className="grid grid-cols-5 items-center py-6 border-b">
        {/* Product */}
        <div className="flex items-center gap-4">
          <Image
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrsHSSBc63zNawuN6LUuXgj58de3ciuETGw&s"
  alt="Product image"
  className="w-18 h-18 rounded-xl object-cover"
  height={100}
  width={100}
/>
          <p className="font-medium">
            Simple Things You to Save Book
          </p>
        </div>

        {/* Price */}
        <p>$10.00</p>

        {/* Quantity */}
        <div className="flex items-center font-bold w-max">
          <button className="px-3 py-1">-</button>
          <span className="px-4">1</span>
          <button className="px-3 py-1">+</button>
        </div>

        {/* Subtotal */}
        <p>$10.00</p>

        {/* Remove */}
        <button className="text-gray-500 text-xl">×</button>
      </div>

      {/* Coupon + Update */}
      <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="border px-4 py-2 rounded-full outline-none"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded-full">
            Apply
          </button>
        </div>

        <button className="bg-red-500 text-white px-6 py-2 rounded-full">
          Update Cart
        </button>
      </div>

      {/* Total Section */}
      <div className="flex justify-end mt-10">
        <div className="w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4">Total</h2>

          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-red-500">$999.00</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-red-500">$15.00</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-red-500">$999.00</span>
            </div>

            <button className="w-full bg-red-500 text-white py-3 rounded-full mt-4">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}