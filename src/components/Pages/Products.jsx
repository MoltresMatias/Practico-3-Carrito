import { useState, useEffect } from "react";
import { useCartStore } from "../stores/cartStore.js";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { addItemCart } = useCartStore();

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const agregar = (id) => {
    const newAgregar = (prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    });
    setQuantities(newAgregar);
    addItemCart({
      nombre: product.nombre,
      precio: product.precio,
      quantities: newAgregar,
    });
  };

  const restar = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  return products.map((product) => {
    return (
      <div key={product.id} className="card col-auto py-3 my-4">
        <img src={product.imagen} alt="" className="card-img-top " />
        <h3 className="fs-5 ">{product.nombre}</h3>
        <h4 className="fs-6">{product.precio}</h4>
        {quantities[product.id] > 0 ? (
          <div className="btn-buy  z-0 ">
            <div className="d-flex justify-content-between align-items-center">
              <h5
                onClick={() => restar(product.id)}
                className="text-white p-2 pe-auto"
              >
                -
              </h5>
              <h5 className="text-white p-2 ">{quantities[product.id]}</h5>
              <h5
                onClick={() => agregar(product.id)}
                className="text-white p-2 "
              >
                +
              </h5>
            </div>
          </div>
        ) : (
          <button onClick={() => agregar(product.id)} className="btn-buy ">
            Agregar
          </button>
        )}
      </div>
    );
  });
};

export default Products;
