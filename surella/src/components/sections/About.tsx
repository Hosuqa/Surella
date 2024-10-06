import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-slate-700  flex h-screen items-center justify-center">
      <div className="h-64 w-36 relative">
        <motion.div className="border-8 border-red-600 absolute h-full w-full text-white text-center pt-40">Siema</motion.div>
        <motion.div className="border-8 border-blue-600 bg-slate-50 absolute	h-full w-full"
          initial={{ height: '100%' }} 
          whileHover={{ height: '0%' }} 
          transition={{ duration: 0.8, ease: 'easeInOut' }} 
        ></motion.div>
      </div>
    </div>
  )
}

export default About