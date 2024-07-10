import { Marker, Popup } from "react-leaflet";

import "./Pin.scss";
import { Link } from "react-router-dom";
function Pin({ item }) {
  return (
    <div className="pin">
      <Marker position={[item.latitude, item.longitude]}>
        <Popup>
          <div className="popupContainer">
            <img src={item.img} alt="" />
            <div className="textContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span className="bed">{item.bedroom} bedroom</span>
              <b>$ {item.price}</b>
            </div>
          </div>
        </Popup>
      </Marker>
    </div>
  );
}

export default Pin;
