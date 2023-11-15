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
import { List } from "./components/Application/List/List";
import { Create } from "./components/Application/Create/Create";
import { Edit } from "./components/Application/Edit/Edit";
import { Details } from "./components/Application/Details/Details";
// import { useEffect, useState } from "react";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     console.log(import.meta.env.VITE_API_URL);
  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_API_URL}`);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const result = await response.json();
  //       console.log(result);
  //       setData(result);
  //     } catch (error) {
  //       console.log("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

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
            <Route path="/sites" element={<List />} />
            <Route path="/site/details" element={<Details />}>
              <Route path="edit" element={<Edit />} />
              {/* <Route path="del" element={<Edit />} />
              <Route path="sign-up" element={<Edit />} /> */}
            </Route>
            <Route path="/site/create" element={<Create/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Contexts.Provider>
  );
}

export default App;
