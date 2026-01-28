import { ActionProfileView } from '@/components/ActionProfileView/ActionProfileView';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <ScrollView scrollEnabled={true}>
            <LinearGradient
                style={Style.headerContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#1C1C4A", "#6B5CFA"]}>
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
                                <Text style={Style.nameUser}>Estudiante RIWI</Text>
                                <Text style={Style.emailUser}>estudiante@riwi.edu.co</Text>
                            </View>
                        </View>
                        <View style={Style.settingsIcon}>
                            <Feather name="settings" size={18} color="white" />
                        </View>
                    </View>
                    <View style={Style.statsBadge}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "#6B5CFA", fontSize: 25, fontWeight: "bold" }}>12</Text>
                            <Text style={{color: "#928e8e", opacity: 0.8}}>Productos</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "#f7a4ff", fontSize: 25, fontWeight: "bold" }}>5</Text>
                            <Text style={{color: "#928e8e", opacity: 0.8}}>Vendidos</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ color: "#76cd75", fontSize: 25, fontWeight: "bold" }}>3.5k</Text>
                            <Text style={{color: "#928e8e", opacity: 0.8}}>Ganancias</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>

            <View style={Style.listActions}>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
                <ActionProfileView/>
            </View>
            <View style={Style.pressableSignOut}>

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
        backgroundColor: 'rgba(235, 231, 231, 0.5)',
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
        elevation: 10

    },
    listActions: {
        width:"100%",
        marginTop: 60,
        paddingHorizontal: 30,
        paddingVertical:30,
    },
    pressableSignOut: {
        height: 60,
        marginTop: 20
    }
})