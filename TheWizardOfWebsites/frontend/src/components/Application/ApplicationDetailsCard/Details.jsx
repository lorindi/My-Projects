import styles from "./Details.module.css";
// import { Link } from "react-router-dom";
export const Details = () => {
  return (
    <div className={styles.containerDetail}>
      <h1 className={styles.detailTitle}>Title</h1>
      <p className={styles.detailDescription}>Description</p>
      <div className={styles.detailLinks}>
        <button className={styles.detailLink}>Edit</button>
        <button className={styles.detailLink}>Delete</button>
        <button className={styles.detailLink}>Sing Up</button>
      </div>
    </div>
  );
};
