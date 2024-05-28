import "./Contact.scss";
import { Email } from "./email/Email";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
  },
};

export const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>loramitova9gmail.com</span>
        </div>
        <div className="item">
          <h2 className="address">Address</h2>
          <span>Sofia</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+359898277556</span>
        </div>
      </div>

      <div className="formContainer">
        <Email />
      </div>
    </div>
  );
};
