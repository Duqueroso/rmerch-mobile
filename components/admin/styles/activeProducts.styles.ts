import { StyleSheet } from "react-native";

export const activeProductsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F6F7FB",
  },
  headerGradient: {
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 0,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    borderRadius: 20,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 2,
    color: "#fff",
  },
  headerSubtitle: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 0,
  },
  headerButton: {
    backgroundColor: "#5856FF",
    borderRadius: 8,
    paddingHorizontal: 22,
    paddingVertical: 16,
    minWidth: 120,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 12,
  },
  headerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  searchBarWrapper: {
    marginBottom: 16,
  },
  tableCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    elevation: 2,
    minHeight: 350,
    margin: 10,
  },
  tableHeader: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  tableHeaderText: {
    fontWeight: "bold",
    color: "#888",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
  },
  productCell: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 8,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontWeight: "bold",
  },
  productDescription: {
    color: "#888",
    fontSize: 12,
  },
  cell: {
    flex: 1,
    justifyContent: "center",
  },
  statusCell: {
    flex: 1,
    justifyContent: "center",
  },
  statusText: {
    color: "#22c55e",
    backgroundColor: "#d1fae5",
    borderRadius: 8,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    fontSize: 12,
  },
  actionsCell: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#F3F3F3",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
  },
  editButtonText: {
    color: "#222",
    fontSize: 12,
  },
  deleteButton: {
    backgroundColor: "#fee2e2",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  deleteButtonText: {
    color: "#ef4444",
    fontSize: 12,
  },
});
