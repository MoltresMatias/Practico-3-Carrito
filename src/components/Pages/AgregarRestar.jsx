import { useCartStore } from "../stores/cartStore";
import "./Products.css";

function AgregarRestar({ propiedad }) {
  const restarProducto = useCartStore((state) => state.restarProducto);
  const agregarProductos = useCartStore((state) => state.agregarProductos);

  return (
    <div className="d-flex gap-5">
      <h3 onClick={() => restarProducto(propiedad.id)} className="boton">
        -
      </h3>
      <h3>{propiedad.cantidad}</h3>
      <h3 onClick={() => agregarProductos(propiedad)} className="boton ">
        +
      </h3>
    </div>
  );
}

export default AgregarRestar;
