import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faSquareYoutube,
  faGithub,
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
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faBasketball} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faSquareYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};
