import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import * as siteService from "../../services/applicationService";
import { useEffect, useRef, useState } from "react";
import { LatestSites } from "./LatestSites/LatestSites";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";

export const Home = ({ _id, accessToken, email }) => {
  const [latestSites, setLatestSites] = useState([]);
  const { isAuthenticated } = useContext(Contexts);

  const info = useRef(null);
  const team = useRef(null);
  const contacts = useRef(null);

  useEffect(() => {
    siteService.getLatest().then((result) => setLatestSites(result));
  }, []);
  return (
    <>
      <article className={styles.homePageLinks}>
        <NavLink
          className={styles.homePageLink}
          onClick={() => info.current.scrollIntoView({ behavior: "smooth" })}
        >
          Info
        </NavLink>

        <NavLink
          className={styles.homePageLink}
          onClick={() => team.current.scrollIntoView({ behavior: "smooth" })}
        >
          Team
        </NavLink>
        <NavLink
          className={styles.homePageLink}
          onClick={() =>
            contacts.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contacts
        </NavLink>
      </article>
      <section ref={info} className={`${styles.containerInformationSection} ${styles.dark}`}>
        <div
          className={`${styles.contentInformationSection} ${styles.dark}`}
        >
          <img
            className={styles.informationImg}
            src="../../../src/components/Home/pngwing.com (1).png"
            alt=""
          />
          <div className={styles.contentInfo}>
            <h1 className={`${styles.infoTitle} ${styles.dark}`}>
              Welcome to Web Crafters!
            </h1>
            <p className={`${styles.infoDescription} ${styles.dark}`}>
              Our team is a collective of passionate and creative professionals
              united by a common goal - to create the most modern and functional
              websites using the best technologies. Our mission is to provide
              you with web spaces that not only look impressive but also work
              seamlessly. With significant experience in web design and
              development, we blend elegant design with the latest innovations
              in web technologies to deliver websites that exceed our clients
              expectations. With us, you ll find a partnership that helps you
              rise above the competition and achieve success in the online
              world.
            </p>
          </div>
        </div>
        {latestSites.length > 0 && isAuthenticated &&(
          <div className={styles.latestSites}>
            <h1>Sites</h1>
            <div className={styles.currentLatestSites}>
              {latestSites.map((site) => (
                <LatestSites key={site._id} {...site} />
              ))}

              {/* {!latestSites.length && (
            <p className={styles.noArticles}>No sites yet</p>
          )} */}
            </div>
          </div>
        )}
      </section>
      <section ref={team} className={`${styles.teamSection} ${styles.dark}`}>
        <div className={styles.contentTeam}>
          <h1 className={`${styles.teamTitle} ${styles.dark}`}>
            Meet Our Team
          </h1>
          <p className={styles.teamDescription}>
            Learn more about the talented individuals behind our projects.
          </p>
          <Link className={`${styles.teamLink} ${styles.dark}`} to="/about-us">
            Meet the Team
          </Link>
        </div>
        <img src="../../../src/components/Home/pngwing.com (2).png" alt="" />
      </section>

      <section
        ref={contacts}
        className={`${styles.contactsInfo} ${styles.dark}`}
      >
        <img
          className={styles.contactsImg}
          src="../../../src/components/Home/pngwing.com (3).png"
          alt=""
        />
        <div className={`${styles.contentContacts} ${styles.dark}`}>
          <ul role="list" className={styles.contactsList}>
            <li className={styles.contact}>
              <NavLink
                to=""
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "lightgreen",
                })}
              >
                <img src="../../../src/components/Home/Gmail.png" alt="" />
                <p>***@gmail.com</p>
              </NavLink>
            </li>
            <li className={styles.contact}>
              <NavLink
                to=""
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "lightgreen",
                })}
              >
                <img src="../../../src/components/Home/Instagram.png" alt="" />
                <p>Team</p>
              </NavLink>
            </li>
            <li className={styles.contact}>
              <NavLink
                to=""
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "lightgreen",
                })}
              >
                <img src="../../../src/components/Home/Facebook.png" alt="" />
                <p>Team</p>
              </NavLink>
            </li>
            <li className={styles.contact}>
              <NavLink
                to=""
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "lightgreen",
                })}
              >
                <img src="../../../src/components/Home/WhatsApp.png" alt="" />
                <p>0812345678</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
