import { createContext, useState } from "react";

export const Context = createContext();

const DataProvee = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProductos = (product) => {
    const repetido = carrito.find((item) => item.id === product.id);
    if (repetido) {
      setCarrito(
        carrito.map((item) =>
          item.id === product.id
            ? { ...product, cantidad: repetido.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, product]);
    }
  };

  return (
    <Context.Provider value={{ carrito, setCarrito, agregarProductos }}>
      {children}
    </Context.Provider>
  );
};

export default DataProvee;
