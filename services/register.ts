import axios from "axios";

const API_URL =
  process.env.EXPO_PUBLIC_API_URL ||
  process.env.API_URL ||
  "https://rmerchback.vercel.app/api";

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
}

export const registerService = {
  /**
   * Registra un nuevo usuario
   */
  async register(credentials: RegisterCredentials): Promise<RegisterResponse> {
    try {
      if (!API_URL) {
        throw new Error("API_URL no configurada");
      }

      console.log("Enviando registro a:", `${API_URL}/register`);
      const response = await axios.post<RegisterResponse>(
        `${API_URL}/register`,
        credentials,
        { timeout: 15000 },
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error en registro:", error.message);
        console.error("Error response:", error.response?.data);
        console.error("Error status:", error.response?.status);

        if (error.response?.data?.message) {
          throw new Error(error.response.data.message);
        }

        if (error.request) {
          throw new Error(
            "No se pudo conectar con el servidor. Verifica tu conexión o la URL del API.",
          );
        }

        throw new Error(error.message || "Error al registrar.");
      }

      console.error("Error inesperado en registro:", error);
      throw new Error(
        "Error al registrar. Por favor, verifica tu conexión a internet.",
      );
    }
  },
};
