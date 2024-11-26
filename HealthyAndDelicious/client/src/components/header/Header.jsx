import "./Header.scss";
import Web from "./web/Web";
import Mobile from "./mobile/Mobile";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const location = useLocation()
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);

  if (location.pathname === '/admin'){
    return null
  }

  return (
    <header className="header">
      <div className="web">
        <Web isAuthenticated={isAuthenticated}/>
      </div>
 
      <div className="mobile">
        <Mobile isAuthenticated={isAuthenticated}/>
      </div>
    </header>
  );
}

export default Header;
