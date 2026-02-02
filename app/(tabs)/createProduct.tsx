import { createProduct } from "@/services/product";
import { Feather, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function CreateListingScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [isDigital, setIsDigital] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickFromGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permiso requerido", "Necesitamos acceso a tus fotos");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permiso requerido", "Necesitamos acceso a la cámara");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openImageOptions = () => {
    Alert.alert("Imagen", "Selecciona una opción", [
      { text: "Cámara", onPress: takePhoto },
      { text: "Galería", onPress: pickFromGallery },
      { text: "Cancelar", style: "cancel" },
    ]);
  };

  const removeImage = () => {
    setImage(null);
  };

  const validateForm = () => {
    if (!name.trim()) {
      Alert.alert("Error", "El nombre es requerido");
      return false;
    }

    if (Number(price) <= 0) {
      Alert.alert("Error", "El precio debe ser mayor a 0");
      return false;
    }

    if (Number(stock) < 0) {
      Alert.alert("Error", "El stock debe ser mayor o igual a 0");
      return false;
    }

    if (!image) {
      Alert.alert("Error", "Debe agregar al menos una imagen");
      return false;
    }

    return true;
  };

  const handleCreateProduct = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await createProduct(
        {
          name: name.trim(),
          description: description.trim(),
          price: Number(price),
          stock: Number(stock),
          images: [image!],
          isDigital: isDigital,
        },
      //  token
      );

      Alert.alert("Éxito", "Producto creado correctamente", [
        {
          text: "OK",
          onPress: () => {
            setName("");
            setDescription("");
            setPrice("");
            setStock("");
            setIsDigital(false);
            setImage(null);
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "No se pudo crear el producto");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backBtn}>
          <Ionicons name="arrow-back" size={20} color="#1c1c4a" />
        </Pressable>
        <Text style={styles.headerTitle}>Crear Producto</Text>
      </View>

      {/* Images Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Imágenes</Text>
        <View style={styles.photosRow}>
          {image ? (
            <View style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.image} />
              <Pressable
                style={styles.removeBadge}
                onPress={removeImage}
                hitSlop={8}
              >
                <Feather name="x" size={14} color="white" />
              </Pressable>
            </View>
          ) : (
            <Pressable
              style={styles.addPhoto}
              onPress={openImageOptions}
            >
              <Feather name="camera" size={24} color="#6458ee" />
              <Text style={styles.addPhotoText}>Agregar Foto</Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* Name Input */}
      <View style={styles.section}>
        <Text style={styles.label}>Nombre del producto</Text>
        <View style={styles.input}>
          <Feather name="tag" size={18} color="#666699" />
          <TextInput
            placeholder="Ej: Laptop Dell Inspiron"
            placeholderTextColor="#666699"
            style={styles.textInput}
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

      {/* Description Input */}
      <View style={styles.section}>
        <Text style={styles.label}>Descripción</Text>
        <View style={[styles.input, styles.textArea]}>
          <Feather
            name="file-text"
            size={18}
            color="#666699"
            style={styles.textAreaIcon}
          />
          <TextInput
            placeholder="Describe tu producto..."
            placeholderTextColor="#666699"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            style={[styles.textInput, styles.textAreaInput]}
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </View>

      {/* Price and Stock Row */}
      <View style={styles.row}>
        <View style={[styles.section, styles.halfWidth]}>
          <Text style={styles.label}>Precio</Text>
          <View style={styles.input}>
            <Text style={styles.dollar}>$</Text>
            <TextInput
              placeholder="0.00"
              placeholderTextColor="#666699"
              keyboardType="numeric"
              style={styles.textInput}
              value={price}
              onChangeText={setPrice}
            />
          </View>
        </View>

        <View style={[styles.section, styles.halfWidth]}>
          <Text style={styles.label}>Stock</Text>
          <View style={styles.input}>
            <Feather name="layers" size={18} color="#666699" />
            <TextInput
              placeholder="0"
              placeholderTextColor="#666699"
              keyboardType="numeric"
              style={styles.textInput}
              value={stock}
              onChangeText={setStock}
            />
          </View>
        </View>
      </View>

      {/* Digital Product Switch */}
      <View style={styles.section}>
        <Text style={styles.label}>Tipo de producto</Text>
        <View style={styles.switchRow}>
          <View style={styles.switchInfo}>
            <Text style={styles.switchText}>Producto digital</Text>
            <Text style={styles.switchSubtext}>
              No requiere envío físico
            </Text>
          </View>
          <Switch
            value={isDigital}
            onValueChange={setIsDigital}
            trackColor={{ false: "#E5E7EB", true: "#6458ee" }}
            thumbColor={isDigital ? "#ffffff" : "#f4f3f4"}
          />
        </View>
      </View>

      {/* Publish Button */}
      <Pressable
        style={[styles.buttonWrapper, isLoading && styles.buttonDisabled]}
        onPress={handleCreateProduct}
        disabled={isLoading}
      >
        <LinearGradient
          colors={['#1c1c4a', '#6458ee']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Publicando..." : "Publicar Producto"}
          </Text>
        </LinearGradient>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f3f3f7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    color: "#1c1c4a",
    fontSize: 24,
    fontWeight: "700",
  },
  section: {
    marginBottom: 20,
  },
  label: {
    color: "#1c1c4a",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
  },
  photosRow: {
    flexDirection: "row",
    gap: 12,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#f3f3f7",
  },
  removeBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#FF6B6B",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  addPhoto: {
    width: 100,
    height: 100,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f7",
  },
  addPhotoText: {
    color: "#666699",
    marginTop: 8,
    fontSize: 12,
    fontWeight: "500",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f7",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    gap: 12,
  },
  textInput: {
    flex: 1,
    color: "#1c1c4a",
    fontSize: 15,
  },
  textArea: {
    alignItems: "flex-start",
    minHeight: 120,
  },
  textAreaIcon: {
    marginTop: 2,
    alignSelf: "flex-start",
  },
  textAreaInput: {
    paddingTop: 0,
  },
  dollar: {
    color: "#6458ee",
    fontSize: 18,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  halfWidth: {
    flex: 1,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f3f3f7",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  switchInfo: {
    flex: 1,
  },
  switchText: {
    color: "#1c1c4a",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
  },
  switchSubtext: {
    color: "#666699",
    fontSize: 12,
  },
  buttonWrapper: {
    marginTop: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});