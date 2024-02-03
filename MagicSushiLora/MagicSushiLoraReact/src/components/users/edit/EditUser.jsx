import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const EditUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    description: '',
    profile_picture: '',
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/auth/${id}/update/`)
      .then(response => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request with the updated user data
    axios.post(`http://127.0.0.1:8000/api/auth/${id}/update/`, userData)
      .then(response => {
        console.log('User data updated successfully:', response.data);
        // Optionally, you can redirect the user or perform other actions upon successful update
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };

  return (
    <div>
      <h1>Edit your profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            placeholder="Username"
            type="text"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="email"
            placeholder="Email"
            type="text"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="first_name"
            placeholder="First name"
            type="text"
            value={userData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="last_name"
            placeholder="Last name"
            type="text"
            value={userData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="description"
            placeholder="Description"
            type="text"
            value={userData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="profile_picture"
            placeholder="Profile picture"
            type='text'
            value={userData.profile_picture}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
};