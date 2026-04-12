import React from "react";
import { itemsWithTick } from "../constant/TrendingProduct";
import Image from "next/image";
import { TrandingBanner } from "../image";

const TrendingProducts = () => {
  return (
    <div className="">
     <div className=" py-15 px-3 w-full bg-gray-200 shadow-xl">
       <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 pt-15 rounded-2xl px-3 w-full  bg-gradient-to-r from-orange-500 to-pink-500">
       
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold ">Trending Products</h2>
          <p className="text-xl font-semibold text-yellow-100">
            Get 30% Discount On All Hudis!
          </p>

          <ul className="flex flex-wrap gap-6 mt-4">
            {itemsWithTick.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-2 bg-white/30 px-4 py-1 rounded-2xl"
                >
                  <Icon className="text-green-500 w-5 h-5" />
                  <span className=" font-medium">{item.name}</span>
                </li>
              );
            })}
          </ul>

          
        </div>

        <div className="flex-1">
          <Image
            src={TrandingBanner}
            alt="Trending Product Banner"
            height={300}
            width={300}
            className="rounded-lg object-cover"
          />
        </div>

        <div>
          <button className="mt-6 px-6 py-2 font-bold rounded-2xl  bg-white/30  transition absolute
          top-2 right-4">
            Check Discount
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default TrendingProducts;