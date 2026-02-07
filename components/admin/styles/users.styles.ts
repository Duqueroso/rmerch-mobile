import { StyleSheet } from "react-native";

export const usersStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#222",
    marginBottom: 2,
  },
  subtitle: {
    color: "#555",
    fontSize: 15,
    marginBottom: 18,
  },
  searchBarWrapper: {
    marginBottom: 16,
  },
  foundText: {
    fontWeight: "bold",
    color: "#222",
    fontSize: 15,
    marginBottom: 10,
  },
  statsRow: {
    gap: 12,
    marginBottom: 18,
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F1F1F4",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginBottom: 8,
  },
  statIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  statIconUser: {
    backgroundColor: "#E9E6FF",
  },
  statIconAdmin: {
    backgroundColor: "#F3E9FF",
  },
  statIconSeller: {
    backgroundColor: "#E9FFF3",
  },
  statIcon: {
    width: 28,
    height: 28,
  },
  statLabel: {
    color: "#888",
    fontSize: 15,
    marginBottom: 2,
  },
  statValue: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#5856FF",
  },
  tableCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F1F1F4",
    marginBottom: 18,
    padding: 8,
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
    fontSize: 14,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#F0F0F0",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E9E6FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    fontWeight: "bold",
    color: "#5856FF",
    fontSize: 18,
  },
  cell: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
  },
  email: {
    color: "#888",
    fontSize: 14,
  },
  roleBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "flex-start",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 6,
  },
  roleUser: {
    backgroundColor: "#E9E6FF",
    color: "#5856FF",
  },
  roleAdmin: {
    backgroundColor: "#F3E9FF",
    color: "#A855F7",
  },
  roleSeller: {
    backgroundColor: "#E9FFF3",
    color: "#22C55E",
  },
  infoCard: {
    backgroundColor: "#F6F7FF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#A5B4FC",
    padding: 18,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  infoIcon: {
    width: 22,
    height: 22,
    marginRight: 8,
    tintColor: "#5856FF",
  },
  infoTitle: {
    fontWeight: "bold",
    color: "#5856FF",
    fontSize: 16,
    marginBottom: 2,
  },
  infoText: {
    color: "#5856FF",
    fontSize: 15,
  },
});
