import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MoreInformation.module.css";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { Gmail } from "./gmail/Gmail";

export const MoreInformation = () => {
  return (
    <>
      <div className={styles.informationAboutUs}>
        <h4 className={styles.informationAboutUsTitle}>Address</h4>
        <ul className={styles.contentAddressList} role="list">
          <li className={styles.addressListElement}>
            <p>
              Corporate Office : Doon House, B-275(A), First floor Sector-57,
              Shushant Lok 3 Near Hong Kong Bazzar, Gurugram Pin 122001,
              Haryana.
            </p>
            <p>
              <FontAwesomeIcon
                className={styles.faPhoneFlip}
                icon={faPhoneFlip}
              />
              Phone:{" "}
              <span className={styles.spanPhoneNumber}>+359123456789</span>
            </p>
          </li>
          <li className={styles.addressListElement}>
            <p>
              Reg. Office : Doon House, D2/3, 4th Floor, Chandra Tower, IDBI
              Bank Building Dimna Road, Mango, Jamshedpur-831012, Jharkhand.
            </p>
            <p>
              <FontAwesomeIcon
                className={styles.faPhoneFlip}
                icon={faPhoneFlip}
              />
              Phone:{" "}
              <span className={styles.spanPhoneNumber}>+359123456789</span>
            </p>
          </li>
        </ul>
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

        <ul role="list" className={styles.magnificImages}>
          <li>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
          </li>

          <li>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
          </li>

          <li>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
            <Link className={styles.magnificAnchor}>
              <img
                src="https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=414&q=80"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
