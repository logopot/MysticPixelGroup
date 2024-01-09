import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Home2 from "./pages/Home2/Home2";

import ScrollToTop from "./ScrollToTop";

const Router = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/MysticPixelGroup" element={<Home />} />
        <Route path="/MysticPixelGroup/second" element={<Home2 />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Router;
