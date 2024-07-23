import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import "./Layout.scss";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
 
  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export { Layout, RequireAuth };
