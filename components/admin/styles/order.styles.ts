import { StyleSheet } from "react-native";

export const orderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
    padding: 16,
  },
  breadcrumb: {
    color: "#888",
    fontSize: 14,
    marginBottom: 2,
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
  tabsRow: {
    flexDirection: "row",
    marginBottom: 18,
    gap: 8,
  },
  tab: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  tabActive: {
    backgroundColor: "#5856FF",
    borderColor: "#5856FF",
  },
  tabText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 15,
  },
  tabTextActive: {
    color: "#fff",
  },
  emptyCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F1F1F4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  emptyIconWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#F6F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  emptyIcon: {
    width: 48,
    height: 48,
    tintColor: '#B0B3C7',
  },
  emptyTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#222',
    marginBottom: 6,
  },
  emptySubtitle: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 0,
  },
});
