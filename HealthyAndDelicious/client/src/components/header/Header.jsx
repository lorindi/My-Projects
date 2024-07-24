import "./Header.scss";
import Web from "./web/Web";
import Mobile from "./mobile/Mobile";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation()
  if (location.pathname === '/admin'){
    return null
  }
  return (
    <header className="header">
      <div className="web">
        <Web />
      </div>
 
      <div className="mobile">
        <Mobile />
      </div>
    </header>
  );
}

export default Header;
