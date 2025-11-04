import React from "react";

export default function SuccessPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px 60px",
          borderRadius: "15px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          textAlign: "center",
          maxWidth: "540px",
        }}
      >
        <h1 style={{ color: "#28a745", fontSize: "30px", marginBottom: "15px" }}>
          🎉 Registration Successful!
        </h1>
        <p style={{ color: "#555", fontSize: "17px", marginBottom: "10px" }}>
          Your registration has been completed successfully.
        </p>
        <p style={{ color: "#888", fontSize: "15px" }}>
          You can now log in to your dashboard to view your details.
        </p>
      </div>
    </div>
  );
}





 