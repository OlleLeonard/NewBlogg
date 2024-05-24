import { Link } from "react-router-dom";
import "./components.css";
import AuthDetails from "../components/AuthDetails";
import LionAndName from "./LionAndName";

import bild from "../Pictures/Loggo.jpg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Loggo">
        <img className="Loggan" src={bild} alt="Loggo" />
      </div>

      <nav className="orange">
        <Link to="/" className="orange">
          Sign In
        </Link>

        <Link className="orange" to="/products">
          Blogg
        </Link>
      </nav>
      <LionAndName />
      <AuthDetails />
    </div>
  );
};

export default Header;
