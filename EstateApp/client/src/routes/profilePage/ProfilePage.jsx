import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./Profile.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { Suspense, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/loading/Loading";

function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const data = useLoaderData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const startChatWith = searchParams.get("startChatWith");
  

  useEffect(() => {
    if (!currentUser) {
      navigate("/sign-in");
    } else if (startChatWith) {
      checkOrCreateChat(startChatWith);
    }
  }, [currentUser, startChatWith]);

  const checkOrCreateChat = async (receiverId) => {
    try {
      // First, get the list of existing chats
      const res = await apiRequest.get("/chats");
      const existingChats = res.data;

      // Check if a chat with the specified receiverId already exists
      const existingChat = existingChats.find(chat =>
        chat.participants.includes(receiverId)
      );

      if (existingChat) {
        // If chat exists, navigate to it (optional)
        navigate(`/profile?chat=${existingChat._id}`);
      } else {
        // Otherwise, create a new chat
        const newChatRes = await apiRequest.post("/chats", { receiverId });
        navigate(`/profile?chat=${newChatRes.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };


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
    currentUser && (
      <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <Link to="/profile-update">
                <button>Update Profile</button>
              </Link>
            </div>
            <div className="info">
              <span>
                Avatar:
                <img src={currentUser?.avatar || "/noavatar.png"} alt="" />
              </span>
              <span>
                Name: <b>{currentUser?.name}</b>
              </span>
              <span>
                E-mail: <b>{currentUser?.email}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="title">
              <h1>My List</h1>
              <Link to="/add">Create New Post</Link>
            </div>

            <Suspense fallback={<Loading/>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) => <List posts={postResponse.data.userPosts} />}
              </Await>
            </Suspense>

            <div className="title">
              <h1>Saved List</h1>
            </div>
            <Suspense fallback={<Loading/>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) => (
                  <List posts={postResponse.data.savedPosts} />
                )}
              </Await>
            </Suspense>
          </div>
        </div>
        <div className="chatContainer">
          <div className="wrapper">
            <Suspense fallback={<Loading/>}>
              <Await
                resolve={data.chatResponse}
                errorElement={<p>Error loading chats!</p>}
              >
                {(chatResponse) => <Chat chats={chatResponse.data}/>}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
    )
  );
}

export default ProfilePage;
