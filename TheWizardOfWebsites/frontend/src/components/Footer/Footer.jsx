import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>© Lora Mitova.</p>
      <p className={styles.footerText}> All rights reserved.</p>
    </footer>
  );
};
