import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loginData")) || {};

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    navigate("/");
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(to right, #fce4ec, #e0f7fa)",
      fontFamily: "Poppins, sans-serif",
    },
    card: {
      background: "white",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "450px",
      textAlign: "center",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#e52e71",
      marginBottom: "20px",
    },
    info: { textAlign: "left", marginTop: "20px" },
    label: { fontWeight: "bold", color: "#333" },
    imgContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginBottom: "15px",
    },
    photo: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    qrCode: {
      width: "100px",
      height: "100px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    btn: {
      marginTop: "20px",
      padding: "10px 20px",
      background: "linear-gradient(135deg, #ff8a00, #e52e71)",
      border: "none",
      color: "white",
      borderRadius: "8px",
      cursor: "pointer",
    },
    mapLink: {
      display: "block",
      color: "#d81b60",
      marginTop: "10px",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>User Dashboard</h2>

        <div style={styles.imgContainer}>
          <img src={user.photo} alt="User" style={styles.photo} />
          <img src={user.qrCode} alt="QR Code" style={styles.qrCode} />
        </div>

        <div style={styles.info}>
          <p><span style={styles.label}>Name:</span> {user.fullName}</p>
          <p><span style={styles.label}>Age:</span> {user.age}</p>
          <p><span style={styles.label}>Phone:</span> {user.phone}</p>
          <p><span style={styles.label}>Email:</span> {user.email}</p>
          <p><span style={styles.label}>Date of Birth:</span> {user.dob}</p>
          <p><span style={styles.label}>Password:</span> {user.password}</p>
        </div>

        {user.location && (
          <a href={user.location} target="_blank" rel="noreferrer" style={styles.mapLink}>
            📍 View Location on Map
          </a>
        )}

        <button onClick={handleLogout} style={styles.btn}>
          Logout
        </button>
      </div>
    </div>
  );
}
