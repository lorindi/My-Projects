import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { isAuthenticated, username } = useContext(Contexts);
  return (
    <header className={styles.header}>
      <nav className={`${styles.navigation} ${styles.dark}`}>
        <ul className={styles.navBar} role="list">
          <li className={styles.navBarEl}>
            <NavLink
              className={styles.link}
              style={({ isActive }) => ({
                color: isActive ? "lightgreen" : "lightblue",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          {/* <li className={styles.navBarEl}>
            <NavLink
              className={styles.link}
              style={({ isActive }) => ({
                color: isActive ? "lightblue" : "lightgreen",
              })}
              to="/about-us"
            >
              About us
            </NavLink>
          </li> */}
          {isAuthenticated && (
            <li className={styles.navBarEl}>
              <NavLink
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? "lightgreen" : "lightblue",
                })}
                to="/sites"
              >
                Sites
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li className={styles.navBarEl}>
              <NavLink
                className={`${styles.link} ${styles.dropbtn}`}
                style={({ isActive }) => ({
                  color: isActive ? "lightgreen" : "lightblue",
                })}
                to="/profile"
              >
                {username}
              </NavLink>
              <div className={styles.dropdownContent}>
                <NavLink
                  className={styles.link}
                
                  to="/logout"
                >
                  Logout
                </NavLink>
              </div>
            </li>
          )}
          {!isAuthenticated && (
            <li className={styles.navBarEl}>
              <NavLink
                className={styles.link}
                style={({ isActive }) => ({
                  color: isActive ? "lightgreen" : "lightblue",
                })}
                to="/login"
              >
                Sign in
              </NavLink>
            </li>
          )}

          {/* <li className={styles.navBarEl}>
            <NavLink className={styles.link} style={({ isActive }) => ({
            color: isActive ? "lightblue" : "lightgreen",
          })} to="/register">
              Register
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
