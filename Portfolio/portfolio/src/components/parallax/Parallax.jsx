import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);


  return (
    <motion.div
      className="parallax"
      ref={ref}
      style={{
        background:
        type === "services"
          ? "linear-gradient(180deg, rgba(150, 255, 220, 0.25),rgba(156, 217, 255, 0.25),rgba(230, 180, 255, 0.25))"
          : "linear-gradient(180deg,rgba(70, 180, 140, 0.15), rgba(76, 137, 175, 0.15),rgba(150, 100, 175, 0.15))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What am I doing?" : "What did I do?"}
      </motion.h1>
      {/* <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="firstPlanet"></motion.div>
      <motion.div style={{ y: yBg }} className="secondPlanet"></motion.div>

      <motion.div  style={{ y: yStars }}  className="stars"></motion.div> */}
    </motion.div>
  );
};
