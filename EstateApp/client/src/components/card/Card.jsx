import { Link, useNavigate } from "react-router-dom";
import "./Card.scss";
import {useContext} from "react";
import { AuthContext } from "../../context/AuthContext";

function Card({ item }) {
  const { updateUser, currentUser } = useContext(AuthContext);
  const imageUrl = item?.images?.length > 0 ? item.images[0] : "/logo.png";
  const navigate = useNavigate();

  const handleMessageClick = () => {
    if (!currentUser) {
      return navigate("/sign-in");
    }
    navigate(`/profile?startChatWith=${item?.ownerId}`);
  };
  return (
    <div className="card">
      <Link to={`/${item._id}`} className="imageContainer">
        <img src={imageUrl} alt={item.title || "Post image"} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item._id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bedroom.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bathroom.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon" onClick={handleMessageClick}>
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
