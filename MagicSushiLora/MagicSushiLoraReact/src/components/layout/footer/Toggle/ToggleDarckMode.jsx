import styles from "./ToggleDarkMode.module.css";
import { useContext } from "react";
import { Contexts } from "../../../../contexts/Contexts";
export const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(Contexts);

  const handleCheckboxChange = () => {
    toggleDarkMode(); 
  };

  return (


        <input
          id="theme"
          className={styles.themeToggle}
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
          checked={isDarkMode}
          onChange={handleCheckboxChange}
        />

  );
};
