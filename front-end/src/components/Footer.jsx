import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: "20px",
      backgroundColor: "#2c3e50",
      color: "white",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "14px",
      borderTop: "2px solid #444",
      boxShadow: "0 -2px 10px rgba(0,0,0,0.3)"
    }}>
      <p style={{ marginBottom: "10px" }}>&copy; 2025 Maha Kumbh Mela. All rights reserved.</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <a href="#" style={{
          color: "#00aced",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "color 0.3s ease"
        }}>Facebook</a>
        <span>|</span>
        <a href="#" style={{
          color: "#00aced",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "color 0.3s ease"
        }}>Twitter</a>
        <span>|</span>
        <a href="#" style={{
          color: "#00aced",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "color 0.3s ease"
        }}>Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;