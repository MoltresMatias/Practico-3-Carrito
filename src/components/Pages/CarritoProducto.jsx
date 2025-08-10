import { useCartStore } from "../stores/cartStore";
import AgregarRestar from "./AgregarRestar";
import "./Products.css";

function CarritoProducto() {
  const carrito = useCartStore((state) => state.carrito);
  const borrarProducto = useCartStore((state) => state.borrarProducto);

  return carrito.map((product) => {
    return (
      <div
        className="p-2 d-flex align-items-center justify-content-between row border-bottom"
        key={product.id}
      >
        <div className=" d-flex align-items-center justify-content-start gap-3 col-6">
          <img className="" height="70px" src={product.imagen} alt="" />
          <div className="">
            <h6 className="">{product.nombre}</h6>
            <h6 className="">c/u ${product.precio}</h6>
          </div>
        </div>
        <div className="col-1">
          <AgregarRestar propiedad={product} />
        </div>
        <h3 onClick={() => borrarProducto(product.id)} className=" boton col-1">
          ❎
        </h3>
      </div>
    );
  });
}

export default CarritoProducto;
