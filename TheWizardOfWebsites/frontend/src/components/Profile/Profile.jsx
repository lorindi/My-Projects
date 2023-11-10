import styles from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Info } from "./ProfileInfo/Info";
import {EditForm} from "./ProfileEditForm/EditForm"
export const Profile = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false)
  return (
    <div className={styles.mainUsersContent}>
      <section className={styles.containerUserDetails}>
        <div className={styles.userDetailsContentHeader}>
          <img
            className={styles.userDetailsCoverPhoto}
            src="../../../src/components/Profile/pngwing.com.png"
          />
          <div className={styles.userDetailsBasicInformation}>
            <img
              className={styles.userDetailsProfilePicture}
              src="../../../src/components/Profile/pngwing.com (8).png"
            />
            <h2 className={styles.userDetailsFullname}>Lora</h2>
            <p className={styles.userDetailsUsername}>lorindi</p>
          </div>
        </div>
        <div className={styles.userDetailsContentNavigation}>
          <div className={styles.userDetailsNavigation}>
            <div className={` ${styles.userDetailsLinks} ${styles.listLinks}`}>
              <NavLink
                to="/profile/info"
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "lightgreen",
                })}
                onClick={() => {setShowInfo(true); setShowEditForm(false);}}
              >
                Information
              </NavLink>
              {/* <NavLink
                to="/saved-site"
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "lightgreen",
                })}
              >
                Saved Site
              </NavLink> */}
            </div>
            <div
              className={`${styles.userDetailsSettings} ${styles.listLinks}`}
            >
              <NavLink 
              to="/profile/edit" 
              className={styles.userEdit} 
              style={({ isActive }) => ({color: isActive ? "lightblue" : "lightgreen"})}
              onClick={() => {setShowEditForm(true); setShowInfo(false);}}
              
              >
                Edit Profile
              </NavLink>
       
            </div>
          </div>
        </div>
        {showInfo && <Info />}
        {showEditForm && <EditForm/>}
      </section>
    </div>
  );
};
