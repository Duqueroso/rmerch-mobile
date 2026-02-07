import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Octicons from '@expo/vector-icons/Octicons';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Profile() {

    const router = useRouter()

    const { isAuthenticated, user, logout, isLoading } = useAuth()

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            Alert.alert(
                "Ups!",
                "Debes iniciar sesion para ingresar a esta seccion"
            );
            router.replace("/(tabs)/home");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading) return null;




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <ScrollView scrollEnabled={true}>
                <LinearGradient
                    style={Style.headerContainer}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#5B21B6", "#6366F1", "#3B82F6"]}>
                    <View style={Style.profileHeaderContainer}>
                        <View>
                            <Text style={Style.myPerfil}>Mi perfil</Text>
                        </View>
                        <View style={Style.profileBadge}>
                            <View style={{ flexDirection: "row", gap: 20 }}>
                                <LinearGradient
                                    colors={["#6B5CFA", "#a35cfa"]}
                                    style={Style.iconUser}>

                                </LinearGradient>
                                <View>
                                    <Text style={Style.nameUser}>{user?.name}</Text>
                                    <Text style={Style.emailUser}>{user?.email}</Text>
                                </View>
                            </View>
                            <View style={Style.settingsIcon}>
                                <Feather name="settings" size={18} color="white" />
                            </View>
                        </View>
                        <View style={Style.statsBadge}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ color: "#6B5CFA", fontSize: 25, fontWeight: "bold" }}>12</Text>
                                <Text style={{ color: "#928e8e", opacity: 0.8 }}>Productos</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ color: "#f7a4ff", fontSize: 25, fontWeight: "bold" }}>5</Text>
                                <Text style={{ color: "#928e8e", opacity: 0.8 }}>Vendidos</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ color: "#76cd75", fontSize: 25, fontWeight: "bold" }}>3.5k</Text>
                                <Text style={{ color: "#928e8e", opacity: 0.8 }}>Ganancias</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={Style.listActions}>
                    <View style={Style.actionBar}>
                        <View style={{ padding: 20, borderBottomColor: "#928e8e", borderBottomWidth: 0.5 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>

                                <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                                    <View style={Style.iconActionBarContainer}>
                                        <Feather name="shopping-bag" size={20} color="#6B5CFA" />
                                    </View>
                                    <View>
                                        <Text>Mis productos</Text>
                                    </View>
                                </View>


                                <View>
                                    <Pressable onPress={() => {
                                        router.push("/(protected)/user/userProducts")
                                    }}>
                                        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                    </Pressable>

                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>

                                <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                                    <View style={Style.iconActionBarContainer}>
                                        <AntDesign name="question-circle" size={20} color="#6B5CFA" />
                                    </View>
                                    <View>
                                        <Text>Preguntas frecuentes</Text>
                                    </View>
                                </View>


                                <View>
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={Style.pressableSignOutContainer}>
                    <Pressable style={Style.pressableSignOut} onPress={logout}>
                        <Octicons name="sign-out" size={20} color="#f33514" />
                        <Text style={{ color: "#f33514", fontWeight: "light", fontSize: 15 }}>Cerrar sesión</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}



const Style = StyleSheet.create({
    headerContainer: {
        height: 250,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: "visible",
        position: "relative",

    },
    profileHeaderContainer: {
        position: "absolute",
        top: 50,
        left: 30,
        right: 30,
        gap: 30,



    },
    myPerfil: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 30
    },
    profileBadge: {
        backgroundColor: 'rgba(236, 217, 247, 0.5)',
        padding: 10,
        width: "100%",
        height: 80,
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    iconUser: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    nameUser: {
        color: "#ffffff",
        fontSize: 20
    },
    emailUser: {
        color: "#ffffff",
        opacity: 0.4,
    },
    settingsIcon: {
        backgroundColor: 'rgba(235, 231, 231, 0.5)',
        borderRadius: 50,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        right: 10,
        width: 30,
        height: 30,

    },
    statsBadge: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 90,
        width: "100%",
        borderRadius: 10,
        bottom: -3,
        shadowColor: "#bebebe",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,


    },
    listActions: {
        width: "100%",
        marginTop: 60,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    actionBar: {
        backgroundColor: "#ffffff",
        shadowColor: "#bebebe",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
        justifyContent: "center",
        borderRadius: 10
    },
    iconActionBarContainer: {
        backgroundColor: "rgba(218, 180, 243, 0.3)",
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,

    },
    pressableSignOutContainer: {
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 30,
    },

    pressableSignOut: {
        backgroundColor: "rgba(245, 188, 188, 0.3)",
        width: "100%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    }
})