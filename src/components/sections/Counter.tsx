import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Component, useEffect } from "react";
import { XlWrapper } from '@components/global/Wrappers'

const Counter = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
    useEffect(() => {
      const animation = animate(count, 523650, { duration: 2 });
  
      return animation.stop;
    }, []);
  return (
    <XlWrapper>
     <div className=" mt-44 h-screen bg-slate-400">
        
     </div>
    </XlWrapper>
  );
};

export default Counter;
