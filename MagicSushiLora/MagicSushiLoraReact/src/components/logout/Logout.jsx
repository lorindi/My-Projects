import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import styles from './Logout.module.css'
export const Logout = () => {
  const { logoutHandler } = useContext(Contexts);

  const handleLogout = () => {
    logoutHandler();
  };

  return (
      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
  );
};

