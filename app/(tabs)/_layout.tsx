import { Tabs, useRouter } from "expo-router";

import { HapticTab } from "@/components/haptic-tab";
import { Icon } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useAuth } from "../context/AuthContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  // Mientras se restaura la sesión, evitamos renderizar las tabs para no generar redirecciones prematuras
  if (isLoading) return null;

  // Map route names to icon identifiers (can use prefixed family or alias keys)
  const iconForRoute: Record<string, string> = {
    home: "material:home",
    productView: "material:visibility",
    // Use a cross-platform Ionicons name to ensure visibility
    createProduct: "ion:add-circle-outline",
    explore: "material:person",
    profile: "material:person",
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarIcon: ({ color, size = 24 }) => (
          <Icon
            name={iconForRoute[route.name] ?? "material:home"}
            size={28}
            color={color}
          />
        ),
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Login",
          href: isAuthenticated ? null : "/(tabs)/explore",
        }}
        listeners={{
          tabPress: (e) => {
            if (!isAuthenticated) {
              router.push("/(public)/Login/login");
            }
          },
        }}
      />

      <Tabs.Screen name="productView" options={{ title: "ProductView" }} />
      <Tabs.Screen name="createProduct" options={{ title: "CreateProduct" }} />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          href: isAuthenticated ? "/(tabs)/profile" : null,
        }}
      />
    </Tabs>
  );
}
