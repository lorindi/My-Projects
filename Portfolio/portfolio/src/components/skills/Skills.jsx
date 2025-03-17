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
import tailwind from "./tailwind.png";
import firebase from "./firebase.png";
import git from "./git.png";
import express from "./express.png";
import nestjs from "./nest.png";
import prisma from "./prisma.png";
import supabase from "./supabase.png";
import graphql from "./grapgql.png";
import websockets from "./socket.png";
import nuxtjs from "./nuxt.png";
import framerMotion from "./framerMotion.png";
import threeJs from "./threeJs.png";

const backendSkills = [
  { img: python, title: "Python" },
  { img: django, title: "Django" },
  { img: express, title: "Express.js" },
  { img: nestjs, title: "Nest.js" },
  { img: postgre, title: "PostgreSQL" },
  { img: my, title: "MySQL" },
  { img: mongo, title: "MongoDB" },
  { img: prisma, title: "Prisma" },
  { img: supabase, title: "Supabase" },
];

const frontendSkills = [
  { img: javaScript, title: "JavaScript" },
  { img: typeScript, title: "TypeScript" },
  { img: html, title: "HTML" },
  { img: css, title: "CSS" },
  { img: sass, title: "SASS" },
  { img: tailwind, title: "Tailwind" },
  { img: angular, title: "Angular" },
  { img: react, title: "React" },
  { img: vue, title: "Vue" },
  { img: next, title: "Next.js" },
  { img: nuxtjs, title: "Nuxt.js" },
];

const toolsAndOthers = [
  { img: git, title: "Git" },
  { img: firebase, title: "Firebase" },
  { img: graphql, title: "GraphQL" },
  { img: websockets, title: "WebSockets" },
  { img: framerMotion, title: "Framer Motion" },
  { img: threeJs, title: "Three.js" },
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
  animate: { opacity: 1, y: 0 },
};

export const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  console.log("Rendering Skills component with 3 categories like in the image");

  return (
    <div className="skills">
      <motion.h1 className="titleSkills">Technical Skills</motion.h1>
      <div className="titleUnderline"></div>

      <div className="skillsContainer">
        <div className="skillsCategory">
          <div className="categoryHeader">
            <div className="categoryIcon backend-icon"></div>
            <h2 className="categoryTitle">Backend Development</h2>
          </div>
          <motion.div
            ref={ref}
            className="skillButtons"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={variants}
          >
            {backendSkills.map((skill, index) => (
              <motion.div
                className="skillButton"
                key={index}
                variants={itemVariants}
              >
                <img src={skill.img} alt={skill.title} />
                <span>{skill.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="skillsCategory">
          <div className="categoryHeader">
            <div className="categoryIcon frontend-icon"></div>
            <h2 className="categoryTitle">Frontend Development</h2>
          </div>
          <motion.div
            className="skillButtons"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={variants}
          >
            {frontendSkills.map((skill, index) => (
              <motion.div
                className="skillButton"
                key={index}
                variants={itemVariants}
              >
                <img src={skill.img} alt={skill.title} />
                <span>{skill.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="skillsCategory">
          <div className="categoryHeader">
            <div className="categoryIcon tools-icon"></div>
            <h2 className="categoryTitle">Tools & Others</h2>
          </div>
          <motion.div
            className="skillButtons"
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={variants}
          >
            {toolsAndOthers.map((skill, index) => (
              <motion.div
                className="skillButton"
                key={index}
                variants={itemVariants}
              >
                <img src={skill.img} alt={skill.title} />
                <span>{skill.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
