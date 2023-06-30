import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";
import { stat } from "fs";

type ProductWithQuantity = Product & { quantity: number }

type Action = PayloadAction<Product>

type InitialState = {
    products: ProductWithQuantity[]
}

const initialState: InitialState = {
    products: []
};

const changeQuantity = (state: InitialState, id: number, increment = true) => {
    const product =
        state.products.find(p => p.id === id)
    if (!product) return;

    const productIndex = state.products.indexOf(product);
    state.products[productIndex] = { ...product, quantity: increment ? product.quantity + 1 : product.quantity - 1 }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: Action) => {
            const isInCart = state.products.some(p => p.id === action.payload.id);
            if (!isInCart) {
                state.products.push({ ...action.payload, quantity: 1 })
            } else {
                changeQuantity(state, action.payload.id);
            }
        },
        removeFromCart: (state, action: Action) => {
            const productToRemove =
                state.products.find(p => p.id === action.payload.id);
            if (!productToRemove) return;

            if (productToRemove.quantity === 1) {
                const productToRemoveIndex = state.products.indexOf(productToRemove);
                state.products.splice(productToRemoveIndex, 1);
            } else {
                changeQuantity(state, action.payload.id, false);
            }
        },
        sortLowToHighPrice: (state) => {
            state.products.sort((a, b) => b.price - a.price);
        },
        sortHighToLowPrice: (state) => {
            state.products.sort((a, b) => a.price - b.price);
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
