import styles from "./List.module.css";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";
import { Item } from "../Item/Item";
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
      
      <div className={styles.listCards}>
        {sites.map((site) => (
          <Item key={site._id} {...site} />
        ))}
        {sites.length === 0 && (
          <h1 className={styles.noArticles}>No articles yet</h1>
        )}
      </div>
  );
};
