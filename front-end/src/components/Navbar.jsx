import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger icons
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    padding: "16px 24px",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const logoStyle = {
    height: "40px",
    width: "auto",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    fontSize: "16px",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#f39c12",
  };

  const menuStyle = {
    listStyle: "none",
    display: isOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "70px",
    right: "20px",
    backgroundColor: "#34495e",
    borderRadius: "8px",
    padding: "16px 24px",
    gap: "16px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  };

  const desktopMenuStyle = {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    margin: "0",
    padding: "0",
  };

  return (
    <nav style={navStyle}>
      <div style={leftStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <span style={titleStyle}>Maha Kumbh Mela</span>
      </div>

      {/* Desktop Menu */}
      <ul className="desktop-menu" style={desktopMenuStyle}>
        {["About", "Registration", "Login", "Dashboard"].map((item) => (
          <li key={item}>
            <Link
              to={`/${item === "About" ? "" : item.toLowerCase()}`}
              style={linkStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = linkHoverStyle.color)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = linkStyle.color)
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className="mobile-menu-icon"
        style={{ display: "none", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="mobile-menu" style={menuStyle}>
          {["About", "Registration", "Login", "Dashboard"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item === "About" ? "" : item.toLowerCase()}`}
                style={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Inline CSS for responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .mobile-menu-icon {
              display: block !important;
            }
          }

          @media (min-width: 769px) {
            .mobile-menu {
              display: none !important;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
