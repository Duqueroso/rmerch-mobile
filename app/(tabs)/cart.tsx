import { useCart, CartItem } from "@/contexts/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Datos demo para visualizar la UI del carrito mientras el endpoint real no esté listo.
const demoItems: CartItem[] = [
  {
    product: {
      _id: "demo-1",
      name: "Papas de limón",
      price: 50000,
      rating: 4.9,
      reviewCount: 128,
      image:
        "https://productoselcaribe.com/wp-content/uploads/2023/12/caribenew2_0016_caribe-web-009.jpg",
      badge: "Nuevo",
    },
    quantity: 1,
  },
];

const formatPrice = (price: number) => `$ ${price.toLocaleString("es-CO")}`;

export default function CartScreen() {
  const router = useRouter();
  const { items, totalPrice, updateQuantity, removeItem } = useCart();
  const isDemo = items.length === 0;
  const displayItems = isDemo ? demoItems : items;
  const displayTotal = isDemo
    ? demoItems.reduce(
        (sum, item) => sum + item.quantity * item.product.price,
        0,
      )
    : totalPrice;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#5B21B6", "#6366F1", "#3B82F6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.headerTitle}>Carrito</Text>
        <View style={styles.headerSpacer} />
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {isDemo && (
          <View style={styles.demoBanner}>
            <Ionicons name="information-circle" size={18} color="#4338CA" />
            <Text style={styles.demoText}>
              Mostrando productos de ejemplo
            </Text>
          </View>
        )}

        {displayItems.map((item) => (
          <View key={item.product._id} style={styles.itemCard}>
            <Image source={{ uri: item.product.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName} numberOfLines={2}>
                {item.product.name}
              </Text>
              <Text style={styles.itemPrice}>
                {formatPrice(item.product.price)}
              </Text>

              <View style={styles.itemActions}>
                <View style={styles.quantityControl}>
                  <Pressable
                    style={styles.quantityButton}
                    onPress={() => {
                      if (isDemo) return;
                      updateQuantity(item.product._id, item.quantity - 1);
                    }}
                  >
                    <Ionicons name="remove" size={18} color="#1c1c4a" />
                  </Pressable>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <Pressable
                    style={styles.quantityButton}
                    onPress={() => {
                      if (isDemo) return;
                      updateQuantity(item.product._id, item.quantity + 1);
                    }}
                  >
                    <Ionicons name="add" size={18} color="#1c1c4a" />
                  </Pressable>
                </View>

                <Pressable
                  style={styles.removeButton}
                  onPress={() => {
                    if (isDemo) return;
                    removeItem(item.product._id);
                  }}
                >
                  <Ionicons name="trash-outline" size={18} color="#EF4444" />
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{formatPrice(displayTotal)}</Text>
        </View>
        <Pressable style={styles.checkoutButton} onPress={() => {}}>
          <LinearGradient
            colors={["#1c1c4a", "#6458ee"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.checkoutGradient}
          >
            <Ionicons name="card-outline" size={20} color="#FFFFFF" />
            <Text style={styles.checkoutText}>Proceder al pago</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FE",
  },
  header: {
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
  headerSpacer: {
    width: 40,
    height: 40,
  },
  content: {
    padding: 20,
    paddingBottom: 140,
  },
  demoBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 16,
  },
  demoText: {
    color: "#4338CA",
    fontSize: 13,
    fontWeight: "600",
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  itemImage: {
    width: 86,
    height: 86,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#5856FF",
    marginTop: 4,
  },
  itemActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 999,
    paddingHorizontal: 8,
    height: 32,
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityText: {
    minWidth: 24,
    textAlign: "center",
    fontWeight: "700",
    color: "#1F2937",
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 12,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "600",
  },
  totalValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1F2937",
  },
  checkoutButton: {
    borderRadius: 14,
    overflow: "hidden",
  },
  checkoutGradient: {
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  checkoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
