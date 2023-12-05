/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { pathToUrl } from "../../../utils/pathUtils";
import  Path  from "../../paths";
import styles from './LatestSites.module.css'
export const LatestSites = ({
    _id,
    image,
    title,
}) => {
  return (
    <div className={styles.containerLatestSites}>
      <div className={styles.currentLatestSite}>
        <img src={image} alt="" />
        <div>
          <h4>{title}</h4>
 
        </div>
        <NavLink className={styles.link} to={pathToUrl(Path.SiteDetails, {id: _id})}>
          Details
        </NavLink>
      </div>
    </div>
  );
};
