import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      // 如果不在首頁，先導回首頁，再等一下 scroll
      navigate("/");
      setTimeout(() => {
        scrollToId(id);
      }, 100); // 等待頁面 render 完
    } else {
      scrollToId(id);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="./logo_工作區域 1.png" alt="logo" />
          <span className="logo-text">｜ I-Hsiang, Liao</span>
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <button onClick={() => handleNavClick("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("about")}>About</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("projects")}>Projects</button>
        </li>
        <li>
          <Link to="/acknowledgements" onClick={() => setIsOpen(false)}>
            Acknowledgements
          </Link>
        </li>
        <li>
          <Link to="/font" onClick={() => setIsOpen(false)}>
            font
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
