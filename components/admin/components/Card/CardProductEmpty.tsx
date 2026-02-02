import { Image, Pressable, Text, View } from "react-native";
import { emptyProductsStyles } from "../../styles/emptyProducts.styles";

const CardProductsEmpty = () => {
  return (
    <View style={emptyProductsStyles.card}>
      <View style={emptyProductsStyles.iconWrapper}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/100/cccccc/open-box--v2.png",
          }}
          style={emptyProductsStyles.icon}
          resizeMode="contain"
        />
      </View>
      <Text style={emptyProductsStyles.title}>No hay productos</Text>
      <Text style={emptyProductsStyles.subtitle}>
        Comienza agregando tu primer producto
      </Text>
      <Pressable style={emptyProductsStyles.button}>
        <Text style={emptyProductsStyles.buttonText}>+ Crear Producto</Text>
      </Pressable>
    </View>
  );
};

export default CardProductsEmpty;
