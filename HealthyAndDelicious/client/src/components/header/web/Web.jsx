import "./Web.scss";
import { Link } from "react-router-dom";
function Web() {
  return (
    <nav className="navigation">
      <div className="contentLogo">
        <Link className="logoLink" to="/">
          Healthy Delicious
        </Link>
      </div>
      <div className="contentLinks">
        <Link className="link" to="/create-recipe">
          Create Recipe
        </Link>
        <Link className="link" to="/recipes">
          Recipes
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/contact">
          Contacts
        </Link>

        <Link className="linkSignIn" to="/sign-in">
          Sign In
        </Link>
        <Link className="linkSignIn" to="/create-account">
          Create Account
        </Link>
      </div>
      <div className="contentLinksIcon">
        <Link className="link" to="/profile">
          <i className="fa-solid fa-user"></i>Profile
        </Link>
      </div>
    </nav>
  );
}

export default Web;
