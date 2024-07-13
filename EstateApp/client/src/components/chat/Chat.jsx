import "./Chat.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
function Chat() {
  const [close, setClose] = useState(true);

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
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/92224899?v=4"
            alt=""
          />
          <span>Lo Mitova</span>
          <p>Lorem ipsum dolor sit, amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/92224899?v=4"
            alt=""
          />
          <span>Lo Mitova</span>
          <p>Lorem ipsum dolor sit, amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/92224899?v=4"
            alt=""
          />
          <span>Lo Mitova</span>
          <p>Lorem ipsum dolor sit, amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/92224899?v=4"
            alt=""
          />
          <span>Lo Mitova</span>
          <p>Lorem ipsum dolor sit, amet...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/92224899?v=4"
            alt=""
          />
          <span>Lo Mitova</span>
          <p>Lorem ipsum dolor sit, amet...</p>
        </div>
      </div>
      {close && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://avatars.githubusercontent.com/u/92224899?v=4"
                alt=""
              />
              Lo Mitova
            </div>
            <CloseIcon onClick={() => setClose(null)} />
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur...?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur...?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur...?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur...?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet consectetur...?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur...?</p>
              <span>1 hour ago</span>
            </div>
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
