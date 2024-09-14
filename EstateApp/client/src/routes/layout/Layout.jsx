import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Layout.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Footer from "../../components/footer/Footer";

function Layout() {
  const location = useLocation();
  const noFooterPages = ["/contact", "/sign-in", "/create-account", "/profile-update", "/about"];
  const isNoFooterPage = noFooterPages.includes(location.pathname);
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className={`footer ${isNoFooterPage ? "hidden" : ""}`}>
        <Footer/>
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const noFooterPages = ["/profile-update"];
  const isNoFooterPage = noFooterPages.includes(location.pathname);
 
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
      <div className={`footer ${isNoFooterPage ? "hidden" : ""}`}>
        <Footer />
      </div>
    </div>
  );
}

export { Layout, RequireAuth };
