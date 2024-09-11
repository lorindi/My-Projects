import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Layout.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Footer from "../../components/footer/Footer";

function Layout() {
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className={`footer ${isContactPage ? "hidden" : ""}`}>
        <Footer/>
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
 
  return !currentUser ? (
    <Navigate to="/sign-in" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export { Layout, RequireAuth };
