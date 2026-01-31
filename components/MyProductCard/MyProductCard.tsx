import { formatPrice } from "@/lib/formatPrice";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MyProductCardProps {
    image?: string;
    name: string;
    stock?: number;
    price:number;
    deleteProduct?: () => void;
    editProduct?:()=>void
}

export const MyProductCard = ({image,name,stock,price, deleteProduct,editProduct}:MyProductCardProps) => {



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri:image}}
          style={styles.image}
        />

        <View style={styles.actions}>
          <TouchableOpacity style={styles.editButton} onPress={()=> editProduct?.()}>
            <Ionicons name="pencil" size={20} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={() => deleteProduct?.()}>
            <Ionicons name="trash" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>


        <View style={styles.priceContainer}>
          <Text style={styles.price}>{formatPrice(price)}</Text>
          <Text style={styles.stock}>Stock: {stock}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 240,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  badge: {
    position: "absolute",
    top: 14,
    left: 14,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },
  badgeOffer: {
    backgroundColor: "#7C3AED",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },

  actions: {
    position: "absolute",
    top: 14,
    right: 14,
    gap: 10,
    zIndex: 10,
    flexShrink: 0,
  },
  editButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#6366F1",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  deleteButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EF4444",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  content: {
    padding: 14,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 10,
    minHeight: 44,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 13,
    color: "#9CA3AF",
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  price: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1F2937",
  },
  stock: {
    fontSize: 15,
    color: "#9CA3AF",
  },
});
