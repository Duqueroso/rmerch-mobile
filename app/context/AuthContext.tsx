import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User, LoginCredentials, loginService } from "@/services/login";

interface AuthContextType {
  user: User | null; 
  token: string | null; 
  isAuthenticated: boolean; 
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>; 
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); 

  const checkAuth = async () => {
    try {
      const savedToken = await AsyncStorage.getItem("authToken");
      const savedUser = await AsyncStorage.getItem("user");

      // Si existen, restaurar la sesión
      if (savedToken && savedUser) {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
        console.log("Sesión restaurada");
      } else {
        console.log("No hay sesión guardada");
      }
    } catch (error) {
      console.error("Error al verificar autenticación:", error);
    } finally {
      setIsLoading(false); 
    }
  };


  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);

      const response = await loginService.login(credentials);


      await AsyncStorage.setItem("authToken", response.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.user));

      setToken(response.token);
      setUser(response.user);
      setIsAuthenticated(true);

      console.log("Login exitoso:", response.user.name);
    } catch (error: any) {
      console.error("Error en login:", error.message);
      throw error; 
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);


      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("user");

      setToken(null);
      setUser(null);
      setIsAuthenticated(false);

      console.log("Logout exitoso");
    } catch (error) {
      console.error("Error en logout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }

  return context;
};
