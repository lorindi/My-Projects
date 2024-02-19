import styles from './ToggleDarckMode.module.css'

export const ToggleDarckMode = () => {
  return (
    <label htmlFor="theme" className={styles.theme}>
      <span className={styles.themeToggleWrap}>
        <input
          id="theme"
          className={styles.themeToggle}
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
        />
        <span className={styles.themeFill}></span>
        <span className={styles.themeIcon}>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
        </span>
      </span>
    </label>
  );
};
