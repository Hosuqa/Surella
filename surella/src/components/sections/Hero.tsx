import { styles } from "../../styles";
import { hero1 } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './hero.css';
import 'swiper/css';
import 'swiper/css/pagination';

// bg-gradient-to-tr from-surella-400 via-surella-500 to-surella-700

const Hero = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col font-interExtraBold h-[95vh] bg-gradient-to-tr from-teal-900 via-surella-500 to-teal-600 animated-background">
        <div className={`${styles.paddingHeroX} flex flex-col w-full h-1/2 md:w-1/2 md:h-full justify-center mt-[15%]`}>
          <h2 className={`${styles.heroHeadText} text-white tracking-wide font-semibold uppercase`}>
            Surella.pl
          </h2>
          <p className={`${styles.heroSubText} text-white -translate-y-3 `}>
            Tworzymy przestrzeń dla Twojego komfortu.
          </p>
          <div className="w-fit h-fit  bg-white mt-2">
              <p className={`${styles.heroButton} text-center text-surella-500 font-interExtraBold font-bold px-16 py-2 md:py-3 uppercase text-nowrap`}>Sprawdź wycenę</p>
          </div>
        </div>
        <div className="w-full h-1/2 md:w-1/2 md:h-full border-l-[12px] border-white">
        <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination, Autoplay]} autoplay={{ delay: 3500, disableOnInteraction: false,}} loop={true}  className="h-full w-full ">
          <SwiperSlide>
              <img src={hero1} className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
              {/* <img src={hero1} className="object-cover h-full w-full" alt="hero" /> */}
              <div className="bg-black w-full h-full"></div>
          </SwiperSlide>
          <SwiperSlide>  
              {/* <img src={hero1} className="object-cover h-full w-full" alt="hero" /> */}
              <div className="bg-red-700 w-full h-full"></div>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
