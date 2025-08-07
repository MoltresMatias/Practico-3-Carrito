
import { create } from 'zustand'

export const useCartStore = create((set) => ({
    isClose: true,
    cart: [],

    toggleClose: ()=>set((state)=>({
        isclose: !state.isclose
    })),

    addItemCart: (newItem)=>set((state)=>({
        cart: [...state.cart, newItem]
    })),
}))
