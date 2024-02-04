import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Contexts } from "../../../contexts/Contexts";
import styles from "./EditUser.module.css";
export const EditUser = () => {
  const { axiosInstance } = useContext(Contexts);
  const { id } = useParams();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    description: "",
    profile_picture: "",
  });

  useEffect(() => {
    axiosInstance
      .get(`http://127.0.0.1:8000/api/auth/${id}/update/`)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request with the updated user data
    axiosInstance
      .post(`http://127.0.0.1:8000/api/auth/${id}/update/`, userData)
      .then((response) => {
        console.log("User data updated successfully:", response.data);
        // Optionally, you can redirect the user or perform other actions upon successful update
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  return (
    <form className={styles.containerEditUserForm} onSubmit={handleSubmit}>
      <input
        className={styles.editUserFormInput}
        name="username"
        placeholder="Username"
        type="text"
        value={userData.username}
        onChange={handleChange}
      />

      <input
        className={styles.editUserFormInput}
        name="email"
        placeholder="Email"
        type="text"
        value={userData.email}
        onChange={handleChange}
      />

      <input
        className={styles.editUserFormInput}
        name="first_name"
        placeholder="First name"
        type="text"
        value={userData.first_name}
        onChange={handleChange}
      />

      <input
        className={styles.editUserFormInput}
        name="last_name"
        placeholder="Last name"
        type="text"
        value={userData.last_name}
        onChange={handleChange}
      />

      <input
        className={styles.editUserFormInput}
        name="description"
        placeholder="Description"
        type="text"
        value={userData.description}
        onChange={handleChange}
      />

      <input
        className={styles.editUserFormInput}
        name="profile_picture"
        placeholder="Profile picture"
        type="text"
        value={userData.profile_picture}
        onChange={handleChange}
      />

      <div className={styles.contentEditUserFormButton}>
        <button className={styles.editUserFormButton} type="submit">
          Save
        </button>
       
      </div>
    </form>
  );
};
