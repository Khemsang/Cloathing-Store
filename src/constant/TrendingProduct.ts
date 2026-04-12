import { IconType } from "react-icons";
import { AiOutlineCheck } from "react-icons/ai";

export interface ItemWithTick {
  id: number;
  name: string;
  icon: IconType; 
}

export const itemsWithTick: ItemWithTick[] = [
  { id: 1, name: "Zara", icon: AiOutlineCheck },
  { id: 2, name: "Gucci", icon: AiOutlineCheck },
  { id: 3, name: "Publo", icon: AiOutlineCheck },
  { id: 4, name: "Men's", icon: AiOutlineCheck },
  { id: 5, name: "Women's", icon: AiOutlineCheck },
];