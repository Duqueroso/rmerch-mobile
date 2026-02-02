import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      {/* THIS LINKS ARE TEMPORAL */}
      <Link href={"/(public)/Login/login"}>Login</Link>
      <Link href={"/(protected)/admin/admin"}>Vista de admin</Link>
      <Text style={styles.subtitle}>Esta pantalla está en desarrollo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },
});
