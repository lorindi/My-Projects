import { useState } from "react";
import "./Navbar.scss";
function Navbar() {
  const [open, setOpen] = useState(false);
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
        <a className="login" href="/sign-in">
          Sign in
        </a>
        <a className="register" href="/sign-up">
          Sign up
        </a>
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
          <a href="/sign-in">
            Sign in
          </a>
          <a href="/sign-up">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
