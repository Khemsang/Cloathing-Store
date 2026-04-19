import React from "react";
import { categories } from "../constant/Categories";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="px-5 md:px-20 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-4  lg:grid-cols-4 gap-3 lg:gap-6">

          {categories.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between gap-4 rounded-xl px-4 py-4 border border-gray-200 shadow-sm hover:bg-gray-100 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex gap-4 items-center">
                
                {/* Image */}
                <div className="hidden lg:flex relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xs sm:text-sm lg:text-lg font-medium sm:text-center">
                  {item.name}
                </h3>
              </div>

              {/* Icon */}
              <div className="hidden sm:flex h-10 w-10 bg-pink-200 rounded-full items-center justify-center group-hover:bg-pink-300 transition duration-300">
                {item.icon && <item.icon className="text-pink-600" />}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Categories;