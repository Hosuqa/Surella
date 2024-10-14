import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Component, useEffect } from "react";
import { LgWrapper } from '@components/global/Wrappers'

const Counter = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
    useEffect(() => {
      const animation = animate(count, 523650, { duration: 2 });
  
      return animation.stop;
    }, []);
  return (
    
     <div className=" mt-44 w-full h-screen bg-slate-100">
        
     </div>
  );
};

export default Counter;
