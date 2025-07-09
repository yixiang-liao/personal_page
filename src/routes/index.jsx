// routes/index.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Acknowledgements from '../pages/Acknowledgements';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/acknowledgements" element={<Acknowledgements />} />
    </Routes>
  );
};

export default AppRoutes;
