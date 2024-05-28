import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { UserProvider } from "./Context/UserContext";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import PageLayout from "./components/PageLayout";
import ProductPage from "./Pages/ProductPage";
import { ProductProvider } from "./Context/PorductContext";

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />

        <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
