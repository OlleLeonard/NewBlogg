import React, { createContext, useState, useEffect } from "react"; // Lägg till denna rad
import { onAuthStateChanged } from "firebase/auth"; // Importera onAuthStateChanged från firebase/auth
import { auth } from "../Firebase"; // Importera auth från Firebase-konfigurationen
import lejon from "../Pictures/lejon.jpg";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("John");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.displayName || "John");
      } else {
        setIsLoggedIn(false);
        setUserName("John");
      }
    });

    return () => unsubscribe();
  }, []);

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
    <UserContext.Provider value={useInApp}>{children}</UserContext.Provider>
  );
};
