import Navbar from "../Layout/Navbar";
import Products from "./Products";
import "./Inicio.css";
import { useCartStore } from "../stores/cartStore";

const Inicio = () => {
  const { cart } = useCartStore();
  console.log(cart);
  return (
    <div>
      <Navbar />
      <div className="">
        <img
          src="https://egtdw4nfmfjqzug0.public.blob.vercel-storage.com/image.png"
          alt=""
          className="img-fluid"
        />
      </div>
      <h1 className="fs-1 text-warning m-5 fw-bold ">Productos</h1>
      <div className="row d-flex justify-content-center gap-3">
        <Products />
      </div>
    </div>
  );
};

export default Inicio;
