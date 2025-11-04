import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mobile || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    
    const userData = { mobile, password };
    localStorage.setItem("userData", JSON.stringify(userData));

     
    navigate("/success");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f7fa, #fce4ec)",
        padding: "40px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffffff",
          padding: "35px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "420px",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#e52e71",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          📝 Registration
        </h2>

        <label style={{ marginBottom: "8px", fontWeight: "500", color: "#555" }}>
          Mobile Number
        </label>
        <input
          type="text"
          value={mobile}
          maxLength={10}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter your mobile number"
          required
          style={{
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />

        <label style={{ marginBottom: "8px", fontWeight: "500", color: "#555" }}>
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          style={{
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />

        <label style={{ marginBottom: "8px", fontWeight: "500", color: "#555" }}>
          Confirm Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          required
          style={{
            padding: "12px",
            marginBottom: "30px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            color: "#fff",
            padding: "14px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.03)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

