import React from "react";
import { itemsWithTick } from "../constant/TrendingProduct";
import Image from "next/image";
import { TrandingBanner } from "../image";

const TrendingProducts = () => {
  return (
    <div className="">
      <div className="py-10 px-3 w-full bg-gray-200 shadow-xl">
        
        <div className="container relative flex flex-col md:flex-row items-center justify-between gap-8 pt-10 rounded-2xl px-3 w-full bg-gradient-to-r from-orange-500 to-pink-500">
          
          {/* LEFT */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Trending Products
            </h2>

            <p className="text-base sm:text-xl font-semibold text-yellow-100">
              Get 30% Discount On All Hudis!
            </p>

            <ul className="flex flex-wrap gap-3 sm:gap-6 mt-4">
              {itemsWithTick.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    className="flex items-center gap-2 bg-white/30 px-3 sm:px-4 py-1 rounded-2xl"
                  >
                    <Icon className="text-green-500 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-medium text-white">
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* IMAGE (FIXED PROPERLY) */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={TrandingBanner}
              alt="Trending Product Banner"
              width={400}
              height={400}
              className="
                w-[180px] 
                sm:w-[220px] 
                md:w-[260px] 
                lg:w-[320px] 
                xl:w-[380px] 
                h-auto 
                object-contain
                hidden lg:flex
              "
              priority
            
            />
          </div>

          {/* BUTTON (UNCHANGED POSITION) */}
          <div>
            <button
              className="
                mt-6 px-4 sm:px-6 py-2 text-sm sm:text-base font-bold 
                rounded-2xl bg-white/30 transition absolute
                top-2 right-4
              "
            >
              Check Discount
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;