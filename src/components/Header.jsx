import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "./components.css";
import AuthDetails from "../components/AuthDetails";

const Header = () => {
  const { userName, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <div className="Header">
      <div className="Space">
        <h2>Loggo</h2>
      </div>
      <p className="orange">{userName}</p>
      <nav className="orange">
        <Link to="/" className="orange">
          Home
        </Link>
        <Link className="orange" to="/about">
          About
        </Link>
        <Link className="orange" to="/products">
          Blogg
        </Link>
        <AuthDetails />
      </nav>
    </div>
  );
};

export default Header;
