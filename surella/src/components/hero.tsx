import {styles} from "../styles";
import { fadeIn } from "../untils/motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="bg-slate-300 flex justify-center items-center w-screen py-20">
        <motion.div variants={fadeIn()}
        initial="hidden"
        animate="show">
          <h2 className={styles.sectionHeadText}>
            Surella
          </h2>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
