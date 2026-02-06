import { useAuth } from "@/app/context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { authenticateBiometric } from "../services/biometric.service";
import { getToken } from "../services/token.service";
import { FormStyles } from "../styles/Form.styles";
import FormItems from "./FormItems";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { login } = useAuth();

  const sendData = async () => {
    try {
      setIsLoading(true);
      await login({ email, password });

      console.log("Login exitoso, redirigiendo...");

      router.replace("/(tabs)/home");
    } catch (error: any) {
      console.error("Error en login:", error);
      Alert.alert(
        "Error de inicio de sesión",
        error.message || "Credenciales inválidas. Por favor, intenta de nuevo.",
        [{ text: "OK" }],
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleBiometricLogin = async () => {
    const success = await authenticateBiometric();
    if (success) {
      const token = await getToken();
      if (token) {
        router.replace("/(tabs)/home");
      } else {
        alert("No hay sesión guardada.");
      }
    } else {
      alert("Autenticación biométrica fallida.");
    }
  };

  return (
    <View style={[FormStyles.container]}>
      <View>
        <FormItems
          textLabel="Correo electronico"
          value={email}
          onChange={(text) => {
            setEmail(text);
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          placeholder="tu@email.com"
          icon={
            <MaterialCommunityIcons
              name="email-outline"
              size={22}
              color="#666"
            />
          }
        />

        <FormItems
          textLabel="Contraseña"
          value={password}
          onChange={(text) => {
            setPassword(text);
          }}
          style={{}}
          placeholder="Tu contraseña"
          icon={
            <MaterialCommunityIcons
              name="lock-outline"
              size={22}
              color="#666"
            />
          }
          secureTextEntry={true}
        />
        <View style={{ marginVertical: 25 }}>
          <LinearGradient
            colors={["#3D2F7E", "#5F4CAF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 12,
              overflow: "hidden",
            }}
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
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Text>
            </Pressable>
          </LinearGradient>
        </View>

        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <View
            style={{
              position: "relative",
              backgroundColor: "#E0E0E0",
              width: "100%",
              height: 1,
              zIndex: 1,
            }}
          />
          <Text
            style={{
              position: "absolute",
              top: -10,
              zIndex: 2,
              color: "#999",
              backgroundColor: "#fff",
              paddingHorizontal: 15,
              fontSize: 13,
            }}
          >
            o continúa con
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#F5E6FF",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              marginRight: 10,
            }}
          >
            <MaterialCommunityIcons
              name="face-recognition"
              size={36}
              color="#D098FF"
            />
            <Text style={{ color: "#D098FF", marginTop: 8, fontSize: 13 }}>
              Face ID
            </Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#E5F7F2",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              marginLeft: 10,
            }}
            onPress={handleBiometricLogin}
          >
            <MaterialCommunityIcons
              name="fingerprint"
              size={36}
              color="#57C7A0"
            />
            <Text style={{ color: "#57C7A0", marginTop: 8, fontSize: 13 }}>
              Huella
            </Text>
          </Pressable>
        </View>
      </View>
      {/* Texto de registro */}
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={{ color: "#666", fontSize: 14 }}>
          ¿No tienes cuenta?{" "}
          <Text style={{ color: "#5F4CAF", fontWeight: "bold" }}>
            Regístrate
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Form;
