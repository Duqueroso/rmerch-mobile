export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: "Oferta" | "Nuevo";
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
