import { useCartStore } from "../stores/cartStore";

function PrecioFinal() {
  const precioFinal = useCartStore((state) => state.precioFinal)();

  return (
    <div>
      <h3 className="text-center">Precio Final: $ {precioFinal} </h3>
    </div>
  );
}

export default PrecioFinal;
