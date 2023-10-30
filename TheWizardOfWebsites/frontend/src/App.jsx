// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AboutUs } from "./components/AboutUs/AboutUs";
// import { useEffect } from 'react';
// import "./App.css";

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />


        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
