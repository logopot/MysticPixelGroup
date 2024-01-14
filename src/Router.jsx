import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Home2 from "./pages/Home2/Home2";

import ScrollToTop from "./ScrollToTop";
import ProductSinglePage from "./pages/ProductSinglePage/ProductSinglePage";

const Router = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/MysticPixelGroup" element={<Home />} />
        <Route
          path="/MysticPixelGroup/MysticPixel"
          element={<ProductSinglePage />}
        />
      </Routes>
    </ScrollToTop>
  );
};

export default Router;
