import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import PageLayout from "./components/PageLayout";
import ProductPage from "./Pages/ProductPage";
import { ProductProvider } from "./Context/ProductContext";

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
              <Route path="/products" element={<ProductPage />} />
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
