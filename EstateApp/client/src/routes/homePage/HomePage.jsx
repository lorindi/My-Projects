// import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./HomePage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiRequest from "../../lib/apiRequest";
import { useEffect, useState } from "react";
import TypeCard from "../../components/cards/TypeCard";
function HomePage() {
  const [posts, setPosts] = useState([]);
  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [limit, setLimit] = useState(3); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiRequest.get("/posts/filtered", {
          params: {
            city,
            maxPrice,
            minPrice,
            limit,
          },
        });
        console.log(response);
        
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [city, maxPrice, minPrice, limit]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="homePage">
      <div className="homePageHeading">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real & Estate Get Your Dream Place</h1>
            <p className="description">
              Discover your dream home with Find Real & Estate! Our premier real
              estate platform connects you to the finest properties, tailored to
              your needs. Browse listings, explore neighborhoods, and find
              expert advice. Your perfect home is just a click away!
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>18+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>300</h1>
                <h2>Awards Won</h2>
              </div>
              <div className="box">
                <h1>3000</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carouselSection">
        <h2 className="carouselTitle">Explore Our Properties</h2>
        <Slider {...settings}>
          {posts.length > 0 ? (
            posts.map((post) => <TypeCard key={post._id} post={post} className="sphere" />)
          ) : (
            <p>No posts found with the specified criteria.</p>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default HomePage;
