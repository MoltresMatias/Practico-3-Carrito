import React from "react";
import Navbar from "../Layout/Navbar";
import Products from "./Products";
import { useCartStore } from "../stores/cartStore";

const Carrito = () => {
  const { cart } = useCartStore();

  return (
    <>
      <Navbar />
      <div>
        <h2>Tu seleccion</h2>
        {cart.map((product) => (
          <Products key={products.id} />
        ))}
      </div>
    </>
  );
};

export default Carrito;
