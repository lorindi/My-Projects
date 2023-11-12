// import { useState } from 'react'
import { Contexts } from "./contexts/Contexts";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Profile } from "./components/Profile/Profile";
import { Application } from "./components/Application/ApplicationListCards/Application";
import { CreateForm } from "./components/Application/ApplicationCreateForm/CreateForm";
import { EditForm } from "./components/Application/ApplicationEditForm/EditForm";
import { Details } from "./components/Application/ApplicationDetailsCard/Details";
import { useEffect, useState } from "react";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const onLoginSubmit = async (data) => {
    console.log(data);
  };

  return (
    <Contexts.Provider value={{ onLoginSubmit }}>
      <div id="box">
        <Header />
        <main className="main">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* onLoginSubmit={onLoginSubmit} */}
            <Route path="/register" element={<Register />} />
            
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/application" element={<Application />}/>
            <Route path="/application/details" element={<Details />}>
              <Route path="edit-site" element={<EditForm />} />
            </Route>
  
            <Route path="/application/create-site" element={<CreateForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Contexts.Provider>
  );
}

export default App;
