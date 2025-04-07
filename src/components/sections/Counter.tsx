import { useEffect } from 'react';
import { CounterWrapper } from '@components/global/Wrappers'
import { FaBuilding } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuBlinds } from "react-icons/lu";
import CountUp from 'react-countup';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = () => {

  useEffect(() => {
    gsap.fromTo(
      ".sqare",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".sqare",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <CounterWrapper vertical className='bg-surella-600'>
      <div className="w-full h-full flex justify-around">
          <div className="sqare flex flex-col items-center" >
            <div className="w-[50px] sm:w-28 lg:w-40 bg-white aspect-square flex items-center justify-center rotate-45 hover:scale-110 duration-300">
              <div className="-rotate-45 text-surella-600 w-full h-full flex items-center justify-center text-3xl sm:text-6xl lg:text-7xl ">
                <FaPeopleGroup />
              </div>
            </div>
            <div className="md:w-32 flex flex-col justify-center items-center h-full mt-6 md:mt-12 lg:mt-14">
              <h1 className="text-nowrap text-xl md:text-3xl lg:text-4xl font-bold flex justify-center text-white">
                <CountUp start={0} end={2639} duration={8} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={0.4} separator=","/>
              </h1>
              <p className="text-white text-center text-wrap md:leading-2 tracking-wide md:mt-2 uppercase text-[10px] md:text-[14px] lg:text-lg font-semibold">
                Zadowolonych<br/>klientow
              </p>
            </div>
          </div>

          <div className="sqare flex flex-col items-center" >
            <div className="w-[50px] sm:w-28 lg:w-40 bg-white aspect-square flex items-center justify-center rotate-45 hover:scale-110 duration-300">
              <div className="-rotate-45 text-surella-600 w-full h-full flex items-center justify-center text-3xl sm:text-6xl lg:text-7xl ">
                <FaBuilding />
              </div>
            </div>
            <div className="md:w-32  flex flex-col justify-center items-center h-full mt-6 md:mt-12 lg:mt-14">
              <h1 className="text-nowrap text-xl md:text-3xl lg:text-4xl font-bold flex justify-center text-white">
                <CountUp start={0} end={16} duration={12} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={0.4} separator=","/>
              </h1>
              <p className="text-white text-center text-wrap md:mt-2 uppercase text-[10px] md:text-[14px] lg:text-lg font-semibold">
                Lat<br/>Doświadczenia
              </p>
            </div>
          </div>

          <div className="sqare flex flex-col items-center" >
            <div className="w-[50px] sm:w-28 lg:w-40 bg-white aspect-square flex items-center justify-center rotate-45 hover:scale-110 duration-300">
              <div className="-rotate-45 text-surella-600 w-full h-full flex items-center justify-center text-3xl sm:text-6xl lg:text-7xl ">
                <LuBlinds />
              </div>
            </div>
            <div className="md:w-32 w flex flex-col justify-center items-center h-full mt-6 md:mt-12 lg:mt-14">
              <h1 className="text-nowrap text-xl md:text-3xl lg:text-4xl font-bold flex justify-center text-white">
                <CountUp start={0} end={11341} duration={8} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={0.4} separator="," useEasing={true} />
                {/* easingFn={"easeOutCubic"} */}
              </h1>
              <p className="text-white text-center text-wrap md:mt-2 uppercase text-[10px] md:text-[14px] lg:text-lg font-semibold">
                Zrelizowanych<br/>zamówień
              </p>
            </div>
          </div>
        
      </div>
    </CounterWrapper>
  );
};

export default Counter;

//<FaBuilding />
//<FaPeopleGroup />
//<LuBlinds />