import "./Portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
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
  return (
    <section>
      <h2>{item.title}</h2>
      <img src={item.img} alt={item.title} />
      <p>{item.desc}</p>
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
