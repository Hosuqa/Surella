import { useEffect } from 'react';
import { styles } from "../../styles";
import { hero1, hero2 } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from "framer-motion";
import './Hero.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import hero3 from "/images/rolety5.jpg"
import hero4 from "/images/zaluzje1.jpg"
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { IoIosArrowRoundDown } from "react-icons/io";

gsap.registerPlugin(TextPlugin);


const Hero = () => {
  const words = ["żaluzje", "plisy", "moskitiery", "markizy", "zasłony"];
  useEffect(() => {
    gsap.timeline()
      .to(
        ".text",
        {
        text: "Surella.pl",
        delay:0.15,
        duration: 1,
        }
      )
      .to(".herotxt", {
        text: "U nas znajdziesz najlepsze żaluzje",
        duration: 1.4,
        ease: "power1.out",
        speed: 5,
        onComplete: () => {
          let index = 0;
          const changeLastWord = () => {
            index = (index + 1) % words.length; 
            gsap.to(".herotxt", {
              text: `U nas znajdziesz najlepsze ${words[index]}`,
              duration: 2,
              ease: "power1.out",
              onComplete: changeLastWord, // Ustawia wywołanie rekurencyjne po zakończeniu animacji
            });
          };
          changeLastWord();
        },
      })
      gsap.fromTo(
        ".herobutton",
        { opacity:0, y:50 },
        {
          opacity:1,
          delay:2,
          y:0,
          duration: 1.3,
        }
      );
      gsap.fromTo(
        ".arrowhero",
        { y:60, opacity: 0 },
        {
          opacity:1,
          delay:2.4,
          y:0,
          duration: 1.7,
        }
      );
    },
 );
// 85vh

   return (
     <>
       <div className="flex lg:flex-row flex-col h-[calc(100vh)] bg-surella-600">
         <div className="bg-white overflow-hidden flex w-full h-full relative">
          <div className='z-20 flex flex-col mx-6 sm:mx-16 md:mx-24 lg:mx-24 xl:mx-48 2xl:mx-72 my-32 sm:my-36 md:my-40 lg:my-48 2xl:my-56 absolute bottom-0 h-fit w-fit '>
           <div className={`${styles.heroHeadText} text leading-none text-white font-interExtraBold font-semibold uppercase `}></div>
           <p className={`${styles.heroSubText} herotxt my-1 md:my-3 h-[21px] md:h-[30px] text-white font-interMedium text-nowrap ml-1 `}></p>
           <motion.div className="herobutton flex items-center w-fit h-fit bg-white mt-2 "
             whileTap={{ y:4 }}>
               <a href="#Contact" className={`${styles.heroButton} bg-surella-600 hover:bg-surella-700 duration-300 text-center text-white font-interBold px-5 sm:px-16 py-2 sm:py-4 cursor-pointer uppercase text-nowrap`}>
                 Zadaj nam pytanie
               </a>
           </motion.div>
          </div>
          <a href="#About"className='arrowhero w-fit h-fit absolute z-20 bottom-0 right-0 left-0 m-auto flex flex-col items-center text-center justify-center mb-6'>
            <IoIosArrowRoundDown className='text-white w-fit h-10 mb-1 cursor-pointer'/>
          </a>
          <Swiper
             speed={2000}
             effect={'fade'}
             modules={[Autoplay, EffectFade]}
             autoplay={{ delay: 3500, disableOnInteraction: false }}
             loop={true}
             className="photo h-full w-full"
           >
             <SwiperSlide>
               <img src={hero1} className="object-cover h-full w-full " alt="hero" />
               <div className="absolute inset-0 bg-black/40"></div>
             </SwiperSlide>
             <SwiperSlide>
               <img src={hero2} className="object-cover h-full w-full " alt="hero" />
               <div className="absolute inset-0 bg-black/40"></div>
             </SwiperSlide>
             <SwiperSlide>
               <img src={hero3} className="object-cover h-full w-full " alt="hero" />
               <div className="absolute inset-0 bg-black/40"></div>
             </SwiperSlide>
             <SwiperSlide>
               <img src={hero4} className="object-cover h-full w-full " alt="hero" />
               <div className="absolute inset-0 bg-black/40"></div>
             </SwiperSlide>
           </Swiper>
         </div>
       </div>
     </>
   );
 };
 
 export default Hero;