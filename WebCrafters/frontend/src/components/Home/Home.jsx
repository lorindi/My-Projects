import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import * as siteService from "../../services/applicationService";
import { useEffect, useRef, useState } from "react";
import { LatestSites } from "./LatestSites/LatestSites";
import { useContext } from "react";
import { Contexts } from "../../contexts/Contexts";
import { Weather } from "./Weather/Weather";
import { Gmail } from "./Gmail/Gmail";
import infoImg from "./pngwing.com (1).png";
import teamImg from "./pngwing.com (2).png";
import latestImg from "./pngwing.com (3).png";
// eslint-disable-next-line react/prop-types, no-unused-vars
export const Home = ({ _id, accessToken, email }) => {
  const [latestSites, setLatestSites] = useState([]);
  const { isAuthenticated } = useContext(Contexts);

  const start = useRef(null);
  const info = useRef(null);
  const team = useRef(null);
  const contacts = useRef(null);

  useEffect(() => {
    siteService.getLatest().then((result) => setLatestSites(result));
  }, []);
  return (
    <>
      <article className={styles.homePageLinks}>
        {isAuthenticated && (
          <NavLink
            className={styles.homePageLink}
            onClick={() => start.current.scrollIntoView({ behavior: "smooth" })}
          >
            Start
          </NavLink>
        )}
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

      {isAuthenticated && (
        <section ref={start} className={styles.containerLatestSites}>
          <div className={styles.sitesInfo}>
            <h1 className={`${styles.createSiteTitle} ${styles.dark}`}>
              Create Your Unique Website!
            </h1>

            <p
              className={`${styles.createSiteDescriptionFirst} ${styles.dark}`}
            >
              Share with us your vision and ideas, and we will turn them into
              reality!
            </p>
            <p
              className={`${styles.createSiteDescriptionSecond} ${styles.dark}`}
            >
              Start your web journey today!
            </p>
            <NavLink className={styles.linkLatestSites} to="/sites/create">
              Get Started Now
            </NavLink>
          </div>
          {latestSites.length >= 3 ? (
            <div className={styles.latestSites}>
              <div className={styles.currentLatestSites}>
                {latestSites.map((site) => (
                  <LatestSites key={site._id} {...site} />
                ))}

                {/* {!latestSites.length && (
            <p className={styles.noArticles}>No sites yet</p>
          )} */}
              </div>
            </div>
          ) : (
            <img className={styles.elseImgLatestSites} src={latestImg} alt="" />
          )}
        </section>
      )}

      <section
        ref={info}
        className={`${styles.containerInformationSection} ${styles.dark}`}
      >
        <div className={`${styles.contentInformationSection} ${styles.dark}`}>
          <img className={styles.informationImg} src={infoImg} alt="" />
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
              expectations.
            </p>
          </div>
        </div>
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
        <img src={teamImg} alt="" />
      </section>

      <section
        ref={contacts}
        className={`${styles.contactsInfo} ${styles.dark}`}
      >
        <div>
          <Weather />
        </div>

        <Gmail />
      </section>
    </>
  );
};
