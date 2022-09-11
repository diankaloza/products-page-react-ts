import { Route, Routes } from "react-router-dom";
import { ProductsPages } from "./pages/ProductsPages";
import { AboutPage } from "./pages/AboutPages";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPages />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
