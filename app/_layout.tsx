import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(public)/Login/login" />
          <Stack.Screen name="(public)/Register/register" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(protected)/admin/admin" />
          <Stack.Screen name="(protected)/admin/items/ActiveProducts" />
          <Stack.Screen name="(protected)/admin/items/Orders" />
          <Stack.Screen name="(protected)/admin/items/Users" />
          <Stack.Screen name="(protected)/user/userProducts" />
          <Stack.Screen name="(protected)/user/editProduct" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
