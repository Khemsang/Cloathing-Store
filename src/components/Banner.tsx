"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Banner1, Banner2, Banner3 } from "../image";

const Banner = () => {
  const images = [Banner1, Banner2, Banner3];

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setDirection("next"); // change to "prev" if needed

      setTimeout(() => {
        setIndex((prev) => {
          if (direction === "next") {
            return (prev + 1) % images.length;
          } else {
            return prev === 0 ? images.length - 1 : prev - 1;
          }
        });

        setAnimating(false);
      }, 700);
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, images.length]);

  return (
    <div className="w-full py-3">
      <div className="grid grid-cols-4 gap-3 px-3">

        {[0, 1, 2].map((i) => {
          const current = (index + i) % images.length;

          const prev =
            current === 0 ? images.length - 1 : current - 1;

          const next = (current + 1) % images.length;

          return (
            <div
              key={i}
              className={`${
                i === 0 ? "col-span-2" : "col-span-1"
              } h-[650px] relative overflow-hidden rounded-2xl`}
            >
              {/* CURRENT */}
              <Image
                src={images[current]}
                alt="current"
                fill
                className={`absolute top-0 left-0 object-cover transition-transform duration-700 ease-in-out ${
                  animating
                    ? direction === "next"
                      ? "-translate-x-full"
                      : "translate-x-full"
                    : "translate-x-0"
                }`}
              />

              {/* NEXT */}
              <Image
                src={
                  direction === "next"
                    ? images[next]
                    : images[prev]
                }
                alt="next"
                fill
                className={`absolute top-0 left-0 object-cover transition-transform duration-700 ease-in-out ${
                  animating
                    ? "translate-x-0"
                    : direction === "next"
                    ? "translate-x-full"
                    : "-translate-x-full"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Text */}
              {i === 0 && (
                <div className="absolute bottom-10 left-10 text-white z-10">
                  <p className="text-sm uppercase tracking-widest">
                    Summer Collection
                  </p>
                  <h2 className="text-4xl font-bold">
                    Infinite Smooth Loop
                  </h2>
                </div>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Banner;