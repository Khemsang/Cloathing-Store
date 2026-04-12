import { create } from "zustand";
import { getProducts } from "../services/productService";
import { Product } from "../types/product";

type ProductStore = {
  products: Product[];
  loading: boolean;
  error: string | null;
  hasFetched: boolean;
  fetchProducts: () => Promise<void>;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  hasFetched: false,

  fetchProducts: async () => {
    if (get().hasFetched) return;   

    try {
      set({ loading: true, error: null });
      const products = await getProducts();
      set({ products, loading: false, hasFetched: true });
    } catch (err: any) {
      set({
        error: err?.response?.data?.message || err.message,
        loading: false,
      });
    }
  },
}));