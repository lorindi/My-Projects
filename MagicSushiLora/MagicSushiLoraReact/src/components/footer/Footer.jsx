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
import { Gmail } from "./Gmail/Gmail";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.sectionInformationAboutUs}>
        <div className={styles.informationAboutUs}>
          <h4 className={styles.informationAboutUsTitle}>Address</h4>
        </div>
        <div className={styles.informationAboutUs}>
          <h4 className={styles.informationAboutUsTitle}>Work Time</h4>
          <ul role="list" className={styles.workTimeList}>
            <li className={styles.workTimeListElement}>
              <h5 className={styles.dayOfTheWeek}>Mon</h5>
              <p className={styles.workTime}>10:00 - 17:00</p>
            </li>
            <li className={styles.workTimeListElement}>
              <h5 className={styles.dayOfTheWeek}>Tue..</h5>
              <p className={styles.workTime}>10:00 - 17:00</p>
            </li>
            <li className={styles.workTimeListElement}>
              <h5 className={styles.dayOfTheWeek}>Wed</h5>
              <p className={styles.workTime}>10:00 - 17:00</p>
            </li>
            <li className={styles.workTimeListElement}>
              <h5 className={styles.dayOfTheWeek}>Thu.</h5>
              <p className={styles.workTime}>10:00 - 17:00</p>
            </li>
            <li className={styles.workTimeListElement}>
              <h5 className={styles.dayOfTheWeek}>Fri...</h5>
              <p className={styles.workTime}>10:00 - 17:00</p>
            </li>
            <li className={styles.workTimeListElement}>
              <h5 className={styles.dayOfTheWeek}>Sat..</h5>
              <p className={styles.workTime}>10:00 - 17:00</p>
            </li>
            <li className={styles.workTimeListElement}>
              <h5 className={styles.dayOfTheWeek}>Sun.</h5>
              <p className={styles.workTime}>10:00 - 17:00</p>
            </li>
          </ul>
        </div>
        <div className={styles.informationAboutUs}>
          <h4 className={styles.informationAboutUsTitle}>Email Us</h4>
          <Gmail />
        </div>
        <div className={styles.informationAboutUs}>
          <h4 className={styles.informationAboutUsTitle}>Our Gallery</h4>
        </div>
      </section>
      <section className={styles.contentFooterNavigation}>
        <h3 className={styles.footerNavigationTitle}>Magic Sushi Lora</h3>
        <div className={styles.contentFooterLinks}>
          <Link className={styles.contentFooterLink} to="">
            About us
          </Link>
          <Link className={styles.contentFooterLink} to="">
            Recipes
          </Link>
          <Link className={styles.contentFooterLink} to="">
            Menu
          </Link>
          <Link className={styles.contentFooterLink} to="">
            Contacts
          </Link>
          <Link className={styles.contentFooterLink} to="">
            Profile
          </Link>
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
