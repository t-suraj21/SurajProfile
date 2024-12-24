import React, { useState } from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">Suraj Kumar</a>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isMobile ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setIsMobile(false)} className="neon-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsMobile(false)} className="neon-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMobile(false)} className="neon-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMobile(false)} className="neon-link">
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/t-suraj21"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-link"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
