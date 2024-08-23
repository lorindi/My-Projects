import { Email } from "../../components/email/Email";
import "./ContactPage.scss";

function Contact() {
  return (
    <div className="containerContacts">
      <div className="contentContacts">
        <div className="contentContactsInfo">
          <h1 className="contactInfoTitle">Contact Us</h1>
          <div className="contactInfo">
            <p>
              <span>Address:</span> Your address, City, Country
            </p>
            <p>
              <span>Phone:</span> Your phone number
            </p>
            <p>
              <span>Email:</span> Your email address
            </p>
          </div>
        </div>
        <div className="emailContainer">
        <Email />
        </div>
      </div>
    </div>
  );
}

export default Contact;