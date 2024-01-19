import { Link } from "react-router-dom";
import styles from "./Header.module.css"
export const Header = () => {
    return (
        <header className="header">
            <Link to="" className="sushiLogo">Logo</Link>

            {/* <nav className="navigation">
                <ul role="list" className="navBar">
             
                    <li className="link"><Link to="">Sign in</Link></li>
                </ul>
            </nav> */}

            <nav className="navigation">
                <ul role="list" className="navBar">
                    <li><Link className="link" to="">Home</Link></li>
                    <li><Link className="link" to="">Recipes</Link></li>
                    <li><Link className="link" to="">Profile</Link></li>
             
                </ul>
            </nav>
        {/* <div className="cover">
            <div className="cover-title">
                <p>All new recipes,</p>
                <p>you can find </p>
                <p>only <span>here</span>!</p>
            </div>
        </div> */}
    </header>
    )
}