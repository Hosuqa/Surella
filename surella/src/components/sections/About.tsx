import Title from '../global/Title'
import { XlWrapper } from '@components/global/Wrappers'
 
const About = () => {
  return (
    <XlWrapper vertical>
      <div className="bg-white flex h-screen flex-col gap-10">
        <Title title='Poznaj Surelle' subtitle='Trochę o nas'></Title>
        <Title title='Poznaj naszą firmę' subtitle='O nas'></Title>
        <Title title='AW JNAFDBJA AKWNE A KAND' subtitle='ADDADDA AF A FAF A'></Title>

      </div>
    </XlWrapper>
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