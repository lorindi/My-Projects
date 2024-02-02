import { useContext } from "react";
import { Contexts } from "../../../contexts/Contexts";
import styles from "./Header.module.css";
import { NavigationGuest } from "./navigation-guest/NavigationGuest";
import { NavigationWelcome } from "./navigation-welcome/NavigationWelcome";
export const Header = () => {
  const { isAuthenticated } = useContext(Contexts);
  return (
    <header className={styles.header}>
      {!isAuthenticated && <NavigationGuest />}

      {isAuthenticated && <NavigationWelcome />}
    </header>
  );
};
