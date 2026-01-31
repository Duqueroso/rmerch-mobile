import { Product } from "@/types/product";
import { api } from "./api";

export interface ProductsResponse {
  products: Product[];
  total: number;
  page?: number;
  totalPages?: number;
}

type RawProduct = Record<string, any>;

const normalizeProduct = (raw: RawProduct, index: number): Product => {
  const id = raw.id ?? raw._id ?? `${raw.name ?? "product"}-${index}`;
  const name = raw.name ?? "Producto";
  const category = raw.category ?? "Sin categoría";
  const price = typeof raw.price === "number" ? raw.price : Number(raw.price) || 0;
  const originalPrice =
    typeof raw.originalPrice === "number"
      ? raw.originalPrice
      : raw.originalPrice != null
        ? Number(raw.originalPrice)
        : undefined;
  const rating =
    typeof raw.rating === "number"
      ? raw.rating
      : typeof raw.averageRating === "number"
        ? raw.averageRating
        : 0;
  const reviewCount =
    typeof raw.reviewCount === "number"
      ? raw.reviewCount
      : typeof raw.totalReviews === "number"
        ? raw.totalReviews
        : 0;
  const image =
    raw.image ?? (Array.isArray(raw.images) ? raw.images[0] : undefined) ?? "";
  const badge = raw.badge;

  return {
    id: String(id),
    name: String(name),
    category: String(category),
    price,
    originalPrice,
    rating,
    reviewCount,
    image: String(image),
    badge,
  };
};

export const productService = {
  /**
   * Obtiene todos los productos del backend
   */
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await api.get<any>("/products");
      console.log("API Response:", response);

      // Manejar diferentes estructuras de respuesta
      if (Array.isArray(response)) {
        return response.map((item, index) => normalizeProduct(item, index));
      }
      if (response.products && Array.isArray(response.products)) {
        return response.products.map((item: RawProduct, index: number) =>
          normalizeProduct(item, index),
        );
      }
      if (response.data && Array.isArray(response.data)) {
        return response.data.map((item: RawProduct, index: number) =>
          normalizeProduct(item, index),
        );
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
      const data = (response as any)?.products ?? response ?? [];
      return Array.isArray(data)
        ? data.map((item: RawProduct, index: number) =>
            normalizeProduct(item, index),
          )
        : [];
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
      const data = (response as any)?.products ?? response ?? [];
      return Array.isArray(data)
        ? data.map((item: RawProduct, index: number) =>
            normalizeProduct(item, index),
          )
        : [];
    } catch (error) {
      console.error("Error searching products:", error);
      throw error;
    }
  },
};
