import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { AuthProvider } from "./contexts/Contexts";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { Logout } from "./components/logout/Logout";
import { Home } from "./components/home/Home";
import { Signin } from "./components/signin/SignIn";
// import { useMediaQuery } from 'react-responsive';
import './App.css'
import { useEffect, useState } from "react";
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
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
