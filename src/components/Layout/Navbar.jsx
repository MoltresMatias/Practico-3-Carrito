import { Link } from "react-router-dom";
import "./Navbar.css";
import Carrito from "../Pages/Carrito";
import { useState } from "react";

function useMyHook() {
  const [active, setActive] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => setActive(!active);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  function carritoCerrar() {
    handleToggle(), toggleSidebar();
  }

  return { active, handleToggle, sidebarOpen, toggleSidebar, carritoCerrar };
}

const Navbar = () => {
  const { active, handleToggle, sidebarOpen, toggleSidebar, carritoCerrar } =
    useMyHook();

  return (
    <>
      <div className="sticky-top bg-white ">
        <nav className="navbar ">
          <Link to="/">
            <img
              className="logo"
              src="https://egtdw4nfmfjqzug0.public.blob.vercel-storage.com/logo1.svg"
              alt=""
            />
          </Link>

          <div className="nav-menu ">
            <button
              className="btn btn-outline-warning d-md-none"
              onClick={toggleSidebar}
            >
              ☰ Menú
            </button>

            <div className="d-md-flex d-none pt-3 gap-4">
              <Link to="/nosotros" className="text-warning">
                <h5>Nosotros</h5>
              </Link>

              <Link to="/contacto" className="text-warning">
                <h5>Contacto</h5>
              </Link>

              <div>
                <a onClick={handleToggle} className="btn-cart">
                  <img
                    src="https://egtdw4nfmfjqzug0.public.blob.vercel-storage.com/carrito.png"
                    alt=""
                    className="icon"
                  />
                </a>
                {active && (
                  <div className="carrito">
                    <Carrito />
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className={`sidebar d-md-none ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <ul>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <a onClick={carritoCerrar} className="btn-cart">
              Carrito
            </a>
            {active && (
              <div className="carrito">
                <Carrito />
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
