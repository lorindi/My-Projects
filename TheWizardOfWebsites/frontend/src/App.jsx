// import { useState } from 'react'
// import { Context } from "./contexts/Contexts"
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AboutUs } from "./components/AboutUs/AboutUs";
import {Profile} from "./components/Profile/Profile"
import {Info} from "./components/Profile/Info/Info"
// import { useEffect } from 'react';
// import "./App.css";

// const contextValue = {
//   onTodo...
// }

function App() {
  return (
    // <Contexts.Provider value={"Lora"}>
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile/*" element={<Profile />} /> */}
          <Route path="/profile/*" element={<Profile />}>
            <Route path="info" element={<Info />} /> {/* Добавете този маршрут */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </>
    // </Contexts.Provider>
  );
}

export default App;
