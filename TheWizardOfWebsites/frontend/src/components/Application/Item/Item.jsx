import { Link } from "react-router-dom";
import styles from "./Item.module.css";


export const Item = ({
    _id,
    image,
    title,
    price,
    shortDescription,
}) => {
    return (
        <div className={styles.contentCard}>
        <img
          className={styles.cardImg}
          src={image}
          alt=""
        />
        <div className={styles.cardInfo}>
          <h4 className={styles.cardTitle}>{title}</h4>
          <div className={styles.cardMoreInfo}>
            <p className={styles.cardDescription}>{shortDescription}</p>
            <p className={styles.cardPrice}>{price}<span>lv.</span>
            </p>
          </div>
          <Link to={`/sites/${_id}/details`} className={styles.cardButton}>
            More
          </Link>
        </div>
      </div>
    )
}