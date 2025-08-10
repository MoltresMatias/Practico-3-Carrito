import Navbar from "../Layout/Navbar";
import Products from "./Products";
import Carrousel from "../Layout/Carrousel";
import Footer from "../Layout/Footer";
import "./Inicio.css";
import Carrito from "./Carrito";

const Inicio = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Carrousel />
      <h1 className="fs-1 text-center text-warning m-5 fw-bold ">Productos</h1>
      <div className="row  d-flex justify-content-center gap-3">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
