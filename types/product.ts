export interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: "Oferta" | "Nuevo";
  stock?:number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
