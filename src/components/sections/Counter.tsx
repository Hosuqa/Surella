import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { XlWrapper } from '@components/global/Wrappers'
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
          ease: [0, 0.5, 0.7, 1]
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
    <XlWrapper vertical>
      <div ref={ref} className="w-full h-full flex justify-around">
        {roundedCounts.map((rounded, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="w-40 h-40 bg-surella-700 aspect-square flex items-center justify-center rotate-45">
              <div className="-rotate-45 text-white w-full h-full flex items-center justify-center text-7xl">
                {items[index].icon}
              </div>
            </div>
            <div className=" w-32 flex flex-col justify-center items-center h-full mt-14">
              <motion.h1 className="text-4xl font-bold flex justify-center text-surella-700">
                {rounded}
              </motion.h1>
              <p className="text-surella-700 text-center text-wrap mt-1 uppercase text-lg font-semibold">
                {items[index].text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </XlWrapper>
  );
};

export default Counter;

//<FaBuilding />
//<FaPeopleGroup />
//<LuBlinds />