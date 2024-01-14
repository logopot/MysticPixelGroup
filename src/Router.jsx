import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import ScrollToTop from "./ScrollToTop";
import ProductSinglePage from "./pages/ProductSinglePage/ProductSinglePage";

const Router = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MysticPixel" element={<ProductSinglePage />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Router;
