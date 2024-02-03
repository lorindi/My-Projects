import { useEffect, useState, useContext } from "react";
import { Contexts } from "../../../contexts/Contexts";

export const Profile = () => {
  const { axiosInstance, isAuthenticated, userId } = useContext(Contexts);
  const [userData, setUserData] = useState(null);

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
    <div>
      {isAuthenticated ? (
        <div>
          <h2>User Profile</h2>
          {userData ? (
            <div>
              <p>Username: {userData.username}</p>
              <p>Email: {userData.email}</p>
              <p>First Name: {userData.first_name}</p>
              <p>Last Name: {userData.last_name}</p>
              <img src={userData.profile_picture} alt="" />
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};
