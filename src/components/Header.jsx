import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "./components.css";

const Header = () => {
  const { userName, isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <div className="Header">
      <div className="Space">
        <p className="YourName">{userName}</p>
      </div>

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

        {isLoggedIn ? (
          <>
            <p className="orange">{userName}</p>
            <button onClick={logout}>Logga ut</button>
          </>
        ) : (
          <button onClick={login}>Logga in</button>
        )}
      </nav>
    </div>
  );
};

export default Header;
