import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // 手機選單點擊後收起
    }
  };

  return (
    <nav className="navbar"  id="home">
      <div className="logo">
        <Link to="/">
          <img src="./logo_工作區域 1.png" />
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
          <button onClick={() => scrollToId("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToId("about")}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToId("projects")}>Projects</button>
        </li>
        {/* <li>
          <button onClick={() => scrollToId("contact")}>Contact</button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
