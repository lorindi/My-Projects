import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navigation} ${styles.dark}`}>
        <ul className={styles.navBar} role="list">
          <li className={styles.navBarEl}>
            <NavLink className={styles.link} style={({ isActive }) => ({
            color: isActive ? "lightblue" : "lightgreen",
          })} to="/">
              Home
            </NavLink>
          </li>
          {/* <li className={styles.navBarEl}>
            <NavLink className={styles.link} style={({ isActive }) => ({
            color: isActive ? "lightblue" : "lightgreen",
          })} to="/about-us">
              About us
            </NavLink>
          </li> */}
          <li className={styles.navBarEl}>
            <NavLink className={styles.link} style={({ isActive }) => ({
            color: isActive ? "lightblue" : "lightgreen",
          })} to="/application">
              Application
            </NavLink>
          </li>
          <li className={styles.navBarEl}>
            <NavLink className={styles.link} style={({ isActive }) => ({
            color: isActive ? "lightblue" : "lightgreen",
          })} to="/profile">
              Profile
            </NavLink>
          </li>
          <li className={styles.navBarEl}>
            <NavLink className={styles.link} style={({ isActive }) => ({
            color: isActive ? "lightblue" : "lightgreen",
          })} to="/login">
              Sing in
            </NavLink>
          </li>
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
