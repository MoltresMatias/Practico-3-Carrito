
import { create } from 'zustand'


export const useCartStore = create((set, get) => ({
    carrito: [],

    agregarProductos: (product) =>
        set((state) => {
            const repetido = state.carrito.find((item) => item.id === product.id);

            if (repetido) {
                return {
                    carrito: state.carrito.map((item) => item.id === product.id ? { ...item, cantidad: repetido.cantidad + 1 } : item),
                };
            } else {
                return { carrito: [...state.carrito, { ...product, cantidad: 1 }] };
            }
        }),

    restarProducto: (id) =>
        set((state) => {
            const repetido = state.carrito.find((item) => item.id === id);
            if (repetido && repetido.cantidad > 1) {
                return {
                    carrito: state.carrito.map((item) =>
                        item.id === id
                            ? { ...item, cantidad: repetido.cantidad - 1 }
                            : item
                    ),
                };
            }
            return state;
        }),

    borrarProducto: (id) =>
        set((state) => ({
            carrito: state.carrito.filter((item) => item.id !== id),
        })),

    vaciarCarrito: () => set({ carrito: [] }),

    precioFinal: () =>
        get().carrito.reduce(
            (sum, prod) => sum + prod.precio * prod.cantidad,
            0
        ).toFixed(2),


}))

