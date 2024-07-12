import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LoEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/92224899?v=4"
              alt=""
            />
            <span>Lo Mitova</span>
            <Link className="profile" to="/profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a className="login" href="/sign-in">
              Sign in
            </a>
            <a className="register" href="/sign-up">
              Sign up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/sign-in">Sign in</a>
          <a href="/sign-up">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
