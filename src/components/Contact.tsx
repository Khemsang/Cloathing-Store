"use client";

import React from "react";

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14">

      {/* MAIN WRAPPER */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl">

        {/* 🔥 MOBILE / SM DESIGN */}
        <div className="block lg:hidden">
          <div className="relative min-h-[300px] bg-orange-500 flex items-center justify-center">

            <div className="absolute w-32 h-32 bg-white/10 rounded-full top-6 left-6"></div>
            <div className="absolute w-40 h-40 bg-black/10 rounded-full bottom-6 right-6"></div>

            <div className="bg-white w-[92%] rounded-2xl shadow-lg px-6 py-8 text-center">

              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Newsletter
              </span>

              <h1 className="text-lg font-bold text-gray-800 mt-2">
                Sign up & stay updated
              </h1>

              <p className="text-sm text-gray-500 mt-3">
                Get latest offers, discounts and updates directly in your inbox
              </p>

              <form className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-400 text-sm"
                />

                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition text-sm"
                >
                  Subscribe
                </button>
              </form>

            </div>
          </div>
        </div>

        {/* 🔥 DESKTOP / LG DESIGN */}
        <div className="hidden lg:block">
          <div className="container relative h-[420px] bg-gradient-to-br from-amber-400 via-orange-400 to-pink-400 flex items-end justify-center">

            <div className="absolute w-40 h-40 bg-white/30 rounded-full top-10 left-10 blur-3xl"></div>
            <div className="absolute w-52 h-52 bg-black/10 rounded-full bottom-10 right-10 blur-3xl"></div>

            <div className="relative bg-white/90 backdrop-blur-md h-[55%] w-[80%] rounded-t-3xl shadow-lg flex flex-col items-center justify-center px-10">

              <div className="text-center mb-6">
                <span className="text-xs tracking-widest text-gray-500 uppercase">
                  Newsletter
                </span>

                <h1 className="text-2xl font-bold text-gray-800 mt-1">
                  Sign up & stay updated
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Get latest offers, discounts and updates directly in your inbox
                </p>
              </div>

              <form className="relative w-full max-w-md flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-orange-400"
                />

                <button
                  type="submit"
                  className="absolute right-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  Subscribe
                </button>
              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;