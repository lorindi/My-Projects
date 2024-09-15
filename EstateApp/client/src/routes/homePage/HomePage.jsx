import SearchBar from "../../components/searchBar/SearchBar";
import "./HomePage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiRequest from "../../lib/apiRequest";
import { useEffect, useState } from "react";
import TypeCard from "../../components/cards/TypeCard";
import { Link } from "react-router-dom";
import SeeMoreSvgHomePage from "../../components/Svg/SeeMoreSvgHomePage";
import Loading from "../../components/loading/Loading";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  const cities = [
    "Sofia",
    "Plovdiv",
    "Varna",
    "Burgas",
    "Ruse",
    "Shumen",
    "Veliko Tarnovo",
  ];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = [];

        for (const town of cities) {
          const response = await apiRequest.get("/posts/filtered", {
            params: {
              city: town,
              limit: 1,
            },
          });

          if (response.data && response.data.length > 0) {
            allPosts.push(response.data[0]);
          }
        }

        setPosts(allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  const handleCardClick = (city) => {
    navigate(`/list?city=${city}`);
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
        <div className="carouselHeading">
          <h2>Explore Our Properties</h2>
          <Link to="/list">
            <span>See More</span> <SeeMoreSvgHomePage className="seeMore" />
          </Link>
        </div>
        <div className="cityCarousel">
          {loading ? (
            <Loading />
          ) : (
            posts.length > 0 && (
              <Slider {...settings}>
                {posts.map((post) => (
                  <TypeCard
                    key={post._id}
                    post={post}
                    className="sphere"
                    onClick={() => handleCardClick(post.city)}
                  />
                ))}
              </Slider>
            )
          )}
        </div>
      </div>

      <section className="summary">
        <h2 className="summaryTitle">Lorem ipsum odor amet</h2>
        <div className="summaryText">
          Cursus ante mauris suspendisse laoreet placerat porta amet blandit.
          Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis
          nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis
          mollis porttitor. Cursus ante mauris suspendisse laoreet placerat
          porta amet blandit. Venenatis habitasse ligula imperdiet ac sed
          facilisi. Sodales eget dis nibh natoque dictum ante cursus varius.
          Penatibus lacinia etiam mattis mollis porttitor.
        </div>
      </section>
    </div>
  );
}

export default HomePage;
