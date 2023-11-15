import styles from "./List.module.css";
// import { Details } from "../Details/Details";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as siteService from "../../../services/applicationService";
export const List = () => {
  const [sites, setSites] = useState([])


  useEffect(() => {
    siteService.getAll()
    .then(result => setSites(result))
  }, []);
console.log(sites);
  return (
    <div className={styles.listCards}>
      <div className={styles.contentCard}>
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
      </div>
    </div>
  );
};
