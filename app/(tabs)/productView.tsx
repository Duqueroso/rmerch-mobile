
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function ProductsScreen() {







    return (
        <View style={styles.container}>

            <View style={styles.box}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: 'https://productoselcaribe.com/wp-content/uploads/2023/12/caribenew2_0016_caribe-web-009.jpg' }}
                    resizeMode="cover"
                />
                <View style={styles.header}>
                    <Pressable
                        onPress={() => console.log('click#1')}
                        style={({ pressed }) => [
                            styles.circleButton,
                            pressed && { opacity: 0.7 },
                        ]}

                    >
                        <Feather name="arrow-left" size={24} color="black" />
                    </Pressable>
                    <Pressable
                        onPress={() => console.log('click#2')}
                        style={({ pressed }) => [
                            styles.circleButton,
                            pressed && { opacity: 0.7 },
                        ]}
                    >
                        <Ionicons name="heart-outline" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.secund}>
                <View style={styles.container2}>
                    <View style={styles.box2}>
                        <View style={styles.category}>
                            <Text>
                                HOLA
                            </Text>
                            <View style={styles.badgeRating}>
                                <MaterialIcons name="star" size={14} color="gold" />
                                <Text style={styles.ratingText}>4.9</Text>
                                <Text style={styles.countText}>(128)</Text>
                            </View>

                        </View>
                    </View>
                </View>

            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingBottom: 128,

    },
    box: {
        position: 'relative',
        height: 320,
        backgroundColor: '#ffd000'
    },
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        paddingTop: 48,
    },

    circleButton: {
        width: 44,
        height: 44,
        borderRadius: 999,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
    },
    secund: {
        padding: 15
    },
    container2: {
        backgroundColor: '#ffffff',
        width: "100%",
        height: 348,
        padding: 20,
        alignSelf: 'center',
        marginTop: -36,
        position: 'relative',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        elevation:10
    },

    box2: {
        backgroundColor: '#fff',
        borderRadius: 1,
        height:320
    },
    category: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },

    badgeRating: {
    flexDirection: 'row',         
    alignItems: 'center',          
    backgroundColor: 'rgba(255,215,0,0.1)', 
    paddingHorizontal: 12,          
    paddingVertical: 4,             
    borderRadius: 999,           
  },
    ratingText: {
    marginLeft: 4,
    fontSize: 14,          
    fontWeight: '600',    
    color: '#FFD700',      
  },
  countText: {
    marginLeft: 4,    
    fontSize: 12,        
    color: '#6B7280',  
  },
});