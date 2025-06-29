import React , { useState } from "react";
import "./styles/style.css";
import AppRoutes from "./routes/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="app">
      <Navbar />
      {/* Main content area */}
      <AppRoutes />
    </div>
  );
}

export default App;
