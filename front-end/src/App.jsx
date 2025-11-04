import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SuccessPage from "./components/SuccessPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
// import TestCamera from "./components/TestCamera";

export default function App() {
  return (

    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <div style={{ flex: 1 }}> 

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/" element={<TestCamera />} /> */}

      </Routes> 

      </div>


      <Footer />
    </div>



  );
};

 
