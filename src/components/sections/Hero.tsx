import { styles } from "../../styles";
import { hero1, hero2, hero3 } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import './hero.css';
import 'swiper/css';
import 'swiper/css/pagination';

// bg-surella-500 ===> HERO main div
//bg-gradient-to-tr from-teal-900 via-surella-500 to-teal-600 animated-background
const Hero = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col font-interExtraBold h-[calc(85vh)] mt-[80px] bg-surella-500">
        <div className={`${styles.paddingX} flex lg:shrink-0 xl:shrink flex-col w-full lg:w-[550px] xl:w-[660px] h-1/2 lg:h-full lg:justify-end justify-center lg:pb-[200px]`}>
          <h2 className={`${styles.heroHeadText} text-white font-semibold uppercase`}>
            Surella.pl
          </h2>
          <p className={`${styles.heroSubText} text-white text-nowrap -translate-y-2 md:-translate-y-3`}> 
            Tworzymy przestrzeń dla Twojego komfortu.
          </p>
          <motion.div className="w-fit h-fit bg-white mt-2"
            whileHover={{ scale: 1.05 }}>
              <motion.p className={`${styles.heroButton} text-center text-surella-500 font-interExtraBold font-bold px-16 py-3 cursor-pointer uppercase text-nowrap`}
               > 
                Sprawdź wycenę
              </motion.p>
          </motion.div>
        </div>
        <div className="overflow-hidden flex-1 w-full h-1/2 lg:w-3/5 lg:h-full border-t-[8px] lg:border-t-[0px] lg:border-l-[12px] border-white">
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

{/*
<div className="flex flex-col xl:flex-row bg-white w-full h-[calc(95vh-96px)] mt-24 relative gap-2 overflow-hidden">
  <div className="w-full xl:w-[900px] shrink-0 grow-0 bg-surella-500 flex flex-col justify-center py-24">
    <div className="sm:pl-24 md:pl-32 lg:pl-48 pl-8">
      <h2 className="text-white uppercase font-[700] text-7xl mb-2">Surella.pl</h2>
      <h4 className="text-white font-[400] text-md xl:text-2xl mb-10">Tworzymy przestrzeń dla Twojego komfortu</h4>
      <div className="bg-white px-10 py-4 uppercase w-fit font-[700] text-surella-500 text-sm xl:text-xl">Sprawdź wycenę</div>
    </div>
  </div>
  <div className="w-full bg-surella-500 relative overflow-hidden min-h-[400px]">
    <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination, Autoplay]} autoplay={{ delay: 3500, disableOnInteraction: false,}} loop={true}  className="h-full w-full">
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
</div>  */}