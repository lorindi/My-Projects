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
import tailwind from './tailwind.png'
import firebase from './firebase.png'
import git from './git.png'
import express from './express.png'

const skills = [
  { img: python, title: "Python" },
  { img: javaScript, title: "Java Script" },
  { img: typeScript, title: "Type Script" },
  { img: django, title: "Django" },
  { img: express, title: "Express" },
  { img: angular, title: "Angular" },
  { img: next, title: "Next" },
  { img: vue, title: "Vue" },
  { img: react, title: "React" },
  { img: postgre, title: "PostgreSQL" },
  { img: my, title: "MySQL" },
  { img: mongo, title: "MongoDB" },
  { img: git, title: "Git" },
  { img: html, title: "HTML" },
  { img: css, title: "CSS" },
  { img: sass, title: "SASS" },
  { img: tailwind, title: "Tailwind" },
  { img: firebase, title: "Firebase" }
];

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
      <motion.h1 className="titleSkills">Skills</motion.h1>

      <motion.ul
        ref={ref}
        className="skillsList"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={variants}
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="skill"
            variants={itemVariants}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
          >
            <img src={skill.img} alt={skill.title} />
            <h2>{skill.title}</h2>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
