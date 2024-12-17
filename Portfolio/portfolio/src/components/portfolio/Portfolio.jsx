import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import CFamily from "./cfamily.png";
import MagicSushiLora from "./MagicSushiLora.png";
import WebCrafters from "./WebCrafters.png";
import PortfolioImg from "./Portfolio.png";

const items = [
  {
    id: 1,
    title: "CFamily",
    img: CFamily,
    desc: "CFamily is a Django-based web application that provides a virtual center for information and community for people affected by cystic fibrosis in Bulgaria. The project offers various functionalities such as managing campaigns, events, news, initiatives, charity walks, lists of benefactors, personal stories, donations, and a discussion forum. Its goal is to unite people and facilitate the exchange of information and support within the community",
    link: "https://github.com/lorindi/My-Projects/tree/main/CFamily",
    github: "https://github.com/lorindi/My-Projects/tree/main/CFamily",
  },
  {
    id: 2,
    title: "Magic Sushi Lora",
    img: MagicSushiLora,
    desc: "MagicSushiLora is an online platform centered around sharing sushi recipes and discovering the world of sushi, leveraging Django Rest Framework for the backend and ReactJS for the frontend. The project incorporates technologies such as Axios for handling HTTP requests, React for building dynamic user interfaces, Toastify for displaying notifications, and EmailJS for email functionality. Its features include recipe sharing, a sushi gallery, educational resources about sushi, and a seamless sushi ordering experience.",
    link: "https://github.com/lorindi/My-Projects/tree/main/MagicSushiLora",
    github: "https://github.com/lorindi/My-Projects/tree/main/MagicSushiLora",
  },
  {
    id: 3,
    title: "Web Crafters",
    img: WebCrafters,
    desc: "Web Crafters is a platform designed for users to create and manage descriptions for modern and functional websites, offering authentication features for users and admins. Built with React, JavaScript, HTML, and CSS, it integrates technologies like Toastify, EmailJS, and Fontawesome, along with APIs such as the Weather API and a custom backend server in Node.js. Users can access various pages like the homepage, About Us, login, registration, and site management, while admins have additional privileges including managing IT specialists and their descriptions.",
    link: "https://lorindi-webcrafters-react-999.web.app/",
    github: "https://github.com/lorindi/My-Projects/tree/main/WebCrafters",
  },
  {
    id: 4,
    title: "Portfolio",
    img: PortfolioImg,
    desc: "The portfolio is built using React and incorporates animations with Framer Motion, along with styling using Sass. It integrates various functionalities such as Toastify for notifications, EmailJS for message sending, and Fontawesome for icons, presenting the author's work and skills in an interactive and stylish manner.",
    link: "https://lorindi.vercel.app/",
    github: "https://github.com/lorindi/My-Projects/tree/main/Portfolio",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  console.log("Single component rendered");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className="portfolioContainer">
      <div className="container">
        <motion.div 
          className="wrapper"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="imageContainer" 
            ref={ref}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={item.img} alt={item.title} />
          </motion.div>
          <motion.div 
            className="textContainer" 
            style={{ y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h2>
            <motion.p
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.3 }}
            >
              {item.desc}
            </motion.p>
            <div className="buttons">
              <motion.a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <button className="demo">See Demo</button>
              </motion.a>
              <motion.a 
                href={item.github} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <button className="github">GitHub</button>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();
  console.log("Portfolio component rendered");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Featured Works
        </motion.h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};