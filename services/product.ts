import axios from "axios";

export interface CreateProductProps {
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  isDigital: boolean;
}

export const createProduct = async (data: CreateProductProps) => {
  try {
    const response = await axios.post(
      "https://rmerchback.vercel.app/api/products",
      data,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        //   'Content-Type': 'application/json',
        // },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};