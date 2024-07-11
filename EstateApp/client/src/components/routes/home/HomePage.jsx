import SearchBar from "../../searchBar/SearchBar";
import "./HomePage.scss";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real & Estate Get Your Dream Place</h1>
          <p className="description">
            Discover your dream home with Find Real & Estate! Our premier real
            estate platform connects you to the finest properties, tailored to
            your needs. Browse listings, explore neighborhoods, and find expert
            advice. Your perfect home is just a click away!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
