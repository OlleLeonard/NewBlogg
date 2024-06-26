import { Link } from "react-router-dom";
import "./components.css";
import AuthDetails from "../components/AuthDetails";

import bild from "../Pictures/Loggo.jpg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Loggo">
        <img className="Loggan" src={bild} alt="Loggo" />
      </div>

      <nav className="orange">
        <Link to="/" className="orange">
          Blogg
        </Link>

        <Link className="orange" to="/products">
          Sign In
        </Link>
      </nav>
      <AuthDetails />
    </div>
  );
};

export default Header;
