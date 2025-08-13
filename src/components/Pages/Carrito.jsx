import { useCartStore } from "../stores/cartStore";
import CarritoProducto from "./CarritoProducto";
import PrecioFinal from "./PrecioFinal";
import "./Products.css";

const Carrito = () => {
  const carrito = useCartStore((state) => state.carrito);
  return (
    <>
      <div className="d-flex justify-content-center container">
        {carrito.length > 0 ? (
          <div className="my-5 border rounded p-3 bg-white shadow w-50">
            <h2 className="text-center fs-3 fw-bold text-danger border-bottom">
              Tu seleccion
            </h2>
            <div className="row d-flex justify-content-center gap-3 mb-3">
              <CarritoProducto />
            </div>
            <PrecioFinal />
            <div className="d-flex justify-content-center">
              <button
                onClick={() => window.location.reload()}
                className="btn btn-danger mt-3 "
              >
                Comprar
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center my-5 bg-white p-5 rounded shadow">
            <h3>Carrito Vacio</h3>
            <h4>Visita nuestra tienda.</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Carrito;
