import Chat from "../../chat/Chat";
import List from "../../list/List";
import "./ProfilePage.scss";
import apiRequest from "../../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // currentUser && (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
           <Link to="/profile/update">
           <button>Update Profile</button>
           </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser?._doc?.avatar || "/noavatar.png"} alt="" />
            </span>
            <span>
              Name: <b>{currentUser?._doc?.name}</b>
            </span>
            <span>
              E-mail: <b>{currentUser?._doc?.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
    // )
  );
}

export default ProfilePage;
