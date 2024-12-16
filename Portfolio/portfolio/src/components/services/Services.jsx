import "./Services.scss";
import { motion } from "framer-motion";
import serviceImg from "./Screenshot 2024-05-28 121853.png";

export const Services = () => {
  console.log("Rendering Services component");

  return (
    <motion.div className="services">
      {/* Заглавна секция */}
      <motion.div 
        className="header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>My Development Journey</h1>
        <p>Where passion meets code</p>
      </motion.div>

      {/* Основна секция с карти */}
      <motion.div 
        className="cards-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.div 
          className="card"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
          }}
        >
          <div className="card-content">
            <div className="icon-container">
              <span className="code-icon">{"</>"}</span>
            </div>
            <h2>Coding Passion</h2>
            <p>
              Programming isn't just my profession - it's my passion. 
              Every day, I immerse myself in the world of code, constantly 
              learning and exploring new technologies.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="card featured"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
          }}
        >
          <div className="card-content">
            <div className="icon-container">
              <span className="brain-icon">🧠</span>
            </div>
            <h2>Problem Solving</h2>
            <p>
              The thrill of solving complex problems drives me forward. 
              Each challenge is an opportunity to grow and create 
              innovative solutions that make a difference.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
          }}
        >
          <div className="card-content">
            <div className="icon-container">
              <span className="growth-icon">📈</span>
            </div>
            <h2>Continuous Growth</h2>
            <p>
              Learning never stops in the world of development. 
              I embrace new challenges and technologies, constantly 
              expanding my skillset and knowledge.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Цитат секция */}
      <motion.div 
        className="quote-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <blockquote>
          "Code is like humor. When you have to explain it, it's bad."
          <span className="quote-author">- Cory House</span>
        </blockquote>
      </motion.div>
    </motion.div>
  );
};