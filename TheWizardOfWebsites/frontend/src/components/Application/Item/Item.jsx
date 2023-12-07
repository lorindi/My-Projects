import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export const Item = ({ _id, image, title, price, shortDescription }) => {
  return (
    <div className={styles.containerCard}>
      <Link to={`/sites/${_id}/details`} className={styles.contentCard}>
        <img className={styles.cardImg} src={image} alt="" />

        <div className={styles.cardInfo}>
       
            <h4 className={styles.cardTitle}>{title.length > 13 ? `${title.slice(0, 13)}..` : title}</h4>

            <p className={styles.cardDescription}>{shortDescription.length > 40 ? `${shortDescription.slice(0,40)}..`: shortDescription}</p>
            <p className={styles.cardPrice}>
              {price.length > 10 ? `${price.slice(0,10)}..`: price}
              <span>lv.</span>
            </p>
          </div>
      </Link>
    </div>
  );
};
