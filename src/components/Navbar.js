import React from "react";
import { Search, Menu } from "lucide-react";
import "./Navbar.css"; // Optional CSS file for styling

const NavBar = () => {
  const menuItems = [
    "Home",
    "Create",
    "Plans",
    "Our Story",
    "Contact",
    "Learn & Support",
  ];

  const formatLink = (item) =>
    `/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="navbar-logo">
        SURAJ
      </a>

      {/* Desktop Menu */}
      <div className="navbar-links">
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
        <button className="icon-button">
          <Menu className="icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
