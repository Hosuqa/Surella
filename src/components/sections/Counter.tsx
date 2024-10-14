import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Component, useEffect } from "react";

const Counter = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
    useEffect(() => {
      const animation = animate(count, 523650, { duration: 2 });
  
      return animation.stop;
    }, []);
  return (
    <>
     <div>
        {rounded}
     </div>
    </>
  );
};

export default Counter;
