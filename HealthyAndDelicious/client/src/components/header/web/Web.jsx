import "./Web.scss";
import { Link } from "react-router-dom";
function Web({ isAuthenticated }) {
  return (
    <nav className="navigation">
      <div className="contentLogo">
        <img src="/logo.png" alt="" className="logo" />
        <Link className="logoLink" to="/">
          Healthy Delicious
        </Link>
      </div>
      <div className="contentLinks">
        {isAuthenticated && (
          <Link className="link" to="/create-recipe">
            Create Recipe
          </Link>
        )}
        <Link className="link" to="/recipes">
          Recipes
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/contact">
          Contacts
        </Link>
      </div>
      <div className="contentLinksIcon">
        {isAuthenticated && (
          <Link className="link" to="/profile">
            <i className="fa-solid fa-user"></i>Profile
          </Link>
        )}
        {!isAuthenticated && (
          <>
            <Link className="linkSignIn" to="/sign-in">
              Sign In
            </Link>
            <Link className="linkCreateAccount" to="/create-account">
              Create Account
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Web;
