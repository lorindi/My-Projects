import { Link } from "react-router-dom";
import styles from "./NavigationWelcome.module.css";
import { Logout } from "../../../users/logout/Logout";
import { useState } from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contexts } from "../../../../contexts/Contexts";

import {
  faBars,
  faTimes,
  faHouse,
  faUser,
  faShop,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
export const NavigationWelcome = () => {
  const { userId, theme } = useContext(Contexts);
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  return (
    <>
      <nav className={styles.navigationWelcome} data-theme={theme}>
        <Link to="" className={styles.sushiLogoWelcome}>
          Logo
        </Link>
        <div className={styles.navBarWelcome}>
          <Link className={styles.linkWelcome} to="">
            Recipes
          </Link>
          <Link className={styles.linkWelcome} to="">
            Kinds
          </Link>
          <Link className={styles.linkWelcome} to="">
            Blog
          </Link>
          <Link className={styles.linkWelcome} to="">
            Courses
          </Link>
        </div>
        <div className={styles.contentNavBarWelcome}>
          <Link className={styles.linkWelcome} to="">
            <FontAwesomeIcon icon={faShop} />
          </Link>
          <Link className={styles.linkWelcome} to="">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <div className={styles.dropdownButtonProfile}>
            <Link className={styles.linkWelcome} to={`/profile/${userId}`} >
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <div className={styles.dropdownLinks}>
              <div className={styles.dropdownLink}>
                <Logout />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className={styles.navigationMobile}>
        <div className={styles.contentDropDownButtonMobile}>
          <button
            className={styles.dropdownButtonMobile}
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon
              className={styles.dropdownButtonIconMobile}
              icon={faBars}
            />
          </button>
          {isDropdownVisible && (
            <div className={styles.dropdownMobile}>
              <div className={styles.contentOnCloseButtonMobile}>
                <button
                  className={styles.onCloseButtonMobile}
                  onClick={toggleDropdown}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              <Link
                onClick={toggleDropdown}
                className={styles.downLinkMobile}
                to="/"
              >
                <FontAwesomeIcon className={styles.iconHome} icon={faHouse} />
              </Link>
              <Link
                onClick={toggleDropdown}
                className={styles.downLinkMobile}
                to=""
              >
                Sushi Recipes
              </Link>
              <Link
                onClick={toggleDropdown}
                className={styles.downLinkMobile}
                to=""
              >
                Sushi Kinds
              </Link>
              <Link
                className={styles.downLinkMobile}
                onClick={toggleDropdown}
                to=""
              >
                Sushi Blog
              </Link>
              <Link
                className={styles.downLinkMobile}
                onClick={toggleDropdown}
                to=""
              >
                Sushi Courses
              </Link>
              <Link
                onClick={toggleDropdown}
                className={styles.downLinkMobile}
                to=""
              >
                Sushi Shop
              </Link>
              <Link
                onClick={toggleDropdown}
                className={styles.downLinkMobile}
                to=""
              >
                Sushi Orders
              </Link>
              <Link
                onClick={toggleDropdown}
                className={styles.downLinkMobile}
                to=""
              >
                Profile
              </Link>

              <Logout
                className={styles.downLinkMobile}
                onClick={toggleDropdown}
              />
            </div>
          )}
        </div>
        <Link to="" className={styles.sushiLogoMobile}>
          Logo
        </Link>
      </nav>
    </>
  );
};
