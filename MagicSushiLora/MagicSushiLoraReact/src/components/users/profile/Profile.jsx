import { useState, useEffect, useContext } from "react";
import { Contexts } from "../../../contexts/Contexts";

import { useParams } from "react-router-dom";
export const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const { axiosInstance, initialToken } = useContext(Contexts);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Sending request with token:", initialToken);
        const response = await axiosInstance.get(`auth/details/${id}/`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, [axiosInstance, id, initialToken]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Description: {user.description}</p>
      {/* Add more fields as needed */}
    </div>
  );
};
