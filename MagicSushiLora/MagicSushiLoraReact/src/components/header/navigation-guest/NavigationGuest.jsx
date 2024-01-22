import { Link } from "react-router-dom";
import styles from "../Header.module.css";


export const NavigationGuest = () => {
  return (
    <nav className={styles.navigation}>
      <ul role="list" className={styles.navBar}>
        <li>
          <Link className={styles.link} to="/login">
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
};
