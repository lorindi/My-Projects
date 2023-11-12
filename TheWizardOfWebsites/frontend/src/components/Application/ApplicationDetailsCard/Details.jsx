import styles from "./Details.module.css";
import { Link, Outlet } from "react-router-dom";
export const Details = () => {
  return (
    <div className={styles.containerDetail}>
      <h1 className={styles.detailTitle}>Title</h1>
      <p className={styles.detailDescription}>Description</p>
      <div className={styles.detailLinks}>
        <Link to="edit-site" className={styles.detailLink}>Edit</Link>
        <Link to="delete" className={styles.detailLink}>Delete</Link>
        <Link to="sing-up" className={styles.detailLink}>Sing Up</Link>
      </div>
      <Outlet/>
    </div>)
};
