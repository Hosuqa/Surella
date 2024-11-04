import { useEffect } from 'react';
import { styles } from "../../styles";
import { hero1, hero2 } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from "framer-motion";
import './hero.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import hero3 from "/images/rolety5.jpg"
import hero4 from "/images/zaluzje1.jpg"
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const words = ["komfortu", "stylu", "spokoju"];
  useEffect(() => {
    gsap.timeline()
      .to(
        ".text",
        {
        text: "Surella.pl",
        ease: "power1.Out",
        delay:0.1,
        duration: 1.4,
        speed:5,
        }
      )
      .to(".herotxt", {
        text: "Tworzymy przestrzeń dla Twojego komfortu",
        duration: 1.4,
        ease: "power1.out",
        speed: 5,
        onComplete: () => {
          let index = 0;
          const changeLastWord = () => {
            index = (index + 1) % words.length; 
            gsap.to(".herotxt", {
              text: `Tworzymy przestrzeń dla Twojego ${words[index]}`,
              duration: 2,
              ease: "power1.out",
              onComplete: changeLastWord, // Ustawia wywołanie rekurencyjne po zakończeniu animacji
            });
          };
          changeLastWord();
        },
      })
      .fromTo(
        ".herobutton",
        { opacity:0, y:50 },
        {
          opacity:1,
          y:0,
          duration: 0.9,
        }
      );
    },
 []);

  return (
    <>
      <div className="flex lg:flex-row flex-col font-interExtraBold h-[calc(85vh)] mt-[80px] bg-surella-600">
        <div className={`${styles.paddingX} flex lg:shrink-0 xl:shrink flex-col w-full lg:w-[550px] xl:w-[660px] h-1/2 lg:h-full lg:justify-end justify-center lg:pb-[200px]`}>
          <div className={`${styles.heroHeadText} text leading-none text-white font-semibold uppercase`}>
            
          </div>
          <p className={`${styles.heroSubText} herotxt my-3 h-[30px] text-white text-nowrap `}> 
           
          </p>
          <motion.div className="herobutton flex items-center w-fit h-fit bg-white mt-2"
            whileTap={{ y:4 }}>
              <p className={`${styles.heroButton} duration-300 hover:text-surella-600 text-center text-surella-500 font-interExtraBold font-bold px-5 sm:px-16 py-2 sm:py-3 cursor-pointer uppercase text-nowrap`}
               > 
                Sprawdź wycenę
              </p>
          </motion.div>
        </div>
        <div className="bg-white overflow-hidden flex-1 w-full h-1/2 lg:w-3/5 lg:h-full border-t-[8px] lg:border-t-[0px] lg:border-l-[12px] border-white">
        <Swiper pagination={{ dynamicBullets: true, }} speed={2000} effect={'fade'} modules={[Pagination, Autoplay, EffectFade]} autoplay={{ delay: 3500, disableOnInteraction: false,}} loop={true}  className="photo h-full w-full ">
          <SwiperSlide>
            <img src={hero1} className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero2} className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>  
            <img src={hero3} className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>  
            <img src={hero4} className="object-cover h-full w-full" alt="hero" />
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