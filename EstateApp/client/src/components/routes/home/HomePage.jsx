import SearchBar from "../../searchBar/SearchBar";
import "./HomePage.scss";
function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real & Estate Get Your Dream Place</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ea
            quasi odit, suscipit fuga modi doloremque fugiat amet quod
            blanditiis sapiente voluptas, excepturi pariatur beatae expedita
            vel, vero placeat aspernatur.
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
