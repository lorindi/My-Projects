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
import { Logout } from "./components/Logout/Logout";
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
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken')
    return {}
  });

  const onLoginSubmit = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    localStorage.setItem("accessToken", result.accessToken);

    setAuth(result);
    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem
    // navigate(Path.Home)
  };

  const values = {
    registerSubmitHandler,
    onLoginSubmit,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    // isAuthenticated: !!auth.accessToken,

    isAuthenticated: !!auth.email,
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
            <Route path="/sites/:id/details/*" element={<Details />} />
            <Route path="/sites/create" element={<Create />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Contexts.Provider>
  );
}

export default App;
