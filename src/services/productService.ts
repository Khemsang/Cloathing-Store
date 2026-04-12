import api from "../lib/axios";
import { Product } from "../types/product";
export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products?limit=20");
  return res.data.products;
};