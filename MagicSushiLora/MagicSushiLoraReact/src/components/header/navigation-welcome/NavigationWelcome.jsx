import { Link } from "react-router-dom";
import styles from "../Header.module.css";
import { Logout } from "../../logout/Logout";
export const NavigationWelcome = () => {
  return (
    <nav className={styles.navigation}>
      <ul role="list" className={styles.navBar}>
        <li>
          <Link className={styles.link} to="">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="">
            Recipes
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="">
            Contacts
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="">
            Profile
          </Link>
        </li>
        <li>
          <Logout/>
        </li>
      </ul>
    </nav>
  );
};
