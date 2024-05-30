import "./Skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import javaScript from "./javaScript.png";
import python from "./python.png";
import typeScript from "./typeScript.png";
import django from "./django.png";
import angular from "./angular.png";
import react from "./react.png";
import next from "./next.png";
import vue from "./vue.png";
import postgre from "./postgre.png";
import my from "./my.png";
import mongo from "./mongo.png";
import css from "./css.png";
import html from "./html.png";
import sass from "./sass.png";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <div className="skills">
      <motion.ul
        ref={ref}
        className="skillsList"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={variants}
      >
        <motion.li className="skill" variants={itemVariants}>
          <img src={python} alt="Python" />
          <h2>Python</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={javaScript} alt="Java Script" />
          <h2>Java Script</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={typeScript} alt="Type Script" />
          <h2>Type Script</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={django} alt="Django" />
          <h2>Django</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={angular} alt="Angular" />
          <h2>Angular</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={next} alt="Next" />
          <h2>Next</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={vue} alt="Vue" />
          <h2>Vue</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={react} alt="React" />
          <h2>React</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={postgre} alt="PostgreSQL" />
          <h2>PostgreSQL</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={my} alt="MySQL" />
          <h2>MySQL</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={mongo} alt="MongoDB" />
          <h2>MongoDB</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={html} alt="HTML" />
          <h2>HTML</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={css} alt="CSS" />
          <h2>CSS</h2>
        </motion.li>
        <motion.li className="skill" variants={itemVariants}>
          <img src={sass} alt="SASS" />
          <h2>SASS</h2>
        </motion.li>
      </motion.ul>
    </div>
  );
};
