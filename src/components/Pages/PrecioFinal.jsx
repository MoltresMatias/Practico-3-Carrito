import { useCartStore } from "../stores/cartStore";

function PrecioFinal() {
  const precioFinal = useCartStore((state) => state.precioFinal)();

  return (
    <div>
      <h4 className="text-center">Precio Final: $ {precioFinal} </h4>
    </div>
  );
}

export default PrecioFinal;
