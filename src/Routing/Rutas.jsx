import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../components/Pages/Inicio";
import Contacto from "../components/Pages/Contactos";
import Nosotros from "../components/Pages/Nosotros";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
