import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Index() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated && user) {
        // Si está autenticado, redirigir al home
        router.replace("/(tabs)/home");
      } else {
        // Si no está autenticado, ir al login
        router.replace("/(public)/Login/login");
      }
    }
  }, [isLoading, isAuthenticated, user, router]);

  // Mostrar loading mientras verifica la autenticación
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#5856FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
