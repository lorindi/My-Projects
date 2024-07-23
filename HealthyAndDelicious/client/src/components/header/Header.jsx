import "./Header.scss";
import Web from "./web/Web";
import Tablet from "./tablet/Tablet";
import Mobile from "./mobile/Mobile";
function Header() {
  return (
    <header className="header">
      {/* <div className="web">
        <Web />
      </div>
      <div className="tablet">
        <Tablet />
      </div> */}
      <div className="mobile">
        <Mobile />
      </div>
    </header>
  );
}

export default Header;
