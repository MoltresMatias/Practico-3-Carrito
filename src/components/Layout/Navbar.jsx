import { Link } from "react-router-dom";
import "./Navbar.css";
import Carrito from "../Pages/Carrito";
import { useState } from "react";

function useMyHook() {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive(!active);
  return { active, handleToggle };
}

const Navbar = () => {
  const { active, handleToggle } = useMyHook();
  return (
    <>
      <div className="sticky-top bg-white shadow">
        <nav className="navbar mx-5">
          <Link to="/">
            <img
              className="logo"
              src="https://egtdw4nfmfjqzug0.public.blob.vercel-storage.com/logo1.svg"
              alt=""
            />
          </Link>
          <div className="nav-menu gap-4">
            <Link to="/nosotros" className="text-warning">
              <h5>Nosotros</h5>
            </Link>

            <Link to="/contacto" className="text-warning">
              <h5>Contacto</h5>
            </Link>

            <div>
              <a
                onClick={() => handleToggle()}
                to="/carrito"
                className="btn-cart"
              >
                <img
                  src="https://egtdw4nfmfjqzug0.public.blob.vercel-storage.com/carrito.png"
                  alt=""
                  className="icon"
                />
              </a>
              {active && (
                <div className="carrito ">
                  <Carrito />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
