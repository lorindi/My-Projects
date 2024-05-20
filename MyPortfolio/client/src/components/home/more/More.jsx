import loraImg from "./1712476045876.png";
import styles from "./More.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export const More = () => {
  return (
    <div className={styles.moreContainer}>
      <div className={styles.moreInfoContent}>
        <h1 className={styles.moreInfoTitle}>Hello, I`m Lora Mitova</h1>
        <h4 className={styles.moreInfoDev}>Web Developer</h4>
        <p className={styles.moreInfoDescription}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className={styles.buttonsContent}>
          <button className={styles.button}>Hire Me</button>
          <button className={styles.button}>
            Resume <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
        <div>
          <Link>
            <FontAwesomeIcon icon={faGithub} className={styles.faGithub} />
          </Link>
          <Link>
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.faInstagram}
            />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faLinkedin} className={styles.faLinkedin} />
          </Link>

          <Link>
            <FontAwesomeIcon icon={faDiscord} className={styles.faDiscord} />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faFacebook} className={styles.faFacebook} />
          </Link>
        </div>
      </div>
      <div className={styles.moreImgContent}>
        <img className={styles.moreImg} src={loraImg} alt="Lora" />
      </div>
    </div>
  );
};
