import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type, title, subtitle }) => {
  const ref = useRef();
  console.log("Rendering Parallax component");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      className="parallax-container"
      ref={ref}
      style={{
        background: "#1A1A1A"
      }}
    >
      <div className="parallax-content">
        <motion.div className="geometric-shapes" style={{ opacity }}>
          <div className="shape circle"></div>
          <div className="shape square"></div>
          <div className="shape triangle"></div>
        </motion.div>

        <motion.div className="text-content" style={{ y: yText, scale }}>
          <h1>{title || "Default Title"}</h1>

          {/* <h1>{type === "services" ? "My Services" : "Portfolio"}</h1> */}
          <motion.div
            className="subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>{subtitle || "Default subtitle text goes here"}</p>

            {/* {type === "services" ? (
              <p>Crafting digital experiences with passion and precision</p>
            ) : (
              <p>Showcasing my journey through code and creativity</p>
            )} */}
          </motion.div>

          <motion.div
            className="floating-elements"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="code-element">&lt;code/&gt;</div>
            <div className="code-element">{"{ }"}</div>
            <div className="code-element">&lt;/&gt;</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </div>
    </motion.div>
  );
};
