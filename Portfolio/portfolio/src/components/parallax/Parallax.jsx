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
            ? "linear-gradient(180deg, #9ac5f5e1, #969BF3, #BA67F3)"
            : "linear-gradient(180deg, #9ac5f5e1, #969bf3d2, #bb67f3c2)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What we do?" : "What we did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="firstPlanet"></motion.div>
      <motion.div style={{ y: yBg }} className="secondPlanet"></motion.div>

      <motion.div  style={{ y: yStars }}  className="stars"></motion.div>
    </motion.div>
  );
};
