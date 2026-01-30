import { SearchBar } from "@/components/search-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import CardProductsEmpty from "../components/Card/CardProductEmpty";
import useProducts from "../hooks/useProducts";
import { activeProductsStyles } from "../styles/activeProducts.styles";

const ActiveProducts = () => {
  const { searchQuery, setSearchQuery, mockProducts, filteredProducts } =
    useProducts();
  return (
    <View style={activeProductsStyles.container}>
      <LinearGradient
        colors={["#2D1B69", "#4C3BCF", "#5B4AC9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={activeProductsStyles.headerGradient}
      >
        <View style={activeProductsStyles.headerContent}>
          <View style={activeProductsStyles.headerTextContainer}>
            <Text style={activeProductsStyles.headerTitle}>
              Gestionar Productos
            </Text>
            <Text style={activeProductsStyles.headerSubtitle}>
              Administra el catálogo completo de productos
            </Text>
          </View>
          <Pressable style={activeProductsStyles.headerButton}>
            <Text style={activeProductsStyles.headerButtonText}>
              + Nuevo Producto
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
      <View style={activeProductsStyles.searchBarWrapper}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Buscar productos..."
        />
      </View>
      {mockProducts.length === 0 ? (
        <CardProductsEmpty />
      ) : (
        <View style={activeProductsStyles.tableCard}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <View style={{ minWidth: 700 }}>
              <View style={activeProductsStyles.tableHeader}>
                <Text
                  style={[activeProductsStyles.tableHeaderText, { flex: 2 }]}
                >
                  PRODUCTO
                </Text>
                <Text
                  style={[activeProductsStyles.tableHeaderText, { flex: 1 }]}
                >
                  PRECIO
                </Text>
                <Text
                  style={[activeProductsStyles.tableHeaderText, { flex: 1 }]}
                >
                  STOCK
                </Text>
                <Text
                  style={[activeProductsStyles.tableHeaderText, { flex: 1 }]}
                >
                  ESTADO
                </Text>
                <Text
                  style={[activeProductsStyles.tableHeaderText, { flex: 1 }]}
                >
                  ACCIONES
                </Text>
              </View>

              {filteredProducts.map((product) => (
                <View key={product.id} style={activeProductsStyles.tableRow}>
                  <View style={activeProductsStyles.productCell}>
                    <Image
                      source={
                        product.image ? { uri: product.image } : undefined
                      }
                      style={activeProductsStyles.productImage}
                    />
                    <View>
                      <Text style={activeProductsStyles.productName}>
                        {product.name}
                      </Text>
                      <Text style={activeProductsStyles.productDescription}>
                        {product.description}
                      </Text>
                    </View>
                  </View>

                  <View style={activeProductsStyles.cell}>
                    <Text style={{ fontSize: 13 }}>{product.price}</Text>
                  </View>

                  <View style={activeProductsStyles.cell}>
                    <Text style={{ fontSize: 13 }}>{product.stock}</Text>
                  </View>

                  <View style={activeProductsStyles.statusCell}>
                    <Text style={activeProductsStyles.statusText}>
                      {product.status}
                    </Text>
                  </View>

                  <View style={activeProductsStyles.actionsCell}>
                    <Pressable style={activeProductsStyles.editButton}>
                      <Text style={activeProductsStyles.editButtonText}>
                        Editar
                      </Text>
                    </Pressable>
                    <Pressable style={activeProductsStyles.deleteButton}>
                      <Text style={activeProductsStyles.deleteButtonText}>
                        Eliminar
                      </Text>
                    </Pressable>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default ActiveProducts;
