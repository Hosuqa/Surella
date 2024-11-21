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
        delay:0.1,
        duration: 1,
        speed:5,
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
 []);
// 85vh

   return (
     <>
       <div className="flex lg:flex-row flex-col font-interExtraBold h-[calc(92vh)] bg-surella-600">
         <div className="bg-white overflow-hidden flex w-full h-full relative">
          <div className='z-20 flex flex-col mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-72 my-20 sm:my-24 md:my-28 lg:my-32 2xl:my-40 absolute bottom-0 h-fit w-fit '>
           <div className={`${styles.heroHeadText} text leading-none text-white font-semibold uppercase `}></div>
           <p className={`${styles.heroSubText} herotxt my-1 md:my-3 h-[21px] md:h-[30px] text-white text-nowrap ml-1 `}></p>
           <motion.div className="herobutton flex items-center w-fit h-fit bg-white mt-2 "
             whileTap={{ y:4 }}>
               <p className={`${styles.heroButton} bg-surella-600 hover:bg-surella-700 duration-300 text-center text-white font-interExtraBold font-bold px-5 sm:px-16 py-2 sm:py-4 cursor-pointer uppercase text-nowrap`}>
                 Sprawdź wycenę
               </p>
           </motion.div>
          </div>
          <a href="#About"className='arrowhero w-fit h-fit absolute z-20 bottom-0 right-0 left-0 m-auto flex flex-col items-center text-center justify-center mb-6'>
            <IoIosArrowRoundDown className='text-white w-fit h-10 mb-1 cursor-pointer'/>
            {/* <p className='text-white text-[14px] cursor-pointer'>
              Zobacz więcej
            </p> */}
          </a>
          <Swiper
             speed={2000}
             effect={'fade'}
             modules={[Pagination, Autoplay, EffectFade]}
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