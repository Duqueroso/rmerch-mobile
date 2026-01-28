import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';

// Datos de ejemplo para las reseñas
const reviews = [
    {
        id: 1,
        name: 'María García',
        rating: 5,
        date: '2 días atrás',
        comment: '¡Deliciosas! El sabor a limón es perfecto, no muy fuerte ni muy suave. Definitivamente las volveré a comprar.',
        avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
        id: 2,
        name: 'Carlos Rodríguez',
        rating: 5,
        date: '1 semana atrás',
        comment: 'Las mejores papas que he probado. Muy crujientes y el empaque mantiene la frescura.',
        avatar: 'https://i.pravatar.cc/150?img=12'
    },
    {
        id: 3,
        name: 'Ana López',
        rating: 4,
        date: '2 semanas atrás',
        comment: 'Muy buenas, aunque me gustaría que tuvieran un poco más de sal. Pero el sabor a limón está increíble.',
        avatar: 'https://i.pravatar.cc/150?img=5'
    }
];

export default function ProductsScreen() {
    return (
        <View style={styles.container}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
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
                                <Text style={styles.categoryText}>
                                    Comida
                                </Text>
                                <View style={styles.badgeRating}>
                                    <MaterialIcons name="star" size={14} color="gold" />
                                    <Text style={styles.ratingText}>4.9</Text>
                                    <Text style={styles.countText}>(128)</Text>
                                </View>
                            </View>
                            <Text style={styles.productName}>Papas de limon</Text>
                            <Text style={styles.description}>Las papas mas limonudas de todo riwi</Text>
                            <View>
                                <Text style={styles.price}>$ 50000</Text>
                            </View>

                            <View style={styles.quality}>
                                <Text style={styles.quantityText}>Cantidad</Text>
                                <View style={styles.quantityControl}>
                                    <Pressable style={styles.quantityButton}
                                        onPress={() => console.log('decrease')}>
                                        <AntDesign name="minus" size={24} color="#1c1c4a" />
                                    </Pressable>
                                    <Text style={styles.quantityText}>1</Text>
                                    <Pressable style={styles.quantityButton} onPress={() => console.log('increase')}>
                                        <FontAwesome6 name="add" size={24} color="#1c1c4a" />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.reviewsSection}>
                        <View style={styles.reviewsHeader}>
                            <Text style={styles.reviewsTitle}>Reseñas</Text>
                            <Pressable onPress={() => console.log('Ver todas')}>
                                <Text style={styles.seeAllText}>Ver todas</Text>
                            </Pressable>
                        </View>

                        {reviews.map((review) => (
                            <View key={review.id} style={styles.reviewCard}>    
                                <View style={styles.reviewHeader}>
                                    <Image
                                        source={{ uri: review.avatar }}
                                        style={styles.avatar}
                                    />
                                    <View style={styles.reviewInfo}>
                                        <Text style={styles.reviewName}>{review.name}</Text>
                                        <View style={styles.ratingContainer}>
                                            {[...Array(5)].map((_, index) => (
                                                <MaterialIcons
                                                    key={index}
                                                    name="star"
                                                    size={14}
                                                    color={index < review.rating ? '#FFD700' : '#E5E7EB'}
                                                />
                                            ))}
                                            <Text style={styles.reviewDate}>{review.date}</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.reviewComment}>{review.comment}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <View style={styles.viewFinal}>
                <View style={styles.totalAndCart}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.totalText}>Total</Text>
                        <Text style={styles.totalPrice}>$ 50000</Text>
                    </View>
                    <Pressable
                        style={styles.addToCartButton}
                        onPress={() => console.log('Agregar al carrito')}
                    >
                        <LinearGradient
                            colors={['#1c1c4a', '#6458ee']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientButton}
                        >
                            <Feather name="shopping-cart" size={20} color="white" />
                            <Text style={styles.buttonText}>Agregar al carrito</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    scrollContent: {
        paddingBottom: 120, // Espacio para el footer fijo
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
        padding: 15,
    },
    container2: {
        backgroundColor: '#ffffff',
        width: "100%",
        padding: 20,
        marginTop: -36,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
    },
    box2: {
        backgroundColor: '#fff',
        borderRadius: 1,
    },
    category: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666699',
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
    productName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1c1c4a',
        marginBottom: 16
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#666699',
    },
    price: {
        marginTop: 16,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6458ee',
    },
    quality: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    quantityText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1c1c4a',
    },
    quantityControl: {
        paddingTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        backgroundColor: '#f3f3f7',
        borderRadius: 24,
        paddingLeft: 12,
        paddingRight: 12
    },
    quantityButton: {
        width: 36,
        height: 36,
        borderRadius: 999,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    reviewsSection: {
        marginTop: 32,
    },
    reviewsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    reviewsTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1c1c4a',
    },
    seeAllText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6458ee',
    },
    reviewCard: {
        backgroundColor: '#f3f3f7',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    reviewHeader: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    reviewInfo: {
        flex: 1,
    },
    reviewName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1c1c4a',
        marginBottom: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    reviewDate: {
        fontSize: 12,
        color: '#6B7280',
        marginLeft: 8,
    },
    reviewComment: {
        fontSize: 14,
        color: '#666699',
        lineHeight: 20,
    },
    viewFinal: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        padding: 16,
        paddingBottom: 16,
    },
    totalAndCart: {
        maxWidth: 448,
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    totalText: {
        fontSize: 12,
        color: '#666699',
    },
    totalPrice: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1c1c4a',
    },
    addToCartButton: {
        flex: 1,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    gradientButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 16,
        borderRadius: 12,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16,
    }
});