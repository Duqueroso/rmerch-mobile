import { StyleSheet } from "react-native";

export const emptyProductsStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F1F1F4",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  iconWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#F6F7FB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  icon: {
    width: 48,
    height: 48,
    tintColor: "#B0B3C7",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#222",
    marginBottom: 6,
  },
  subtitle: {
    color: "#888",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#5856FF",
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
