import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="https://egtdw4nfmfjqzug0.public.blob.vercel-storage.com/logo1.svg"
              alt="Neocube Logo"
              style={{ width: "120px" }}
            />
          </div>
          <div className="col-md-6 text-md-end">
            <h5 className="text-primary mb-2">Neocube</h5>
            <p className="text-muted mb-0">
              Insumos tecnologicos para un mundo más conectado.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-primary text-white">
        © {new Date().getFullYear()} Neocube — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
