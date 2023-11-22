import { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService";
import { Contexts } from "./contexts/Contexts";
import Path from "./components/paths";

import { NotFound } from "./components/NotFound/NotFound";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import { List } from "./components/Application/List/List";
import { Create } from "./components/Application/Create/Create";
// import { Edit } from "./components/Application/Edit/Edit";
import { Details } from "./components/Application/Details/Details";
// import { Comments } from "./components/Application/Comments/Comments";
// import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const onLoginSubmit = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    navigate(Path.Home);
  };

const registerSubmitHandler = async (values) => {
console.log(values);
}

  const values = {
    registerSubmitHandler,
    onLoginSubmit,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.username,
  };
  return (
    <Contexts.Provider value={values}>
      <div id="box">
        <Header />
        <main className="main">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path={Path.Home} element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sites" element={<List />} />
            <Route path="/sites/:id/details/*" element={<Details />}>
              {/* <Route path="edit" element={<Edit />} />
              <Route path="comments" element={<Comments />}/> */}

              {/* <Route path="del" element={<Edit />} />
              <Route path="sign-up" element={<Edit />} /> */}
            </Route>
            <Route path="/sites/create" element={<Create />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Contexts.Provider>
  );
}

export default App;
