import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation light">
      <ul className="nav-bar" role="list">
        <li className="nav-bar-el">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-bar-el">
          <Link className="link" to="/about-us">
            About us
          </Link>
        </li>
        <li className="nav-bar-el">
          <Link className="link" to="">
            Application
          </Link>
        </li>
        <li className="nav-bar-el">
          <Link className="link" to="">
            Profile
          </Link>
        </li>
        <li className="nav-bar-el">
          <Link className="link" to="/login">
            Log in
          </Link>
        </li>
        <li className="nav-bar-el">
          <Link className="link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};
