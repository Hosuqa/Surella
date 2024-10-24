import { LgWrapper } from '@components/global/Wrappers'
import { FaBuilding } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuBlinds } from "react-icons/lu";
import CountUp from 'react-countup';

const Counter = () => {

  return (
    <LgWrapper vertical>
      <div className="w-full h-full flex justify-around">
          <div className="flex flex-col items-center" >
            <div className="w-[70px] sm:w-28 lg:w-40 bg-surella-600 aspect-square flex items-center justify-center rotate-45 hover:scale-110 duration-300">
              <div className="-rotate-45 text-white w-full h-full flex items-center justify-center text-4xl sm:text-6xl lg:text-7xl ">
                <FaPeopleGroup />
              </div>
            </div>
            <div className="md:w-32 w-28 flex flex-col justify-center items-center h-full mt-8 md:mt-12 lg:mt-14">
              <h1 className="text-nowrap text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center text-surella-700">
                <CountUp start={0} end={3839} duration={3.5} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={0.4} separator=","/>
              </h1>
              <p className="text-surella-600 text-center text-wrap mt-2 uppercase text-[12px] md:text-[14px] lg:text-lg font-semibold">
                Zadowolonych klientow
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center" >
            <div className="w-[70px] sm:w-28 lg:w-40 bg-surella-600 aspect-square flex items-center justify-center rotate-45 hover:scale-110 duration-300">
              <div className="-rotate-45 text-white w-full h-full flex items-center justify-center text-4xl sm:text-6xl lg:text-7xl ">
                <FaBuilding />
              </div>
            </div>
            <div className="md:w-32 w-28 flex flex-col justify-center items-center h-full mt-8 md:mt-12 lg:mt-14">
              <h1 className="text-nowrap text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center text-surella-700">
                <CountUp start={0} end={16} duration={6} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={0.4} separator=","/>
              </h1>
              <p className="text-surella-600 text-center text-wrap mt-2 uppercase text-[12px] md:text-[14px] lg:text-lg font-semibold">
                Lat Doświadczenia
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center" >
            <div className="w-[70px] sm:w-28 lg:w-40 bg-surella-600 aspect-square flex items-center justify-center rotate-45 hover:scale-110 duration-300">
              <div className="-rotate-45 text-white w-full h-full flex items-center justify-center text-4xl sm:text-6xl lg:text-7xl ">
                <LuBlinds />
              </div>
            </div>
            <div className="md:w-32 w-28 flex flex-col justify-center items-center h-full mt-8 md:mt-12 lg:mt-14">
              <h1 className="text-nowrap text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center text-surella-700">
                <CountUp start={0} end={6341} duration={3.5} enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={0.4} separator="," useEasing={true} />
                {/* easingFn={"easeOutCubic"} */}
              </h1>
              <p className="text-surella-600 text-center text-wrap mt-2 uppercase text-[12px] md:text-[14px] lg:text-lg font-semibold">
                Zamontowanych rolet
              </p>
            </div>
          </div>
        
      </div>
    </LgWrapper>
  );
};

export default Counter;

//<FaBuilding />
//<FaPeopleGroup />
//<LuBlinds />