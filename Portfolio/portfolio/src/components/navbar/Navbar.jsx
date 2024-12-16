import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faSquareYoutube,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Sidebar } from "../sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="logoTitle"
        >
          Lorindi Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/lorindi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="https://www.linkedin.com/in/lora-mitova-833a47261/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {/* <a href="https://dribbble.com/loramitova" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBasketball} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100073735856715" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/lo_mitova/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
          <a href="https://www.youtube.com/channel/UCwMI0P9V0GUqlRXJIgFgKMA" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareYoutube} />
          </a> */}
        </div>
      </div>
    </div>
  );
};
