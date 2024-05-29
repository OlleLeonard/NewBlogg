import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage";
import { ProductProvider } from "./Context/PorductContext";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/products" element={<LandingPage />} />
          </Routes>
        </>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
