import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
      const targetValues = [536, 2009, 7245]; 
      counts.forEach((count, index) => {
        animate(count, targetValues[index], { 
          duration: 5,
          ease: [0, 0, 0, 1]
        });
      });
    }
  }, [inView, counts]);

  return (
    <div className="mt-44 w-full h-[600px] bg-slate-200 flex items-center justify-center">
      <motion.div ref={ref} className="flex gap-10 ">
        {roundedCounts.map((rounded, index) => (
          <motion.h1 key={index} className="text-4xl font-bold flex justify-center">{rounded}</motion.h1>
        ))}
      </motion.div>
    </div>
  );
};

export default Counter;
