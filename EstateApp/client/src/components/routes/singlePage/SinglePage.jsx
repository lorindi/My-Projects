import Slider from "../../slider/Slider";
import "./SinglePage.scss";
import Map from "../../map/Map";
import { useLoaderData } from "react-router-dom";
function SinglePage() {
  const post = useLoaderData();
  console.log(post);

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.ownerId.avatar} alt="" />
                <span>{post.ownerId.name}</span>
              </div>
            </div>
            <div className="bottom">{post.postDetail.desc}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Renter is responsible</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pet Allowed</p>
                ) : (
                  <p>Pet not Allowed</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                {post.postDetail.income}
              </div>
            </div>
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              {post.postDetail.size} sqft

            </div>
            <div className="size">
              <img src="/bedroom.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bathroom.png" alt="" />
              <span>{post.bathroom} baths</span>
            </div>
          </div>

          <p className="title">Nearly Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/stop.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>

          <div className="mapContainer">
            <Map items={[post]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

