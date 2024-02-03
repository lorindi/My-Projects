import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";
import { AuthProvider } from "./contexts/Contexts";
import { Home } from "./components/pages/home/Home";

import { Signin } from "./components/users/signin/Signin";
import { Login } from "./components/users/login/Login";
import { Register } from "./components/users/register/Register";
import { Logout } from "./components//users/logout/Logout";
// import { useMediaQuery } from 'react-responsive';
import './App.css'
import { useEffect, useState } from "react";
import { EditUser } from "./components/users/edit/EditUser";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, []);
  return (
    <AuthProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {!isMobile && (
              <>
                <Route path="/sign-in" element={<Signin />} />
              </>
            )}
            {isMobile && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </>
            )}
            <Route path="/logout" element={<Logout />} />
            <Route path="/edit/user/:pk" element={<EditUser />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
