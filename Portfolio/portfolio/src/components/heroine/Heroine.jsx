import "./Heroine.scss";
import loraImg from "./Polish_20250322_010348975.png";
import scrollImg from "./pngwing.com.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  textVariants,
  sliderVariants,
  typewriterVariants,
  letterVariants,
} from "./animations.js";

const phrases = [
  "I am Lora Mitova, a passionate developer.",
  "I don't stop until I achieve my goals now.",
  "I have no days off as coding is my passion.",
];
export const Heroine = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="heroine">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Lora Mitova</motion.h2>
          <motion.h1
            variants={textVariants}
            key={currentPhraseIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {phrases[currentPhraseIndex].split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>

            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
        </motion.div>
        <motion.img
          className="scrollImg"
          variants={textVariants}
          animate="scrollButton"
          src={scrollImg}
          alt=""
        />
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div> */}
      <div className="imageContainer">
        <img src={loraImg} alt="" />
      </div>
    </div>
  );
};
