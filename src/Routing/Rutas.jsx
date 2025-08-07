import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../components/Pages/Inicio";
import Carrito from "../components/Pages/Carrito";
import Contacto from "../components/Pages/Contactos";
import Nosotros from "../components/Pages/Nosotros";

const Rutas = () => {
  return (
    <BrowserRouter>
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default Rutas;
