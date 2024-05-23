import Header from "./components/Header";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { UserProvider } from "./Context/UserContext";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import PageLayout from "./components/PageLayout";
import ProductPage from "./Pages/ProductPage";
import { ProductProvider } from "./Context/PorductContext";
import SignUpPage from "../src/components/SignUp";

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        {isLoggedIn ? (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/SignUpPage" element={<SignUpPage />} />
            </Routes>
          </>
        ) : (
          <PageLayout>Please log in</PageLayout>
        )}
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
