import styles from "./List.module.css";
// import { Details } from "../Details/Details";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";
import { Item } from "../Item/Item";
import { NavLink } from "react-router-dom";
export const List = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    siteService
      .getAll()
      .then((result) => setSites(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={styles.sitesInfo}>
        <h1 className={`${styles.createSiteTitle} ${styles.dark}`}>
          Create Your Unique Website!
        </h1>
      
        <p className={`${styles.createSiteDescriptionSecond} ${styles.dark}`}>
          Share with us your vision and ideas, and we will turn them into
          reality! 
        </p>
        <p className={`${styles.createSiteDescriptionThird} ${styles.dark}`}>
          Start your web journey today! 
        </p>
        <NavLink
          className={styles.link}
          style={({ isActive }) => ({
            color: isActive ? "lightgreen" : "lightblue",
          })}
          to="/sites/create"
        >
          Get Started Now
        </NavLink>
      </div>
      <div className={styles.listCards}>
        {sites.map((site) => (
          <Item key={site._id} {...site} />
        ))}
        {sites.length === 0 && (
          <h1 className={styles.noArticles}>No articles yet</h1>
        )}
      </div>
    </>
  );
};
