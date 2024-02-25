import styles from "./ToggleDarkMode.module.css";
import { useContext, useEffect } from "react";
import { Contexts } from "../../../../contexts/Contexts";
export const ToggleDarkMode = () => {
  // const { isDarkMode, toggleDarkMode } = useContext(Contexts);
  const { theme, toggleTheme } = useContext(Contexts);

  // const handleCheckboxChange = () => {
  //   toggleDarkMode();
  // };
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    toggleTheme();
  };
  return (
    // <input
    //   id="theme"
    //   className={styles.themeToggle}
    //   type="checkbox"
    //   role="switch"
    //   name="theme"
    //   value="dark"
    //   // checked={isDarkMode}
    //   // onChange={handleCheckboxChange}
    // />
    <input
        id="theme"
        className={styles.themeToggle}
        type="checkbox"
        role="switch"
        name="theme"
        value={theme === 'dark' ? 'dark' : 'light'}
        checked={theme === 'dark'}
        onChange={handleThemeToggle}
      />
  );
};


