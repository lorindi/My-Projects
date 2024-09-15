import "./Footer.scss";
import CallOutline from "../Svg/CallOutline";
import MailOutline from "../Svg/MailOutline";
import HelpCircleOutline from "../Svg/HelpCircleOutline";
import MapOutline from "../Svg/MapOutline";
import Instagram from "../Svg/Instagram";
import Facebook from "../Svg/Facebook";
import Linkedin from "../Svg/Linkedin";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variantsImg = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 1,
    },
  },
};

function Footer() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div className="footerContainer">
      <motion.div
        ref={ref}
        className="instagramImgs"
        variants={variantsImg}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.img
          variants={variantsImg}
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <motion.img
          variants={variantsImg}
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <motion.img
          variants={variantsImg}
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <motion.img
          variants={variantsImg}
          src="https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <motion.img
          variants={variantsImg}
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </motion.div>
      <div className="contentContactsLogoAddress">
        <div className="center">
          <ul className="contacts">
            <li className="">
              <CallOutline className="callOutlineFooter" />
              <p className="">Call +359 899 999 999</p>
            </li>
            <li className="">
              <MailOutline />
              <p className="">support@estate.com</p>
            </li>
            <li className="">
              <HelpCircleOutline />
              <p className="">Help</p>
            </li>
            <li className="">
              <MapOutline />
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="contentLogoSocial">
          <Link className="logo" href="/">
            <img src="/logo.png" alt="Logo" />
            <span>LoEstate</span>
          </Link>

          <div className="contentSocial">
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="contentMenu">
          <div className="menu">
            <Link to="/list" className="">
              Search
            </Link>
            <Link to="/profile" className="">
              Profile
            </Link>
            <Link to="/add" className="">
              Create Estate
            </Link>
            <Link to="/profile" className="">
              My Estates
            </Link>
          </div>
        </div>
      </div>
      <p className="allRightsReserved">
        All rights reserved. The site was made by Lora Mitova
      </p>
    </motion.div>
  );
}

export default Footer;
