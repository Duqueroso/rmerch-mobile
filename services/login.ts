import axios from "axios";

const API_URL = "https://rmerchback.vercel.app/api";

// Interfaces
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

// Servicio de login
export const loginService = {
  /**
   * Realiza el login del usuario
   * @param credentials - Email y password del usuario
   * @returns Promise con la respuesta del login
   */
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      console.log("Enviando petición a:", `${API_URL}/login`);
      console.log("Email:", credentials.email);

      const response = await axios.post<LoginResponse>(
        `${API_URL}/login`,
        credentials,
      );

      console.log("Status:", response.status);
      console.log("Data recibida:", JSON.stringify(response.data, null, 2));

      // Validar que la respuesta tenga la estructura esperada
      if (!response.data.token || !response.data.user) {
        throw new Error("Respuesta del servidor inválida");
      }

      return response.data;
    } catch (error: any) {
      console.error("Error completo:", error);
      console.error("Error response:", error.response?.data);
      console.error("Error status:", error.response?.status);

      if (error.response?.status === 401) {
        throw new Error(
          "Credenciales inválidas. Verifica tu email y contraseña.",
        );
      } else if (error.response?.status === 404) {
        throw new Error("Usuario no encontrado");
      } else if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else if (error.message) {
        throw new Error(error.message);
      }

      throw new Error(
        "Error al iniciar sesión. Por favor, verifica tu conexión a internet.",
      );
    }
  },
};
