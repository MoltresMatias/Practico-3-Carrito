import { useCartStore } from "../stores/cartStore";
import Navbar from "../Layout/Navbar";
import CarritoProducto from "./CarritoProducto";
import PrecioFinal from "./PrecioFinal";
import "./Products.css";
import Footer from "../Layout/Footer";

const Carrito = () => {
  const carrito = useCartStore((state) => state.carrito);
  return (
    <>
      <Navbar />
      {carrito.length > 0 ? (
        <div className="my-5">
          <h2 className="text-center text-danger">Tu seleccion</h2>
          <div className="row d-flex justify-content-center gap-3 ">
            <CarritoProducto />
          </div>
          <PrecioFinal />
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger  ">Comprar</button>
          </div>
        </div>
      ) : (
        <div className="text-center my-5">
          <h3>Carrito Vacio</h3>
          <h4>Visita nuestra tienda.</h4>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Carrito;
