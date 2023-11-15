import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";
export const Details = () => {
  const [site, setSite] = useState({})
  const { id } = useParams();
  useEffect(() => {
    siteService.getOne(id)
    .then(setSite)
  },[id]);
  return (
    <div className={styles.containerDetail}>
      <h1 className={styles.detailTitle}>{site.title}</h1>
      <p className={styles.detailDescription}>{site.description}</p>
      <div className={styles.detailLinks}>
        <Link to="edit" className={styles.detailLink}>
          Edit
        </Link>
        <button className={styles.detailLink}>Delete</button>
        <button className={styles.detailLink}>Sing Up</button>
      </div>
      <Outlet />
    </div>
  );
};
