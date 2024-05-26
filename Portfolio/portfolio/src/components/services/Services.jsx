import "./Services.scss";
import { motion } from "framer-motion";
export const Services = () => {
  return (
    <div className="services">
      <div className="textContainer">
        <p>
          I focus helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>What we do?</button>
        </div>
      </div>
      <div className="listContainer">
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
      </div>
    </div>
  );
};
