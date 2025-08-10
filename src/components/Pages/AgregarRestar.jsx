import { useCartStore } from "../stores/cartStore";
import "./Products.css";

function AgregarRestar({ propiedad }) {
  const restarProducto = useCartStore((state) => state.restarProducto);
  const agregarProductos = useCartStore((state) => state.agregarProductos);

  return (
    <div className="d-flex gap-5">
      <h5 onClick={() => restarProducto(propiedad.id)} className="boton">
        -
      </h5>
      <h5>{propiedad.cantidad}</h5>
      <h5 onClick={() => agregarProductos(propiedad)} className="boton ">
        +
      </h5>
    </div>
  );
}

export default AgregarRestar;
