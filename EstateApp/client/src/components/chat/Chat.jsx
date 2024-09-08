import "./Chat.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";

function Chat({ chats }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const messageEndRef = useRef();

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      setChat({ ...res.data, receiver });
      console.log(chat);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    console.log(text);

    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat._id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver._id,
        data: res.data,
      });
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

  // const testSocket = () => {
  //   socket.emit("test", "hi from client")
  // }

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read/" + chat._id);
      } catch (err) {
        console.log(err);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat._id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      });
    }
    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);


  return (
    <div className="chat">
      {/* <button onClick={testSocket}>Test me</button> */}
      <div className="messages">
        <h1>Messages</h1>
        {chats.map((c) => (
          <div
            className="message"
            key={c._id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?._id === c._id
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
            <CloseIcon/>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatMessage"
                key={message._id}
                style={{
                  alignSelf:
                    message.ownerId === currentUser._id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.ownerId === currentUser._id ? "right" : "left",
                }}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text" id=""></textarea>
            <button>
              <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default Chat;
