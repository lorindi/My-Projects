import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import CFamily from "./cfamily.png";
import MagicSushiLora from "./MagicSushiLora.png";
import WebCrafters from "./WebCrafters.png";
import PortfolioImg from './Portfolio.png'
const items = [
  {
    id: 1,
    title: "CFamily",
    img: CFamily,
    desc: "CFamily is a Django-based web application that provides a virtual center for information and community for people affected by cystic fibrosis in Bulgaria. The project offers various functionalities such as managing campaigns, events, news, initiatives, charity walks, lists of benefactors, personal stories, donations, and a discussion forum. Its goal is to unite people and facilitate the exchange of information and support within the community.",
  },
  {
    id: 2,
    title: "Magic Sushi Lora",
    img: MagicSushiLora,
    desc: "MagicSushiLora is an online platform centered around sharing sushi recipes and discovering the world of sushi, leveraging Django Rest Framework for the backend and ReactJS for the frontend. The project incorporates technologies such as Axios for handling HTTP requests, React for building dynamic user interfaces, Toastify for displaying notifications, and EmailJS for email functionality. Its features include recipe sharing, a sushi gallery, educational resources about sushi, and a seamless sushi ordering experience.",
  },
  {
    id: 3,
    title: "Web Crafters",
    img: WebCrafters,
    desc: "Web Crafters is a platform designed for users to create and manage descriptions for modern and functional websites, offering authentication features for users and admins. Built with React, JavaScript, HTML, and CSS, it integrates technologies like Toastify, EmailJS, and Fontawesome, along with APIs such as the Weather API and a custom backend server in Node.js. Users can access various pages like the homepage, About Us, login, registration, and site management, while admins have additional privileges including managing IT specialists and their descriptions.",
  },
  {
    id: 4,
    title: "Portfolio",
    img: PortfolioImg,
    desc: "The portfolio is built using React and incorporates animations with Framer Motion, along with styling using Sass. It integrates various functionalities such as Toastify for notifications, EmailJS for message sending, and Fontawesome for icons, presenting the author's work and skills in an interactive and stylish manner.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-1500, 1500]);

  return (
    <section className="portfolioContainer">
      <div className="container" >
        <div className="wrapper">
          <div className="imageContainer"  ref={ref}>
            <img src={item.img} alt={item.title}  />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
