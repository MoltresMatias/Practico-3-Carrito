import { useState, useEffect } from "react";
import "./Products.css";
import { useCartStore } from "../stores/cartStore";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const agregarProductos = useCartStore((state) => state.agregarProductos);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <p className="placeholder-glow">
        <span class="placeholder col-12 bg-danger"></span>
      </p>
    );
  }

  return products.map((product) => {
    return (
      <div className="shadow rounded border card-pro col-md-4 col-xl-auto">
        <div key={product.id} className=" bg-secondary">
          <img src={product.imagen} alt="" className="card-img-top" />
        </div>
        <div className="">
          <h3 className="fs-5 ">{product.nombre}</h3>
          <h4 className="fs-6 ">{product.precio}</h4>
        </div>
        <div className="d-flex justify-content-center align-items-end">
          <button
            onClick={() => agregarProductos(product)}
            className="btn-buy "
          >
            Agregar
          </button>
        </div>
      </div>
    );
  });
};

export default Products;
