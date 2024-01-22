// import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import styles from "./Header.module.css";
import { NavigationGuest } from "./navigation-guest/NavigationGuest";
import { NavigationWelcome } from "./navigation-welcome/NavigationWelcome";
import { CoverSection } from "./cover-section/CoverSection";
export const Header = () => {
  const { isAuthenticated} = useContext(Contexts);
  return (
    <header className={styles.header}>
      <CoverSection />
      <div className={styles.contentNavigations}>
        {/* <Link to="" className={styles.sushiLogo}>
          Logo
        </Link> */}
        { !isAuthenticated && (
        <NavigationGuest />)}
        
        {isAuthenticated && (
        <NavigationWelcome />)}
      </div>
    </header>
  );
};
