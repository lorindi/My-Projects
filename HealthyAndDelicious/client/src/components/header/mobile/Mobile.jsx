import { useState } from "react";
import "./Mobile.scss";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faX } from "@fortawesome/free-solid-svg-icons";
function Mobile() {
  const [isShow, setIsShow] = useState(false);
  const [isLogged] = useState(true);


  const toggleIsShow = () => {
    setIsShow(()=> !isShow);
  };
  return (
    <nav className="navigationMobile">
      <div className="contentLogoMobile">
        <Link className="logoMobile linkMobile link" to="/">
          H&D
        </Link>
      </div>
      <div className="contentButtonMobile">
        <button onClick={toggleIsShow} className="dropdownButtonMobile">
          <FontAwesomeIcon icon={faBars} className="faBars" />
        </button>
        {isShow && (
          <div className="contentDropdownMobile">
            <div className="contentOnCloseButtonMobile">
              <button onClick={toggleIsShow} className="onCloseButtonMobile">
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
            <Link className="linkMobile" to="/">
              <FontAwesomeIcon icon={faHouse} />
            </Link>
            {isLogged ? (
              <>
                <Link className="linkMobile" to="/create-recipe">
                  Create Recipe
                </Link>
                <Link className="linkMobile" to="/recipes">
                  Recipes
                </Link>
                <Link className="linkMobile" to="/about">
                  About Us
                </Link>
                <Link className="linkMobile" to="/profile">
                  Profile
                </Link>
                <Link className="linkMobile" to="/contact">
                  Contacts
                </Link>
                {/* <Link className="linkMobile" onClick={logout}>
                  Log out
                </Link> */}
              </>
            ) : (
              <>
                <Link className="linkMobile" to="/about-us">
                  About Us
                </Link>
                <Link className="linkMobile" to="/contacts">
                  Contacts
                </Link>
                <Link className="linkMobile" to="/login">
                  Log In
                </Link>
                <Link className="linkMobile" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Mobile;
