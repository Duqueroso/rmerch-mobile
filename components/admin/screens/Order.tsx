import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { orderStyles } from "../styles/order.styles";

const TABS = [
  { key: "all", label: "Todas", count: 0 },
  { key: "pending", label: "Pendientes", count: 0 },
  { key: "confirmed", label: "Confirmadas", count: 0 },
  { key: "delivered", label: "Entregadas", count: 0 },
];

const Order = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <View style={orderStyles.container}>
      <Text style={orderStyles.title}>Órdenes de Productos Oficiales</Text>
      <Text style={orderStyles.subtitle}>
        Gestiona las órdenes de productos oficiales RIWI
      </Text>
      <View style={orderStyles.tabsRow}>
        {TABS.map((tab) => (
          <Pressable
            key={tab.key}
            style={[
              orderStyles.tab,
              activeTab === tab.key && orderStyles.tabActive,
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text
              style={[
                orderStyles.tabText,
                activeTab === tab.key && orderStyles.tabTextActive,
              ]}
            >
              {tab.label} ({tab.count})
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={orderStyles.emptyCard}>
        <View style={orderStyles.emptyIconWrapper}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios/100/cccccc/document--v2.png",
            }}
            style={orderStyles.emptyIcon}
            resizeMode="contain"
          />
        </View>
        <Text style={orderStyles.emptyTitle}>No hay órdenes</Text>
        <Text style={orderStyles.emptySubtitle}>
          No se encontraron órdenes con los filtros seleccionados
        </Text>
      </View>
    </View>
  );
};

export default Order;
