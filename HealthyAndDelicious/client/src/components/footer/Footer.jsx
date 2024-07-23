import "./Footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faLocationDot, faPhone, faPaperPlane, faNoteSticky, faCalendar, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="contentFooter">
          <div className="contactsFooter">
            <div className="mainTitlesFooter">
              <span>
                <FontAwesomeIcon icon={faMap} className="faMap"/>
              </span>
              <h1>About</h1>
            </div>

            <ul role="list" className="listAboutFooter">
              <li className="listElementAboutFooter">
                <FontAwesomeIcon icon={faLocationDot}  className="faLocationDot"/>
                <span>210 Elin Pelin, Sofia, Bulgaria</span>
              </li>
              <li className="listElementAboutFooter">
                <FontAwesomeIcon icon={faPhone} className="faPhone" />
                <span>+35912345678</span>
              </li>
              <li className="listElementAboutFooter">
                <FontAwesomeIcon icon={faPaperPlane}  className="faPaperPlane"/>
                <span>healthy@gmail.com</span>
              </li>
            </ul>

            <form action="#" className="formAboutFooter">
              <input
                className="inputFormAboutFooter"
                type="text"
                placeholder="Enter email address"
              />
              <button type="submit" className="buttonFormAboutFooter">
                <FontAwesomeIcon icon={faPaperPlane} className="faPaperPlane"/>
              </button>
            </form>
          </div>

          <div className="latestRecipesFooter">
            <div className="mainTitlesFooter">
              <span>
                <FontAwesomeIcon icon={faNoteSticky} className="faNoteSticky"/>
              </span>
              <h1>Latest Recipes</h1>
            </div>
            <div>
              <div className="cardLatestRecipesFooter">
                <img
                  className="imgCardLatestRecipesFooter"
                  src="https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22173.jpg"
                  alt="Recipe"
                />
                <div className="infoCardLatestRecipesFooter">
                  <h3 className="infoTitleCardLatestRecipesFooter">
                    Recipe Title
                  </h3>
                  <p className="infoDescriptionCardLatestRecipesFooter">
                    Description
                  </p>
                  <p className="infoDataCardLatestRecipesFooter">
                    <FontAwesomeIcon icon={faCalendar} className="faCalendar"/> Oct. 16, 2019
                  </p>
                </div>
              </div>

              <div className="cardLatestRecipesFooter">
                <img
                  className="imgCardLatestRecipesFooter"
                  src="https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22173.jpg"
                  alt="Recipe"
                />
                <div className="infoCardLatestRecipesFooter">
                  <h3 className="infoTitleCardLatestRecipesFooter">
                    Recipe Title
                  </h3>
                  <p className="infoDescriptionCardLatestRecipesFooter">
                    Description
                  </p>
                  <p className="infoDataCardLatestRecipesFooter">
                    <FontAwesomeIcon icon={faCalendar} className="faCalendar"/> Oct. 16, 2019
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="informationFooter">
            <div className="mainTitlesFooter">
              <span>
                <FontAwesomeIcon icon={faCircleInfo} className="faCircleInfo"/>
              </span>
              <h1>Information</h1>
            </div>
            <ul role="list" className="informationListFooter">
              <li>
                <Link to="/about" className="informationListElementFooter">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="informationListElementFooter">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div className="instagramFooter">
            <div className="mainTitlesFooter">
              <span>
              <FontAwesomeIcon icon={faSquareInstagram} className="faSquareInstagram" />
              </span>
              <h1>Instagram</h1>
            </div>
            <div className="instagramImages">
              <img
                className="instaImg"
                src="https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22173.jpg"
                alt="Instagram"
              />
              <img
                className="instaImg"
                src="https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22173.jpg"
                alt="Instagram"
              />
              <img
                className="instaImg"
                src="https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22173.jpg"
                alt="Instagram"
              />
              <img
                className="instaImg"
                src="https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22173.jpg"
                alt="Instagram"
              />
              <img
                className="instaImg"
                src="https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22173.jpg"
                alt="Instagram"
              />
              <img
                className="instaImg"
                src="https://img.freepik.com/free-photo/young-woman-cooking-kitchen_1303-22173.jpg"
                alt="Instagram"
              />
            </div>
          </div>
        </div>

        <div className="contentCopyRight">
          <p className="copyrightInfo">Copyright ©2024 All rights reserved.</p>
          <p className="copyrightInfo">
            This template is made <FontAwesomeIcon icon={['fas', 'heart']} /> by{" "}
            <Link to="#">Lora Mitova</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
