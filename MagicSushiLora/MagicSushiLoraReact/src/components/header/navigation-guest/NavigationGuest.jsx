import { Link } from "react-router-dom";
import styles from "./NavigationGuest.module.css";

export const NavigationGuest = () => {
  return (
    <nav className={styles.navigationGuest}>
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
