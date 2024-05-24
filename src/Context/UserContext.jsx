import { createContext, useState } from "react";
import lejon from "../Pictures/lejon.jpg";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userName, setUserName] = useState("John");
  const IsIsloggedIn = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(IsIsloggedIn);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const useInApp = {
    userName,
    setUserName,
    isLoggedIn,
    login,
    logout,
    picture: lejon,
  };

  return (
    <UserContext.Provider value={useInApp}>
      {props.children}
    </UserContext.Provider>
  );
};
