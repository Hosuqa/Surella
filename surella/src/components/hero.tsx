import { styles } from "../styles";
import { fadeIn } from "../untils/motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="bg-surella-500 flex justify-center h-screen items-center py-20">
        <motion.div variants={fadeIn()}
        initial="hidden"
        animate="show">
          <h2 className={styles.sectionHeadText}>
            Surella Hero
          </h2>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
