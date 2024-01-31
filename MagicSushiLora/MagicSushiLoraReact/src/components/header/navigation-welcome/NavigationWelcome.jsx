import { Link } from "react-router-dom";
import styles from "./NavigationWelcome.module.css";
import { Logout } from "../../logout/Logout";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTimes,
  faHouse,
  faCaretDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export const NavigationWelcome = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisibility(!isDropdownVisible);
  };

  return (
    <>
      <nav className={styles.navigationWelcome}>
        <Link to="" className={styles.sushiLogoWelcome}>
          Logo
        </Link>
        <div className={styles.navBarWelcome}>
          <Link className={styles.linkWelcome} to="">
            Recipes
          </Link>
        </div>
        <Link className={styles.linkWelcome} to="">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCaretDown} />
          <Logout />
        </Link>
      </nav>

      <nav className={styles.navigationWelcomeMobile}>
        <div className={styles.contentDropDownButton}>
          <button className={styles.dropdownButton} onClick={toggleDropdown}>
            <FontAwesomeIcon
              className={styles.dropdownButtonIcon}
              icon={faBars}
            />
          </button>
          {isDropdownVisible && (
            <div className={styles.dropdown}>
              <div className={styles.contentOnCloseButton}>
                <button
                  className={styles.onCloseButton}
                  onClick={toggleDropdown}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              <Link
                onClick={toggleDropdown}
                className={styles.downLinkWelcome}
                to="/"
              >
                <FontAwesomeIcon className={styles.iconHome} icon={faHouse} />
              </Link>

              <Link
                onClick={toggleDropdown}
                className={styles.downLinkWelcome}
                to=""
              >
                Recipes
              </Link>

              <Link
                onClick={toggleDropdown}
                className={styles.downLinkWelcome}
                to=""
              >
                Profile
              </Link>

              <Logout
                className={styles.downLinkWelcome}
                onClick={toggleDropdown}
              />
            </div>
          )}
        </div>
        <Link to="" className={styles.sushiLogoWelcome}>
          Logo
        </Link>
      </nav>
    </>
  );
};
