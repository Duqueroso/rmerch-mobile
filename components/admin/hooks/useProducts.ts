import { useState } from "react";

const useProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const mockProducts = [
    {
      id: 1,
      name: "Camiseta",
      description: "Buena camiseta",
      price: "$99,99 COP",
      stock: 50,
      status: "En stock",
      image: "https://placehold.co/40x40",
    },
    {
      id: 2,
      name: "Barquillo",
      description: "Deliciosos barquillos",
      price: "$3.500 COP",
      stock: 99,
      status: "En stock",
      image: "https://placehold.co/40x40",
    },
    {
      id: 3,
      name: "Barquillo",
      description: "Deliciosos barquillos",
      price: "$3.500 COP",
      stock: 99,
      status: "En stock",
      image: "https://placehold.co/40x40",
    },
    {
      id: 4,
      name: "Barquillo",
      description: "Deliciosos barquillos",
      price: "$3.500 COP",
      stock: 99,
      status: "En stock",
      image: "https://placehold.co/40x40",
    },
  ];

  // Filtro de productos por nombre o descripción
  const filteredProducts = mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return {
    searchQuery,
    setSearchQuery,
    mockProducts,
    filteredProducts,
  };
};

export default useProducts;
