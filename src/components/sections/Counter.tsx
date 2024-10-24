import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { LgWrapper } from '@components/global/Wrappers'
import { FaBuilding } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuBlinds } from "react-icons/lu";



const Counter = () => {
  const counts = [
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
  ];
  
  const roundedCounts = counts.map(count => useTransform(count, Math.round));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const targetValues = [3536, 16, 7245]; 
      counts.forEach((count, index) => {
        animate(count, targetValues[index], { 
          duration: 3.5,
          ease: [0, 0, 0, 1]
        });
      });
    }
  }, [inView, counts]);

  const items = [
    { icon: <FaBuilding />, text: "Zadowolonych klientów" },
    { icon: <FaPeopleGroup />, text: "Doświadczenia na rynku" },
    { icon: <LuBlinds />, text: "Zamontowanych rolet" },
  ];

  return (
    <LgWrapper vertical>
      <div ref={ref} className="w-full h-full flex justify-around">
        {roundedCounts.map((rounded, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="w-[70px] sm:w-28 lg:w-40 bg-surella-600 aspect-square flex items-center justify-center rotate-45">
              <div className="-rotate-45 text-white w-full h-full flex items-center justify-center text-4xl sm:text-6xl lg:text-7xl">
                {items[index].icon}
              </div>
            </div>
            <div className="sm:w-32 flex flex-col justify-center items-center h-full mt-8 md:mt-12 lg:mt-14">
              <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-bold flex justify-center text-surella-700">
                {rounded}
              </motion.h1>
              <p className="text-surella-600 text-center text-wrap mt-2 uppercase text-[12px] md:text-[14px] lg:text-lg font-semibold">
                {items[index].text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LgWrapper>
  );
};

export default Counter;

//<FaBuilding />
//<FaPeopleGroup />
//<LuBlinds />