// routes/index.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Acknowledgements from "../pages/Acknowledgements";
import Font from "../pages/Font";
import ScrollToTop from "../services/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acknowledgements" element={<Acknowledgements />} />
        <Route path="/font" element={<Font />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
