import { registerService } from "@/services/register";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import FormItems from "../../../components/auth/Login/components/FormItems";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const sendData = async () => {
    try {
      if (!name.trim() || !email.trim() || !password.trim()) {
        Alert.alert(
          "Campos requeridos",
          "Completa nombre, correo y contraseña.",
          [{ text: "OK" }],
        );
        return;
      }

      setIsLoading(true);

      await registerService.register({ name, email, password });

      Alert.alert(
        "Registro exitoso",
        "Tu cuenta fue creada. Ahora inicia sesión.",
        [{ text: "OK", onPress: () => router.replace("/(public)/Login/login") }],
      );
    } catch (error: any) {
      Alert.alert(
        "Error de registro",
        error.message || "No se pudo registrar. Intenta de nuevo.",
        [{ text: "OK" }],
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 48 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>
        Crear cuenta
      </Text>

      <FormItems
        textLabel="Nombre"
        value={name}
        onChange={setName}
        style={{}}
        placeholder="Tu nombre"
        icon={<MaterialCommunityIcons name="account" size={22} color="#666" />}
      />

      <FormItems
        textLabel="Correo electronico"
        value={email}
        onChange={setEmail}
        style={{}}
        placeholder="tu@email.com"
        icon={<MaterialCommunityIcons name="email-outline" size={22} color="#666" />}
      />

      <FormItems
        textLabel="Contraseña"
        value={password}
        onChange={setPassword}
        style={{}}
        placeholder="Tu contraseña"
        icon={<MaterialCommunityIcons name="lock-outline" size={22} color="#666" />}
        secureTextEntry
      />

      <View style={{ marginVertical: 25 }}>
        <LinearGradient
          colors={["#3D2F7E", "#5F4CAF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 12, overflow: "hidden" }}
        >
          <Pressable
            style={{
              paddingVertical: 16,
              paddingHorizontal: 30,
              alignItems: "center",
              justifyContent: "center",
              opacity: isLoading ? 0.7 : 1,
            }}
            onPress={sendData}
            disabled={isLoading}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              {isLoading ? "Registrando..." : "Registrarme"}
            </Text>
          </Pressable>
        </LinearGradient>
      </View>

      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text style={{ color: "#666", fontSize: 14 }}>
          ¿Ya tienes cuenta?{" "}
          <Text
            style={{ color: "#5F4CAF", fontWeight: "bold" }}
            onPress={() => router.replace("/(public)/Login/login")}
          >
            Inicia sesión
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;
