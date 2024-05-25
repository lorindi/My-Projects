import "./Parallax.scss";
import { motion, useScroll } from "framer-motion";

export const Parallax = ({ type }) => {
  return (
    <motion.div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #EBE1F0, #9ac5f5e1, #9ac5f5e1, #969BF3, #BA67F3 )"
            : "linear-gradient(180deg, #EBE1F0, #9ac5f5e1, #969bf3d2, #bb67f3c2, #bb67f3c2)",
      }}
    >
      <motion.h1>{type === "services" ? "What we do?" : "What we did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="firstPlanet"></motion.div>
      <motion.div className="secondPlanet"></motion.div>

      <motion.div className="stars"></motion.div>
    </motion.div>
  );
};
