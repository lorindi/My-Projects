import "./Services.scss";
import { motion, useInView } from "framer-motion";
import {useRef} from "react"
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="" alt="" />
          <h1>
            <motion.b whileHover={{color:"black"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"black"}}>For Your</motion.b> Business.
          </h1>
          <button>What we do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "gray" }}
        >
          <h2></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum amet
            illo optio! Quia illum cum ducimus officia ipsum odit vel harum
            repellendus! Esse officia error accusamus fuga dolorum illo labore.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "gray" }}
        >
          <h2></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum amet
            illo optio! Quia illum cum ducimus officia ipsum odit vel harum
            repellendus! Esse officia error accusamus fuga dolorum illo labore.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "gray" }}
        >
          <h2></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum amet
            illo optio! Quia illum cum ducimus officia ipsum odit vel harum
            repellendus! Esse officia error accusamus fuga dolorum illo labore.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
