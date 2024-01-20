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
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.contentFooterNavigation}>
        <h3 className={styles.footerNavigationTitle}>Magic Sushi Lora</h3>
        <div className={styles.contentFooterLinks}>
          <Link className={styles.contentFooterLink} to="">About us</Link>
          <Link className={styles.contentFooterLink} to="">Recipes</Link>
          <Link className={styles.contentFooterLink} to="">Menu</Link>
          <Link className={styles.contentFooterLink} to="">Contacts </Link>
          <Link className={styles.contentFooterLink} to="">Profile</Link>
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
      <section className={styles.contentRightsReserved}>
        <p className={styles.rightsReservedText}>
          © Copyright 2024
          <span className={styles.rightsReservedTextSpan}>
            Magic Sushi Lora
          </span>
          All rights reserved.
        </p>
      </section>
    </footer>
  );
};
