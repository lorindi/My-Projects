import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import leftImg from "../home/left.png";
import rightImg from "../home/right.png";

import leftMobile from "../home/leftMobile.png";
import rightMobile from "../home/rightMobile.png";

import sushirightImg from "../home/pngwing.com (8).png";
import sushileftImg from "../home/leftImg.png";
export const Home = () => {
  return (
    <div className={styles.containerHomePage}>
      <section className={styles.sectionCover}>

        <div className={styles.contentCoverImageMobileLeft}>
          <img className={styles.coverImageMobile} src={leftImg} alt="" />
          <img
            className={styles.additionalImageMobileLeft}
            src={leftMobile}
            alt=""
          />
        </div>

        <div className={styles.contentCoverImage}>
          <img className={styles.coverImageLeft} src={sushileftImg} alt="" />
        </div>

        <div className={styles.contentCoverInfo}>
          <h1 className={styles.coverTitle}>Discover the magic of sushi</h1>
          <p className={styles.coverDescription}>
            Welcome to the culinary oasis of Magic Sushi Lora - an interactive
            space for culinary enthusiasts to share, discover, and savor
            delightful sushi recipes.
          </p>
          <Link className={styles.coverButton}>Get Started</Link>
        </div>

        <div className={styles.contentCoverImage}>
          <img className={styles.coverImageRight} src={sushirightImg} alt="" />
        </div>

        <div className={styles.contentCoverImageMobileRight}>
          <img className={styles.coverImageMobile} src={rightImg} alt="" />
          <img
            className={styles.additionalImageMobileRight}
            src={rightMobile}
            alt=""
          />
        </div>

      </section>
    </div>
  );
};
