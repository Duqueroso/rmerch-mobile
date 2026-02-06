import { useAuth } from "@/app/context/AuthContext";
import { MyProductCard } from "@/components/MyProductCard/MyProductCard";
import {
    deleteProductByUser,
    getProductByIdUser,
} from "@/services/user/productServices";

import { Product } from "@/types/product";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function UserProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.id) {
      Alert.alert("Error", "No se pudieron cargar los productos");
      router.push("/(tabs)/home");
      return;
    }
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductByIdUser(user.id);
        console.log(`DATA USUARIO${data}`);
        setProducts(data || []);
      } catch (error) {
        console.error("Error al cargar productos:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const deleteProduct = async (id: string) => {
    try {
      await deleteProductByUser(id);
      setProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (id: string) => {
    router.replace({
      pathname: "/(protected)/user/editProduct",
      params: { id: id },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        {/* Header con gradiente */}
        <LinearGradient
          colors={["#5B21B6", "#6366F1", "#3B82F6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Mis productos</Text>
            <Text style={styles.headerSubtitle}>Gestiona tus productos</Text>
          </View>
        </LinearGradient>

        {/* Contenido */}
        <View style={styles.container}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#6366F1" />
            </View>
          ) : products.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No tienes productos aún</Text>
            </View>
          ) : (
            <View style={styles.productsContainer}>
              {products.map((product) => (
                <View key={product._id} style={styles.cardWrapper}>
                  <MyProductCard
                    image={product.image}
                    price={product.price}
                    name={product.name}
                    stock={product.stock}
                    deleteProduct={() => deleteProduct(product._id)}
                    editProduct={() => editProduct(product._id)}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  headerContent: {
    gap: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: "center",
  },
  productsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  cardWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#9CA3AF",
    fontWeight: "500",
  },
});
