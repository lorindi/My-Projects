import styles from "./Application.module.css";
// import { Details } from "../Details/Details";
import { Link } from "react-router-dom";
export const Application = () => {
  return (
    <div className={styles.listCards}>
      <div className={styles.contentCard}>
        <img
          className={styles.cardImg}
          src="../../../../src/components/Application/ApplicationListCards/john-schnobrich-2FPjlAyMQTA-unsplash.jpg"
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
          <Link to="details" className={styles.cardButton}>
            More
          </Link>
        </div>
      </div>
    </div>
  );
};
