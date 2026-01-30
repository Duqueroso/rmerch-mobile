import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native";
import Form from "./components/Form";

const Login = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#2E1F6E", "#4A3B8F", "#5F4CAF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          paddingTop: 60,
          paddingBottom: 100,
          paddingHorizontal: 30,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        {/* Logo */}
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
            R
          </Text>
        </View>
        
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "white",
            marginBottom: 10,
          }}
        >
          ¡Bienvenido!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: 20,
          }}
        >
          Inicia sesión para continuar
        </Text>
      </LinearGradient>

      {/* Formulario */}
      <View style={{ marginTop: -60 }}>
        <Form />
      </View>
    </ScrollView>
  );
};

export default Login;
