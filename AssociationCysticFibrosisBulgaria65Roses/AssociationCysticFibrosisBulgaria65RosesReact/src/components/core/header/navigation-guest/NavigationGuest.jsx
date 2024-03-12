import { Link } from "react-router-dom";
import styles from "./NavigationGuest.module.css";
import {Contexts} from '../../../../contexts/Contexts'
import { useContext } from "react";
export const NavigationGuest = () => {
  const {theme} = useContext(Contexts)
  return (
    <nav className={styles.navigationGuest} data-theme = {theme}>
      <Link to="" className={styles.sushiLogoGuest}>
        SushiLogo
      </Link>
      <ul role="list" className={styles.navBarGuest}>
        <li>
          <Link className={styles.linkGuest} to="/sign-in">
            Sign in
          </Link>
        </li>
        <li>
          <Link className={styles.linkGuest} to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className={styles.linkGuest} to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
