import infoImg from "./pngwing.com (8).png";
import styles from "./CoverSection.module.css";
import { Link } from "react-router-dom";
export const CoverSection = () => {
  return (
    <div className={styles.coverSection}>
      <div className={styles.contentCoverInfo}>
        <h1 className={styles.coverTitle}>Discover the magic of sushi</h1>
        <p className={styles.coverDescription}>
          Welcome to the culinary oasis of Magic Sushi Lora - an interactive space
          for culinary enthusiasts to share, discover, and savor delightful
          sushi recipes.
        </p>
        <Link className={styles.coverButton}>Get Started</Link>
      </div>
      <div className={styles.contentCoverImage}>
        <img className={styles.coverImage} src={infoImg} alt="" />
      </div>
    </div>
  );
};
