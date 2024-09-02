import "./Chat.scss";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
function Chat({ chats }) {
  const [chat, setChats] = useState(null);
  const { currentUser } = useContext(AuthContext);
  console.log(chats);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      setChats({ ...res.data, receiver });
    } catch (err) {
      console.log(err);
    }
  };

  const CloseIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      onClick={onClick}
    >
      <path
        d="M6 6L18 18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 18L18 6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats.map((c) => (
          <div
            className="message"
            key={c._id}
            style={{
              backgroundColor: c.seenBy.includes(currentUser.id)
                ? "white"
                : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c._id, c.receiver)}
          >
            <img src={c.receiver.avatar || "/noavatar.png"} alt="" />
            <span>{c.receiver.name}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "/noavatar.png"} alt="" />
              {chat.receiver.name}
            </div>
            <CloseIcon onClick={() => setClose(null)} />
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatMessage"
                key={message.id}
                style={{
                  alignSelf:
                    message.ownerId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.ownerId === currentUser.id ? "right" : "left",
                }}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>
              <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Chat;
