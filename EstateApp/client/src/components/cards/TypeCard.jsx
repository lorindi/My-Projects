import "./TypeCard.scss";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
function TypeCard({ post, className, onClick }) {

  return (
    <motion.div className={`${className}`} onClick={onClick} variants={cardVariants}
    whileHover={{ scale: 1.05 }}>
      <img src={post.images[0]} alt="" />
      <div>
        <span>{post.city}</span>
      </div>
    </motion.div>
  );
}

export default TypeCard;
