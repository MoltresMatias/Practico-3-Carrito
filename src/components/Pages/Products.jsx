import { useState, useEffect } from "react";
import "./Products.css";
import { useCartStore } from "../stores/cartStore";

const Products = () => {
  const [products, setProducts] = useState([]);
  const agregarProductos = useCartStore((state) => state.agregarProductos);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return products.map((product) => {
    return (
      <div key={product.id} className="card col-auto py-3 my-4">
        <img src={product.imagen} alt="" className="card-img-top" />
        <h3 className="fs-5 ">{product.nombre}</h3>
        <h4 className="fs-6">{product.precio}</h4>
        <button onClick={() => agregarProductos(product)} className="btn-buy ">
          Agregar
        </button>
      </div>
    );
  });
};

export default Products;
