import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.containerNotFound}>
      <div className={styles.contentNotFound}>
        <p className={styles.notFoundText}>Not Found</p>
        <h1 className={styles.notFoundTitle}>404</h1>
      </div>
    </div>
  );
};
