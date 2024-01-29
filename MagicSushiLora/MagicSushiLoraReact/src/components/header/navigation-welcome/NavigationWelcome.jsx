import { Link } from "react-router-dom";
import styles from "./NavigationWelcome.module.css";
import { Logout } from "../../logout/Logout";
export const NavigationWelcome = () => {
  return (
    <nav className={styles.navigationWelcome}>
      <Link to="" className={styles.sushiLogoWelcome}>
        Logo
      </Link>
      <ul role="list" className={styles.navBarWelcome}>
        <li>
          <Link className={styles.linkWelcome} to="">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.linkWelcome} to="">
            Recipes
          </Link>
        </li>
        <li>
          <Link className={styles.linkWelcome} to="">
            Contacts
          </Link>
        </li>
        <li>
          <Link className={styles.linkWelcome} to="">
            Profile
          </Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
};
