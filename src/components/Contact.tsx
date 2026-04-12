import React from "react";

const Contact = () => {
  return (
    <div className="px-5 py-10">
      
      {/* Outer container */}
      <div className="relative h-[400px] rounded-3xl bg-gradient-to-br from-amber-400 via-orange-400 to-pink-400 flex items-end justify-center overflow-hidden shadow-xl">

        {/* Floating blur circles for modern feel */}
        <div className="absolute w-40 h-40 bg-white/30 rounded-full top-10 left-10 blur-3xl"></div>
        <div className="absolute w-52 h-52 bg-black/10 rounded-full bottom-10 right-10 blur-3xl"></div>

        {/* Main card */}
        <div className="relative bg-white/90 backdrop-blur-md h-[50%] w-[85%] rounded-t-3xl shadow-lg flex flex-col items-center justify-center px-6">

          {/* Text section */}
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

          {/* Form */}
          <form className="relative w-full max-w-md flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
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
  );
};

export default Contact;