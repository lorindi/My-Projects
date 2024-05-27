import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis beatae modi maiores sit voluptatibus, fuga error magnam architecto numquam corrupti est itaque rem eius aliquam, enim eum asperiores at.",
  },
  {
    id: 2,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis beatae modi maiores sit voluptatibus, fuga error magnam architecto numquam corrupti est itaque rem eius aliquam, enim eum asperiores at.",
  },
  {
    id: 3,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis beatae modi maiores sit voluptatibus, fuga error magnam architecto numquam corrupti est itaque rem eius aliquam, enim eum asperiores at.",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis beatae modi maiores sit voluptatibus, fuga error magnam architecto numquam corrupti est itaque rem eius aliquam, enim eum asperiores at.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} ref={ref} />
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
