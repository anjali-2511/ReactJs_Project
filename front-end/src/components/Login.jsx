import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phone: "",
    email: "",
    dob: "",
    password: "",
    location: "",
    photo: "",
    qrCode: "",
  });

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [qrGenerated, setQrGenerated] = useState(false);

   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   
  const startCamera = async () => {
    try {
      setCameraActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      alert("Camera access denied or not available!");
    }
  };

   
  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 150, 120);
    const dataURL = canvasRef.current.toDataURL("image/png");
    setFormData({ ...formData, photo: dataURL });
    setCameraActive(false);
    const stream = videoRef.current.srcObject;
    stream.getTracks().forEach((track) => track.stop());
  };

   
  const fetchLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setFormData({ ...formData, location: mapLink });
        alert("Location captured successfully!");
      },
      () => alert("Unable to fetch location. Please enable GPS.")
    );
  };

   
  const generateQRCode = () => {
    if (
      !formData.fullName ||
      !formData.age ||
      !formData.phone ||
      !formData.email ||
      !formData.dob ||
      !formData.password ||
      !formData.location ||
      !formData.photo
    ) {
      alert("Please fill all fields, capture photo & location first!");
      return;
    }
    setQrGenerated(true);
    alert("QR Code generated successfully!");
  };

   
  const qrData = `
  Name: ${formData.fullName}
  Age: ${formData.age}
  Phone: ${formData.phone}
  Email: ${formData.email}
  DOB: ${formData.dob}
  Location: ${formData.location}
  `;

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!qrGenerated) {
      alert("Please generate your QR Code first!");
      return;
    }

    const qrCanvas = document.getElementById("userQR"); // ✅ Correct QR canvas
    const qrDataURL = qrCanvas.toDataURL("image/png");

    const userData = { ...formData, qrCode: qrDataURL };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("loginData", JSON.stringify(result.user));
        alert("Registration & Login Successful!");
        navigate("/dashboard");
      } else {
        alert(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please check your backend.");
    }
  };

   
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(to right, #e0f7fa, #fce4ec)",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    },
    formWrapper: {
      background: "#fff",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "420px",
    },
    title: {
      textAlign: "center",
      color: "#e52e71",
      marginBottom: "20px",
    },
    inputGroup: { marginBottom: "15px" },
    label: { display: "block", marginBottom: "5px", fontWeight: "bold", color: "#333" },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "14px",
    },
    btn: {
      width: "100%",
      padding: "10px",
      background: "linear-gradient(135deg, #e52e71, #ff8a00)",
      border: "none",
      color: "white",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "8px",
    },
    navLink: {
      display: "block",
      textAlign: "center",
      marginTop: "10px",
      color: "#e52e71",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.formWrapper} onSubmit={handleSubmit}>
        <h2 style={styles.title}>User Login</h2>

        {[
          { name: "fullName", placeholder: "Full Name" },
          { name: "age", placeholder: "Age", type: "number" },
          { name: "phone", placeholder: "Phone Number", type: "tel" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "dob", placeholder: "Date of Birth", type: "date" },
          { name: "password", placeholder: "Password", type: "password" },
        ].map((field, i) => (
          <div style={styles.inputGroup} key={i}>
            <label style={styles.label}>{field.placeholder}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              style={styles.input}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Camera Capture */}
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          {!cameraActive ? (
            <button type="button" style={styles.btn} onClick={startCamera}>
              Take Photo
            </button>
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              ></video>
              <button type="button" style={styles.btn} onClick={capturePhoto}>
                Capture
              </button>
            </>
          )}
          <canvas ref={canvasRef} width="150" height="120" style={{ display: "none" }}></canvas>
          {formData.photo && (
            <img
              src={formData.photo}
              alt="Captured"
              style={{ width: "100px", marginTop: "10px", borderRadius: "10px" }}
            />
          )}
        </div>

        {/* Location */}
        <div style={styles.inputGroup}>
          <button type="button" style={styles.btn} onClick={fetchLocation}>
            Capture Location
          </button>
          {formData.location && (
            <a href={formData.location} target="_blank" rel="noreferrer" style={styles.navLink}>
              View Location on Map
            </a>
          )}
        </div>

        {/* QR Code */}
        <div style={styles.inputGroup}>
          <button type="button" style={styles.btn} onClick={generateQRCode}>
            Generate QR Code
          </button>
          {qrGenerated && (
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <QRCodeCanvas id="userQR" value={qrData} size={150} />
            </div>
          )}
        </div>

        <button type="submit" style={styles.btn}>
          Login
        </button>

        <a href="/" style={styles.navLink}>
          ← Back to Home / Registration
        </a>
      </form>
    </div>
  );
}
