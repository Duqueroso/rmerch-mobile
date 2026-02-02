import { SearchBar } from "@/components/search-bar";
import { Image, ScrollView, Text, View } from "react-native";
import useUsers from "../hooks/useUsers";
import { usersStyles } from "../styles/users.styles";

const Users = () => {
  const {
    USERS,
    searchQuery,
    setSearchQuery,
    filteredUsers,
    total,
    admins,
    sellers,
  } = useUsers();
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true}>
      <View style={usersStyles.container}>
        <Text style={usersStyles.title}>Gestión de Usuarios</Text>
        <Text style={usersStyles.subtitle}>
          Administra los usuarios registrados en la plataforma
        </Text>
        <View style={usersStyles.searchBarWrapper}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Buscar por nombre, email o rol"
          />
        </View>
        <Text style={usersStyles.foundText}>
          {filteredUsers.length} usuarios encontrados
        </Text>
        <View style={usersStyles.statsRow}>
          <View style={usersStyles.statCard}>
            <View
              style={[usersStyles.statIconWrapper, usersStyles.statIconUser]}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/5856FF/user-group-man-man.png",
                }}
                style={usersStyles.statIcon}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={usersStyles.statLabel}>Total Usuarios</Text>
              <Text style={usersStyles.statValue}>{total}</Text>
            </View>
          </View>
          <View style={usersStyles.statCard}>
            <View
              style={[usersStyles.statIconWrapper, usersStyles.statIconAdmin]}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/A855F7/security-checked.png",
                }}
                style={usersStyles.statIcon}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={usersStyles.statLabel}>Administradores</Text>
              <Text style={usersStyles.statValue}>{admins}</Text>
            </View>
          </View>
          <View style={usersStyles.statCard}>
            <View
              style={[usersStyles.statIconWrapper, usersStyles.statIconSeller]}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/22C55E/shopping-bag.png",
                }}
                style={usersStyles.statIcon}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={usersStyles.statLabel}>Vendedores</Text>
              <Text style={usersStyles.statValue}>{sellers}</Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={[usersStyles.tableCard, { minWidth: 700 }]}>
            <View style={[usersStyles.tableHeader, { alignItems: "center" }]}>
              <Text
                style={[
                  usersStyles.tableHeaderText,
                  { flex: 1, textAlign: "center", alignSelf: "center" },
                ]}
              >
                USUARIO
              </Text>
              <Text
                style={[
                  usersStyles.tableHeaderText,
                  { flex: 2, textAlign: "center", alignSelf: "center" },
                ]}
              >
                EMAIL
              </Text>
              <Text
                style={[
                  usersStyles.tableHeaderText,
                  { flex: 1, textAlign: "center", alignSelf: "center" },
                ]}
              >
                ROL
              </Text>
            </View>
            {filteredUsers.map((user) => (
              <View
                key={user.id}
                style={[
                  usersStyles.tableRow,
                  { alignItems: "center", height: 56 },
                ]}
              >
                <View
                  style={[
                    usersStyles.cell,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    },
                  ]}
                >
                  <View style={usersStyles.avatar}>
                    <Text style={usersStyles.avatarText}>{user.avatar}</Text>
                  </View>
                  <Text
                    style={[
                      usersStyles.name,
                      { alignSelf: "center", textAlign: "center" },
                    ]}
                  >
                    {user.name}
                  </Text>
                </View>
                <View
                  style={[
                    usersStyles.cell,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    },
                  ]}
                >
                  <Text
                    style={[
                      usersStyles.email,
                      { alignSelf: "center", textAlign: "center" },
                    ]}
                  >
                    {user.email}
                  </Text>
                </View>
                <View
                  style={[
                    usersStyles.cell,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    },
                  ]}
                >
                  <Text
                    style={[
                      usersStyles.roleBadge,
                      user.role === "Usuario" && usersStyles.roleUser,
                      user.role === "Administrador" && usersStyles.roleAdmin,
                      user.role === "Vendedor" && usersStyles.roleSeller,
                      { alignSelf: "center", textAlign: "center" },
                    ]}
                  >
                    {user.role}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={usersStyles.infoCard}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-filled/50/5856FF/info.png",
            }}
            style={usersStyles.infoIcon}
            resizeMode="contain"
          />
          <View style={{ flex: 1 }}>
            <Text style={usersStyles.infoTitle}>Gestión de Usuarios</Text>
            <Text style={usersStyles.infoText}>
              Cómo administrador, puedes cambiar el rol de cualquier usuario
              entre "Usuario" y "Vendedor", o eliminarlos del sistema. Los
              administradores no pueden ser editados ni eliminados.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Users;
