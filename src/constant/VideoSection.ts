import { StaticImageData } from "next/image";
import { TrandingBanner } from "../image";

export interface TrendingItem {
  id: number;
  title: string;
  category: string;
  discount: string;
  buttonText: string;
  image: StaticImageData;
}

export const trendingData: TrendingItem[] = [
  {
    id: 1,
    title: "Trending Products",
    category: "Women's collections",
    discount: "Up to 22% off Gimbals",
    buttonText: "Collection",
    image: TrandingBanner,
  },
  {
    id: 2,
    title: "Trending Products",
    category: "Men's collections",
    discount: "Up to 22% off Gimbals",
    buttonText: "Collection",
    image: TrandingBanner,
  },
  {
    id: 3,
    title: "Trending Products",
    category: "Kid's collections",
    discount: "Up to 22% off Gimbals",
    buttonText: "Collection",
    image:TrandingBanner ,
  },
];