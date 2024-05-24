import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { UserProvider, UserContext } from "./Context/UserContext";
import PageLayout from "./components/PageLayout";
import ProductPage from "./Pages/ProductPage";

import Header from "./components/Header";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </UserProvider>
  );
};

const AppRoutes = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
        </>
      ) : (
        <Route path="*" element={<PageLayout>Please log in</PageLayout>} />
      )}
    </Routes>
  );
};

export default App;
