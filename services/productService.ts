import { Product } from "@/types/product";
import axios from "axios";
import { api } from "./api";

export interface ProductsResponse {
  products: Product[];
  total: number;
  page?: number;
  totalPages?: number;
}

export const productService = {
  /**
   * Obtiene todos los productos del backend
   */
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get(
        "https://rmerchback.vercel.app/api/products",
      );

      // Manejar diferentes estructuras de respuesta
      if (Array.isArray(response)) {
        return response.data.data;
      }
      if (response.data.data && Array.isArray(response.data.data)) {
        return response.data.data;
      }
      if (response.data.data && Array.isArray(response.data.data)) {
        return response.data.data;
      }

      console.warn("Unexpected API response format:", response);
      return [];
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  /**
   * Obtiene productos filtrados por categoría
   */
  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await api.get<ProductsResponse>(
        `/products?category=${category}`,
      );
      return response.products || response || [];
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  },

  /**
   * Busca productos por nombre
   */
  async searchProducts(query: string): Promise<Product[]> {
    try {
      const response = await api.get<ProductsResponse>(
        `/products?search=${query}`,
      );
      return response.products || response || [];
    } catch (error) {
      console.error("Error searching products:", error);
      throw error;
    }
  },
};
