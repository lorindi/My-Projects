import { useRef } from "react";
import "./Contact.scss";
import { Email } from "./email/Email";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>loramitova9gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2 className="address">Address</h2>
          <span>Sofia</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+359898277556</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            height="500px"
            width="650px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-64.83 -64.83 453.80 453.80"
            xmlSpace="preserve"
            strokeWidth={1}
            fill="none"
            initial={{ pathLength: 1 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ duration: 3 }}
          >
            <motion.path d="M191.418,94.884c-10.724,0-20.921,3.421-29.346,9.747c-8.425-6.326-18.623-9.747-29.346-9.747 c-13.088,0-25.393,5.097-34.648,14.351c-19.105,19.105-19.105,50.193,0,69.299l58.689,58.689 c1.406,1.406,3.314,2.196,5.303,2.196c1.989,0,3.897-0.79,5.303-2.196l58.69-58.69c9.255-9.256,14.352-21.561,14.353-34.648 c0-13.089-5.097-25.394-14.352-34.649C216.811,99.98,204.506,94.884,191.418,94.884z M215.457,167.925l-53.386,53.388 l-53.386-53.387c-13.257-13.257-13.257-34.827,0-48.084c6.422-6.422,14.96-9.958,24.042-9.958c9.082,0,17.621,3.537,24.042,9.959 c1.406,1.406,3.314,2.196,5.303,2.196c1.989,0,3.897-0.79,5.303-2.196c6.422-6.423,14.961-9.959,24.043-9.959 c9.081,0,17.619,3.536,24.04,9.958c6.422,6.421,9.959,14.96,9.959,24.041C225.416,152.965,221.88,161.503,215.457,167.925z"></motion.path>
            <motion.path d="M162.071,0C73.163,0,0.83,72.332,0.83,161.241c0,37.076,12.788,73.004,36.1,101.677 c-6.65,16.756-17.789,31.245-32.401,42.089c-2.238,1.66-3.37,4.424-2.941,7.177c0.429,2.754,2.349,5.042,4.986,5.942 c11.683,3.992,23.856,6.017,36.182,6.017c19.572,0,38.698-5.093,55.569-14.763c20.158,8.696,41.584,13.104,63.747,13.104 c88.909,0,161.241-72.333,161.241-161.242S250.98,0,162.071,0z M162.071,307.483c-21.32,0-41.881-4.492-61.111-13.351 c-2.291-1.057-4.959-0.889-7.101,0.443c-15.313,9.529-32.985,14.566-51.105,14.566c-6.053,0-12.065-0.564-17.981-1.684 c12.52-12.12,22.014-26.95,27.787-43.547c0.879-2.525,0.346-5.328-1.397-7.354C28.378,230.07,15.83,196.22,15.83,161.241 C15.83,80.604,81.434,15,162.071,15s146.241,65.604,146.241,146.241C308.313,241.88,242.709,307.483,162.071,307.483z"></motion.path>
          </svg>
        </motion.div>
        <motion.div
          className="emailContainer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <Email />
        </motion.div>
      </div>
    </motion.div>
  );
};
