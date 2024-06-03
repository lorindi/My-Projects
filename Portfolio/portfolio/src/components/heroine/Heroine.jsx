import "./Heroine.scss";
import loraImg from "./IMG_20231225_205932.jpg";
import scrollImg from "./pngwing.com.png";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-700%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

export const Heroine = () => {
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
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
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
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src={loraImg} alt="" />
      </div>
    </div>
  );
};
