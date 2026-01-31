import { URL_BACKEND } from "@env";
import { api } from "./api";

// Test de conectividad con el backend
export const testConnection = async () => {
  try {
    console.log("Testing connection to:", URL_BACKEND);
    const response = await fetch(`${URL_BACKEND}/products`);
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
