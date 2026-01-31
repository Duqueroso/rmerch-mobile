import { api } from "./api";

const API_URL = process.env.EXPO_PUBLIC_URL_BACKEND ?? "https://rmerchback.vercel.app/api";

// Test de conectividad con el backend
export const testConnection = async () => {
  try {
    console.log("Testing connection to:", API_URL);
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    console.log("Connection test successful:", {
      status: response.status,
      dataType: Array.isArray(data) ? "array" : typeof data,
      itemCount: Array.isArray(data) ? data.length : data.products?.length || 0,
    });
    return true;
  } catch (error) {
    console.error("Connection test failed:", error);
    return false;
  }
};

export { api };
