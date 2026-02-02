
import axios from "axios";
import Config from 'react-native-config'

const API_URL = process.env.API_URL;

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
      const response = await axios.post<LoginResponse>(
        `${API_URL}/auth/login`,
        credentials,
      );

      return response.data;
    } catch (error: any) {
      console.error("Error en login:", error);

      if (error.response?.status === 401) {
        throw new Error("Credenciales inválidas");
      } else if (error.response?.status === 404) {
        throw new Error("Usuario no encontrado");
      } else if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }

      throw new Error("Error al iniciar sesión. Por favor, intenta de nuevo.");
    }
  }
  ,
};
