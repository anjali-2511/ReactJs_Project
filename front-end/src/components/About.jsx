import React from "react";
import kumbhImage from '../assets/kumbh.png';

function About() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 60px",
        backgroundColor: "#b98a53",
        fontFamily: "'Poppins', sans-serif",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      {/* Left text content */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          paddingRight: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#d35400",
            letterSpacing: "1px",
          }}
        >
          Maha Kumbh Mela
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#2c3e50",
            textAlign: "justify",
            marginBottom: "0",
          }}
        >
          The Maha Kumbh Mela is one of the largest and most significant
          religious gatherings in the world, attracting millions of pilgrims,
          saints, and visitors from across the globe. It is a spiritual
          celebration that reflects centuries of tradition, devotion, and
          cultural unity.
        </p>
      </div>

      {/* Right image content */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          textAlign: "center",
        }}
      >
        <img
          src={kumbhImage}
          alt="Maha Kumbh Mela"
          style={{
            width: "80%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "16px",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    </div>
  );
}

export default About;