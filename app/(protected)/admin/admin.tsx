import { useAuth } from "@/app/context/AuthContext";
import Card from "@/components/admin/components/Card/Card";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../../../components/admin/styles/Admin.styles";

const Admin = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#2D1B69", "#4C3BCF", "#5B4AC9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View style={[{ padding: 10 }]}>
              <Text style={styles.headerTitle}>Panel de Administración</Text>
              <Text style={styles.headerSubtitle}>
                Bienvenido, {user?.name || "Usuario"}
              </Text>
            </View>
            <Ionicons name="settings-outline" size={28} color="#fff" />
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.section}>
            <Card
              text="Productos Activos"
              image={<Ionicons name="cube-outline" size={28} color="#5856FF" />}
              value={0}
              onPress={() => {
                router.replace("/(protected)/admin/items/ActiveProducts");
              }}
            />
            <Card
              text="Órdenes"
              image={<Ionicons name="cart-outline" size={28} color="#5856FF" />}
              value={0}
              onPress={() => {
                router.replace("/(protected)/admin/items/Orders");
              }}
            />
            <Card
              text="Usuarios Registrados"
              image={
                <Ionicons name="people-outline" size={28} color="#5856FF" />
              }
              value={2}
              onPress={() => {
                router.replace("/(protected)/admin/items/Users");
              }}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
            <Card
              text="Gestionar Productos"
              image={
                <Ionicons name="construct-outline" size={28} color="#5856FF" />
              }
              value={0}
              onPress={() => {}}
            />
            <Card
              text="Ver Órdenes"
              image={<Ionicons name="list-outline" size={28} color="#5856FF" />}
              value={0}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Admin;
