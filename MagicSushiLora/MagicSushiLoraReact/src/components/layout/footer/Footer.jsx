import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";
import { MoreInformation } from "./moreInformation/MoreInformation";
import { useState } from "react";
import { ToggleDarkMode } from "./Toggle/ToggleDarckMode";
import { useContext } from "react";
import { Contexts } from "../../../contexts/Contexts";

export const Footer = () => {
  const [showMoreInformation, setShowMoreInformation] = useState(false);
  const { theme } = useContext(Contexts);
  return (
    <footer className={styles.footer} data-theme={theme}>
    <ToggleDarkMode className/>
      {showMoreInformation && (
        <section className={styles.sectionInformationAboutUs}>
          <MoreInformation />
        </section>
      )}
      <section className={styles.sectionFooterNavigation}>
        <h3 className={styles.footerNavigationTitle}>Magic Sushi Lora</h3>
        <div className={styles.contentFooterLinks}>
          <button
            onClick={() => setShowMoreInformation(!showMoreInformation)}
            className={styles.footerButton}
         
          >
            More Information
          </button>
        </div>
        <div className={styles.contentFooterIcons}>
          <Link className={styles.footerIcon} to="">
            <FontAwesomeIcon className={styles.footerIcon} icon={faFacebookF} />
          </Link>
          <Link className={styles.footerIcon} to="">
            <FontAwesomeIcon className={styles.footerIcon} icon={faInstagram} />
          </Link>
          <Link className={styles.footerIcon} to="">
            <FontAwesomeIcon className={styles.footerIcon} icon={faTiktok} />
          </Link>
          <Link className={styles.footerIcon} to="">
            <FontAwesomeIcon className={styles.footerIcon} icon={faWhatsapp} />
          </Link>
          <Link className={styles.footerIcon} to="">
            <FontAwesomeIcon className={styles.footerIcon} icon={faEnvelope} />
          </Link>
        </div>
      </section>
      <section className={styles.sectionRightsReserved}>
        <p className={styles.rightsReservedText}>© Copyright 2024</p>
        <p className={styles.rightsReservedTextSpan}>Lora Mitova</p>
        <p className={styles.rightsReservedText}>All rights reserved.</p>
      </section>
    </footer>
  );
};
