import { Link } from "react-router-dom"
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <div className={styles.content}>
          <Link>
            <img src="" alt="" />Logo
          </Link>
        </div>
        <div>
          <Link>Home</Link>
          <Link>Skills</Link>
          <Link>Works</Link>
          <Link>Resume</Link>
          <Link>Contact</Link>
        </div>
      </nav>
    </header>
  );
};
