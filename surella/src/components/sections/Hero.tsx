import { styles } from "../../styles";
import { fadeIn } from "../../untils/motion";
import { motion } from "framer-motion";
import { hero1 } from '../../assets';

const Hero = () => {
  return (
    <>
      <div className="bg-surella-500 flex font-interExtraBold h-[95vh] ">
        <div className={`${styles.paddingHeroX} flex flex-col w-1/2 justify-center`}>
          <h2 className={`${styles.heroHeadText} text-white tracking-wide font-semibold uppercase`}>
            Surella.pl
          </h2>
          <p className={`${styles.heroSubText} text-white -translate-y-3 `}>
            Tworzymy przestrzeń dla Twojego komfortu.
          </p>
          <div className="w-fit h-fit bg-white mt-6">
              <p className={`${styles.heroButton} text-surella-500 font-interExtraBold font-bold px-16 py-3 uppercase`}>Sprawdź wycenę</p>
          </div>
        </div>
        <div className="w-1/2 border-l-[12px] border-white">
           <img src={hero1} className="object-cover h-full w-full" alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
