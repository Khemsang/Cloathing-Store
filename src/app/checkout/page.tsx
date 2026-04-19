"use client";

import { useState } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const cartItems = [
  { id: 1, name: "Sandqvist Backpack", size: "35L", qty: 1, price: 110.99 },
  { id: 2, name: "Sandqvist Travel Bag", size: "30L", qty: 1, price: 259.99 },
  { id: 3, name: "Sandqvist Daypack", size: "20L", qty: 1, price: 109.99 },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);

  const updateQty = (id, type) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
   <div className="container">
       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Shopping Cart</h2>
            <button className="text-sm text-red-500 hover:underline">Clear all</button>
          </div>

          <div className="text-xs uppercase text-gray-400 grid grid-cols-5 mb-4 tracking-wide">
            <span className="col-span-2">Product</span>
            <span>Size</span>
            <span>Qty</span>
            <span className="text-right">Total</span>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-5 items-center bg-gray-50 hover:bg-gray-100 transition p-4 rounded-xl">

                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg" />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-400">Zack</p>
                  </div>
                </div>

                <div>
                  <select className="border border-gray-200 bg-white rounded-md px-2 py-1 text-sm focus:ring-1 focus:ring-green-500">
                    <option>{item.size}</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="text-sm font-medium">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>

                <div className="text-right font-semibold flex items-center justify-end gap-3">
                  ${ (item.price * item.qty).toFixed(2) }
                  <FiTrash2
                    size={16}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6 text-right space-y-2">
            <p className="text-sm text-gray-500">
              Subtotal : <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
            </p>
            <p className="text-sm text-gray-500">Shipping : Free</p>
            <p className="text-xl font-semibold text-gray-900">
              Total : ${subtotal.toFixed(2)}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-fit">
          <h3 className="text-xl font-semibold mb-6">Payment</h3>

          <div className="space-y-3 mb-6 text-sm">
            <label className="flex items-center justify-between border p-3 rounded-lg cursor-pointer hover:border-green-500">
              <span>Google Pay</span>
              <input type="radio" name="pay" />
            </label>
            <label className="flex items-center justify-between border p-3 rounded-lg cursor-pointer hover:border-green-500">
              <span>Credit Card</span>
              <input type="radio" name="pay" defaultChecked />
            </label>
          </div>

          <div className="space-y-4">
            <input placeholder="Name on card" className="w-full border border-gray-200 p-3 rounded-lg focus:ring-1 focus:ring-green-500" />
            <input placeholder="Card number" className="w-full border border-gray-200 p-3 rounded-lg focus:ring-1 focus:ring-green-500" />

            <div className="grid grid-cols-2 gap-3">
              <input placeholder="MM/YY" className="border border-gray-200 p-3 rounded-lg" />
              <input placeholder="CVV" className="border border-gray-200 p-3 rounded-lg" />
            </div>
          </div>

          <button className="w-full mt-8 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 active:scale-95 transition">
            Check Out
          </button>
        </div>

      </div>
   </div>
    </div>
  );
}
