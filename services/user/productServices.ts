import axios from "axios"

interface updateProduct {
    name: string;
    price: number;
    stock: number;
    image?: string[];
}

export const getProductByIdUser = async (id:string) => {
    const res = await axios.get(`${process.env.URL_BACKEND}/products/user/${id}`)
    return res.data.products
}

export const deleteProductByUser = async (id: string) => {
    const res = await axios.delete(`${process.env.URL_BACKEND}/products/${id}`)
    return res.data.products
}


export const getProductById = async (id: string) => {
    const res = await axios.get(`${process.env.URL_BACKEND}/products/${id}`)
    return res.data.product
}

export const editProductById = async (id: string, data: updateProduct) => {
    const res = await axios.put(`${process.env.URL_BACKEND}/products/${id}`, data)
    return res.data.product
}