/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { pathToUrl } from "../../../utils/pathUtils";
import Path from "../../paths";
import styles from "./LatestSites.module.css";
export const LatestSites = ({ _id, image, title }) => {
  return (
    <NavLink
      className={styles.containerLatestSites}
      to={pathToUrl(Path.SiteDetails, { id: _id })}
    >
      <div className={styles.cardLatestSite}>
        <img className={styles.latestSiteImg} src={image} alt="image" />

        <h4 className={styles.latestSiteTitle}>{title.length > 11 ? `${title.slice(0, 11)}..` : title}</h4>
      </div>
    </NavLink>
  );
};
