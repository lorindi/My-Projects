import styles from "./List.module.css";
// import { Details } from "../Details/Details";
import { useEffect, useState } from "react";
import * as siteService from "../../../services/applicationService";
import { Item } from "../Item/Item";
export const List = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    siteService.getAll()
    .then((result) => setSites(result))
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div className={styles.listCards}>
      {sites.map((site) => (
        <Item key={site._id} {...site} />
      ))}
      {sites.length === 0 && (
        <h1 className={styles.noArticles}>No articles yet</h1>
      )}
      {/* <div className={styles.contentCard}>
        <img
          className={styles.cardImg}
          src="../../../../src/components/Application/List/john-schnobrich-2FPjlAyMQTA-unsplash.jpg"
          alt=""
        />
        <div className={styles.cardInfo}>
          <h4 className={styles.cardTitle}>Title</h4>
          <div className={styles.cardMoreInfo}>
            <p className={styles.cardDescription}>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            <p className={styles.cardPrice}>
              1010 <span>lv.</span>
            </p>
          </div>
          <Link to="/site/details" className={styles.cardButton}>
            More
          </Link>
        </div>
      </div> */}
    </div>
  );
};
