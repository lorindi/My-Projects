import { useEffect, useState, useContext } from "react";
import { Contexts } from "../../../contexts/Contexts";
import styles from "./Profile.module.css";
import { EditUser } from "../edit/EditUser";
export const Profile = () => {
  const { axiosInstance, isAuthenticated, userId } = useContext(Contexts);
  const [userData, setUserData] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  // const [cancelEditForm, setCancelEditForm] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`auth/details/${userId}/`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [axiosInstance, isAuthenticated, userId]);

  return (
    <div className={styles.containerProfileDetails}>
      {isAuthenticated ? (
        <div className={styles.contentProfileDetails}>
          {userData ? (
            <>
              <div className={styles.contentDetailsProfilePicture}>
                <img
                  className={styles.profilePicture}
                  src={userData.profile_picture}
                  alt=""
                />
              </div>
              {!showEditForm && (
              <div className={styles.contentProfileDetailsInformation}>
                <h1 className={styles.profileDetailFullName}>
                  {userData.first_name} {userData.last_name}
                </h1>
                <p className={styles.profileDetailUsername}>
                  {userData.username}
                </p>
                <p className={styles.profileDetailEmail}>{userData.email}
                </p>
                <button 
                className={styles.editProfileButton}
                onClick={() => setShowEditForm(!showEditForm)}
                >Edit Profile</button>
              </div>)}
              {showEditForm && (
              <div className={styles.containerProfileEditUserForm}>
                <EditUser />
                <button 
                className={styles.cancelUserFormButton} 
                onClick={() => setShowEditForm(!showEditForm)}

                // onClick={() => setCancelEditForm(!cancelEditForm)}
                >
                  Cancel
                </button>
              </div>)}
            </>
          ) : (
            <div className={styles.contentLoadingDetails}>
              <p className={styles.loadingDetails}>Loading user data...</p>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.contentProfileDetailsLogin}>
          <p className={styles.profileDetailsLogin}>
            Please log in to view your profile.
          </p>
        </div>
      )}
      <div className={styles.moreInformation}>
        <p className={styles.moreInformationDescription}>Description</p>
      </div>
    </div>
  );
};
