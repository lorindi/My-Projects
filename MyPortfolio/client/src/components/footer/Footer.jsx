import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer>
      <p className={styles.rightsReservedText}>© Copyright 2024</p>
      <p className={styles.rightsReservedTextSpan}>Lora Mitova</p>
      <p className={styles.rightsReservedText}>All rights reserved.</p>
    </footer>
  );
};
