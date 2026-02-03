import { StyleSheet, View } from "react-native";
import Login from "../(public)/Login/login";

export default function ExploreScreen() {
  return (
    <View style={[[{ flex: 1 }]]}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
  },
});
