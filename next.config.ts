import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "randomuser.me",
      "images.unsplash.com",
      "img.freepik.com",
      "i.pravatar.cc",
      "via.placeholder.com", 
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", },
         { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
};

export default nextConfig;