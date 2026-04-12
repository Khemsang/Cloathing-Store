// data.ts

import { IconType } from "react-icons";
import { GrNext } from "react-icons/gr";
export interface Category {
  id: number;
  name: string;
  image: string;
  icon: IconType;
}
export const categories: Category[] = [
  {
    id: 1,
    name: "Men",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e",
    icon: GrNext,
  },
  {
    id: 2,
    name: "Kids",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    icon: GrNext,
  },
  {
    id: 3,
    name: "Pants",
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb",
    icon: GrNext
  },
  {
    id: 4,
    name: "Women",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    icon: GrNext
  },
  {
    id: 5,
    name: "Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    icon: GrNext
  },
  {
    id: 6,
    name: "Sweater",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    icon: GrNext
  },
  {
    id: 7,
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c8d2c8c",
    icon: GrNext
  },
  {
  id: 8,
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c8d2c8c",
    icon: GrNext
  },
];