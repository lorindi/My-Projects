import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { isAuthenticated, username } = useContext(Contexts);
  const { email } = useContext(Contexts);
  const displayName = email ? email.split('@')[0] : username;

  return (
    <header className={styles.header}>
      <nav className={`${styles.navigation} ${styles.dark}`}>
        {isAuthenticated && (
          <div className={styles.navBar}>
            <div className={styles.navBarEl}>
              <NavLink
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? "lightgreen" : "lightblue",
                })}
                to="/"
              >
                Web Crafters
              </NavLink>
            </div>

            <div className={styles.navBarElements}>
              <div className={styles.navBarEl}>
                <NavLink
                  className={styles.link}
                  style={({ isActive }) => ({
                    color: isActive ? "lightgreen" : "lightblue",
                  })}
                  to="/sites"
                >
                  Sites
                </NavLink>
              </div>

              <div className={styles.navBarEl}>
                <NavLink
                  className={styles.link}
                  style={({ isActive }) => ({
                    color: isActive ? "lightgreen" : "lightblue",
                  })}
                  to="/about-us"
                >
                  About us
                </NavLink>
              </div>
            </div>

            <div className={styles.navBarEl}>
              <button
                className={`${styles.linkButton} ${styles.link} ${styles.dropbtn}`}
              >
                {displayName}
              </button>

              <div className={styles.dropdownContent}>
                <p className={styles.dropdownEmail}>{email}</p>
                <NavLink className={styles.link} to="/logout">
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        )}
        {!isAuthenticated && (
          <div className={styles.navBar}>
            <div className={styles.navBarEl}>
              <NavLink
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? "lightgreen" : "lightblue",
                })}
                to="/"
              >
                Web Crafters
              </NavLink>
            </div>

            <div className={styles.navBarEl}>
              <NavLink
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? "lightgreen" : "lightblue",
                })}
                to="/login"
              >
                Sign in
              </NavLink>
            </div>
          </div>
        )}

        {/* {isAuthenticated && (
          <div className={styles.navBarEl}>
            <NavLink
              className={styles.link}
              style={({ isActive }) => ({
                color: isActive ? "lightgreen" : "lightblue",
              })}
              to="/sites/create"
            >
              Create
            </NavLink>
          </div>
        )} */}
      </nav>
    </header>
  );
};
