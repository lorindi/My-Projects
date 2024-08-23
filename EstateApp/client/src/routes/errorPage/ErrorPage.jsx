import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";

function ErrorPage({ error }) {
  const navigate = useNavigate();

  return (
    <div className="errorPage">
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
}

export default ErrorPage;
