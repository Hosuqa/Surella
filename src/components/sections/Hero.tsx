import { styles } from "../../styles";
import { hero1, hero2, hero3 } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import './hero.css';
import 'swiper/css';
import 'swiper/css/pagination';

// bg-surella-500 ===> HERO main div

const Hero = () => {
  return (
    <>
      <div className="flex xl:flex-row flex-col font-interExtraBold h-[90vh] xl:h-[95vh] bg-gradient-to-tr from-teal-900 via-surella-500 to-teal-600 animated-background">
        <div className={`${styles.paddingX} flex flex-col w-full h-1/2 xl:w-2/5 xl:h-full justify-center mt-[15%] lg:mt-[10%]`}>
          <h2 className={`${styles.heroHeadText} text-white tracking-wide font-semibold uppercase`}>
            Surella.pl
          </h2>
          <p className={`${styles.heroSubText} text-white text-nowrap -translate-y-3`}> 
            Tworzymy przestrzeń dla Twojego komfortu.
          </p>
          <motion.div className="w-fit h-fit bg-white mt-2"
            whileHover={{ scale: 1.05 }}>
              <motion.p className={`${styles.heroButton} text-center text-surella-500 font-interExtraBold font-bold px-16 py-2 md:py-3 cursor-pointer uppercase text-nowrap`}
               > 
                Sprawdź wycenę
              </motion.p>
          </motion.div>
        </div>
        <div className="w-full h-1/2 xl:w-3/5 xl:h-full border-t-[8px] xl:border-l-[12px] border-white">
        <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination, Autoplay]} autoplay={{ delay: 3500, disableOnInteraction: false,}} loop={true}  className="h-full w-full ">
          <SwiperSlide>
            <img src={hero1} className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero2} className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>  
            <img src={hero3} className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
