import { editProductById, getProductById } from '@/services/user/productServices'
import { Product } from '@/types/product'
import { LinearGradient } from 'expo-linear-gradient'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function EditProduct() {
    const router = useRouter()
    const params = useLocalSearchParams()
    const productId = Array.isArray(params.id) ? params.id[0] : params.id;

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        image: '',
        description: ''
    })
    const [loading, setLoading] = useState(false)
    const [loadingProduct, setLoadingProduct] = useState(true)


    useEffect(() => {
        if (!productId) {
            Alert.alert(
                "Error",
                "No se pudo cargar el producto"
            );
            router.push("/(protected)/user/userProducts");
            return
        }
        const getProduct = async () => {
            try {
                setLoadingProduct(true)
                const data = await getProductById(productId)
                if (data) {
                    setFormData({
                        name: data.name || '',
                        price: data.price?.toString() || '',
                        stock: data.stock?.toString() || '',
                        image: data.images[0] || '',
                        description: data.description || ''
                    })
                }
            } catch (error) {
                console.error('Error al cargar producto:', error)
                Alert.alert('Error', 'No se pudo cargar el producto')
                router.push("/(protected)/user/userProducts")
            } finally {
                setLoadingProduct(false)
            }
        }

        getProduct()
    }, [productId, router])

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSave = async () => {
        if (!formData.name.trim()) {
            Alert.alert('Error', 'El nombre del producto es requerido')
            return
        }
        if (!formData.price.trim()) {
            Alert.alert('Error', 'El precio es requerido')
            return
        }
        if (!formData.stock.trim()) {
            Alert.alert('Error', 'El stock es requerido')
            return
        }

        try {
            setLoading(true)

            const data = {
                name: formData.name.trim(),
                price: Number(formData.price),
                stock: Number(formData.stock),
                images: [formData.image.trim()]
            }

            await editProductById(productId, data)

            setTimeout(() => {
                Alert.alert(
                    "Perfecto!",
                    "Tu producto se actualizo exitosamente"
                );
                router.replace("/(protected)/user/userProducts")
            }, 1500)



        } catch (error) {
            console.error('Error al guardar:', error)
            Alert.alert('Error', 'No se pudo guardar el producto')
        } finally {
            setLoading(false)
        }
    }

    if (loadingProduct) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#6366F1" />
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                <LinearGradient
                    colors={["#5B21B6", "#6366F1", "#3B82F6"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.header}
                >
                    <View style={styles.headerContent}>
                        <Text style={styles.headerTitle}>Editar producto</Text>
                        <Text style={styles.headerSubtitle}>Actualiza los detalles de tu producto</Text>
                    </View>
                </LinearGradient>

                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Nombre del producto</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ej: Camiseta roja"
                                value={formData.name}
                                onChangeText={(value) => handleInputChange('name', value)}
                                editable={!loading}
                            />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Precio</Text>
                            <View style={styles.priceInputContainer}>
                                <Text style={styles.currencySymbol}>$</Text>
                                <TextInput
                                    style={styles.priceInput}
                                    placeholder="0.00"
                                    value={formData.price}
                                    onChangeText={(value) => handleInputChange('price', value)}
                                    keyboardType="decimal-pad"
                                    editable={!loading}
                                />
                            </View>
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Stock disponible</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Cantidad"
                                value={formData.stock}
                                onChangeText={(value) => handleInputChange('stock', value)}
                                keyboardType="number-pad"
                                editable={!loading}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Descripción</Text>
                            <TextInput
                                style={[styles.textArea, styles.input]}
                                placeholder="Describe tu producto..."
                                value={formData.description}
                                onChangeText={(value) => handleInputChange('description', value)}
                                multiline={true}
                                numberOfLines={4}
                                editable={!loading}
                            />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>URL de la imagen</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="https://ejemplo.com/imagen.jpg"
                                value={formData.image}
                                onChangeText={(value) => handleInputChange('image', value)}
                                editable={!loading}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => router.replace("/(protected)/user/userProducts")}
                                disabled={loading}
                            >
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, styles.saveButton]}
                                onPress={handleSave}
                                disabled={loading}
                            >
                                {loading ? (
                                    <ActivityIndicator color="#FFFFFF" />
                                ) : (
                                    <Text style={styles.saveButtonText}>Guardar cambios</Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 32,
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    headerContent: {
        gap: 8,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    headerSubtitle: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.9)",
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 30,
    },
    formContainer: {
        gap: 16,
    },
    formGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#1F2937",
    },
    input: {
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: "#F9FAFB",
        color: "#1F2937",
    },
    priceInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 12,
        paddingHorizontal: 12,
        backgroundColor: "#F9FAFB",
    },
    currencySymbol: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#6366F1",
        marginRight: 8,
    },
    priceInput: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: "#1F2937",
    },
    textArea: {
        paddingVertical: 12,
        minHeight: 100,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 12,
        marginTop: 24,
    },
    button: {
        flex: 1,
        borderRadius: 12,
        paddingVertical: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: "#F3F4F6",
        borderWidth: 1,
        borderColor: "#E5E7EB",
    },
    cancelButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#6B7280",
    },
    saveButton: {
        backgroundColor: "#6366F1",
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
    },
})
