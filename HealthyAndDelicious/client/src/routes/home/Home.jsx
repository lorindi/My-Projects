import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="cover">
      <div className="cover-title">
        <p className="cover-title-text">All new recipes,</p>
        <p className="cover-title-text">you can find </p>
        <p className="cover-title-text">
          only <span>here</span>!
        </p>
        <Link className="about-recipe-link" to="/dashboard">
          Recipes
        </Link>
      </div>
    </div>
  );
}

export default Home;
