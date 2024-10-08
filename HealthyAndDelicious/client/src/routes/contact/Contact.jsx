import { Email } from "../../components/email/Email";
import "./Contact.scss";

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
        <Email />
      </div>
    </div>
  );
}

export default Contact;
