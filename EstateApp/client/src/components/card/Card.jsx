import { Link } from "react-router-dom";
import "./Card.scss";
function Card({ item }) {
  const imageUrl = item?.images?.length > 0 ? item.images[0] : "/logo.png";
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
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
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
