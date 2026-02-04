import { Tabs, useRouter } from "expo-router";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useAuth } from "@/contexts/AuthContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  // Mientras se restaura la sesión, evitamos renderizar las tabs para no generar redirecciones prematuras
  if (isLoading) return null;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      {/* Tab Login - Solo visible cuando NO está autenticado */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Login",
          href: isAuthenticated ? null : "/(tabs)/explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            if (!isAuthenticated) {
              router.push("/(public)/Login/login");
            }
          },
        }}
      />

      {/* Tab Perfil - Solo visible cuando SÍ está autenticado */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          href: isAuthenticated ? "/(tabs)/profile" : null,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrito",
          // Se registra la ruta para navegación interna (icono en Home) sin mostrar tab extra.
          href: null,
        }}
      />
    </Tabs>
  );
}
