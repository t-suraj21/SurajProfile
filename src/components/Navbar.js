import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import "./Navbar.css"; // Optional CSS file for styling

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About Me",
    "Projects",
    "Blog",
  ];

  const formatLink = (item) =>
    `/${item.toLowerCase().replace(/ /g, "-")}`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="navbar-logo">
        Suraj Kumar
      </a>

      {/* Desktop Menu */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {menuItems.map((item) => (
          <a
            key={item}
            href={formatLink(item)}
            className="navbar-link"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="navbar-icons">
        <button className="icon-button">
          <Search className="icon" />
        </button>

        {/* Show hamburger icon only on small screens */}
        <button className="icon-button hamburger-icon" onClick={toggleMenu}>
          <Menu className="icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
