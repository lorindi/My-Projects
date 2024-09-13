import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";
function Navbar() {

  const isHomePage = location.pathname === "/";

  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const number = useNotificationStore((state) => state.fetch);
  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LoEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={`right ${isHomePage ? 'homeWhite' : 'homeColor'}`}>
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.png"} alt="" />
            <span>{currentUser.name}</span>
            <Link className="profile" to="/profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link className="login" to="/sign-in">
              Sign in
            </Link>
            <Link className="register" to="/create-account">
              Create Account
            </Link>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        {open && (<div className="mobileNavigation">
          <Link onClick={handleLinkClick} to="/">Home</Link>
          <Link onClick={handleLinkClick} to="/about">About</Link>
          <Link onClick={handleLinkClick} to="/contact">Contact</Link>
          <Link onClick={handleLinkClick} to="/sign-in">Sign in</Link>
          <Link onClick={handleLinkClick} to="/create-account">Create Account</Link>
        </div>)}
        
      </div>
    </nav>
  );
}

export default Navbar;
