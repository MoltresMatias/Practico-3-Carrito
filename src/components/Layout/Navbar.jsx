import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="sticky-top bg-white shadow">
        <nav className="navbar mx-5">
          <Link to="/">
            <img className="logo" src="./src/assets/logo1.svg" alt="" />
          </Link>
          <div className="nav-menu">
            <Link to="/nosotros" className="text-warning">
              <h5>Nosotros</h5>
            </Link>

            <Link to="/contacto" className="text-warning">
              <h5>Contacto</h5>
            </Link>

            <Link to="/carrito" className="">
              <img src="src\assets\carrito.png" alt="" className="icon" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
