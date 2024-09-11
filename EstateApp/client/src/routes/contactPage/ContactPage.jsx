import { Email } from "../../components/email/Email";
import "./ContactPage.scss";
import CallOutline from "../../components/Svg/CallOutline";
import Instagram from "../../components/Svg/Instagram";
import Facebook from "../../components/Svg/Facebook";
import Linkedin from "../../components/Svg/Linkedin";
function Contact() {
  return (
    <div className="containerContacts">
      <div className="contentContacts">
        <h1>Contact Us</h1>
        <Email />
        <div className="linksBlank">
          <a href="#" target="_blank">
            <CallOutline className="callOutlineContacts" />
          </a>
          <a href="#" target="_blank">
            <Instagram />
          </a>
          <a href="#" target="_blank">
            <Facebook />
          </a>
          <a href="#" target="_blank">
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="contentImg">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Contact;
