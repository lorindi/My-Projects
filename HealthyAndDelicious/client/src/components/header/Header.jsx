import "./Header.scss";
import Web from "./web/Web";
import Mobile from "./mobile/Mobile";
function Header() {
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
