import Title from '../global/Title'
 
const About = () => {
  return (
    <>
      <div className="bg-white flex h-screen">
        <Title title='Poznaj naszą firmę' subtitle='O nas'></Title>
      </div>
    </>
  )
}

export default About

{/* 
  <motion.div className="border-8 border-red-600 absolute h-full w-full text-white text-center pt-40">Siema</motion.div>
  <motion.div className="border-8 border-blue-600 bg-slate-50 absolute	h-full w-full"
    initial={{ height: '100%' }} 
    animate={{ height: '0%' }} 
    transition={{ delay: 1, duration: 0.8, ease: 'easeInOut' }}>
  </motion.div>
 */}