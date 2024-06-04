import "./Services.scss";
import { motion, useInView } from "framer-motion";
import serviceImg from "./Screenshot 2024-05-28 121853.png";

export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div
        className="textContainer"
        initial={{ opacity: 0, x: 300 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
      >
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src={serviceImg} alt="" />
          <h1>
            <motion.b whileHover={{ color: "#98C1F4" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#98C1F4" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>What I do?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        initial={{ opacity: 0}}
        whileInView={{
          opacity: 1,
         
          transition: { staggerChildren: 0.1, duration: 2 },
        }}
      >
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "gray" }}
        >
          <h2>Visual Design</h2>
          <p>
            Hi, I'm Lora, a passionate designer specializing in creating unique
            visual solutions. I love combining art with functionality to create
            websites that impress and inspire.
          </p>
          <button>^ ^</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "gray" }}
        >
          <h2>Functional Websites</h2>
          <p>
            As an experienced web developer, I create functional and interactive
            websites. I always strive to offer the best user experience by
            combining modern technologies with creative solutions.
          </p>
          <button>^ ^</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "gray" }}
        >
          <h2>Artistic Approach</h2>
          <p>
            My artistic nature drives me to create designs that tell stories and
            evoke emotions. I believe in the power of details and a personalized
            approach to each project to make it unique and memorable.
          </p>
          <button>^ ^</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
