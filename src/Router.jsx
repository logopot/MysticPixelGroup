import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import ScrollToTop from "./ScrollToTop";

const Router = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Router;
