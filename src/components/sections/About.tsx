import Title from '../global/Title'
import { XlWrapper } from '@components/global/Wrappers'
import { styles } from "../../styles";
//icons
import { FaToolbox } from "react-icons/fa6"; 
import { FaHandshake } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import React, { ReactElement } from 'react';
import texts from '../../texts.json'


 type Props = {
   title: string;
   icon: ReactElement;
 };
const IconBox = ({title, icon}: Props) => {
  return (
    <div className=' bg-slate-400 aspect-square'>
      {React.cloneElement(icon, { className: 'w-10 h-10' })}
      <p>{title}</p>
    </div>
  );
}

const About = () => {
  const description = texts[0]?.companyDescription;


  return (
    <XlWrapper vertical>
      <div className="bg-white flex h-[40vh] w-full flex-col">
        <Title title='Poznaj Surelle' subtitle='Trochę o nas'></Title>
        <div className='flex w-full h-full'>
          <div className='w-1/2 h-full bg-slate-100'>
          <p className={`${styles.sectionSubText} text-surella-600 text-left p-8`}>{description}</p>
          </div>
          <div className='w-1/2 h-full bg-slate-300 grid grid-cols-2 aspect-square place-items-center gap-6 px-8 py-8'>
            <IconBox title='Doradztwo' icon={<FaToolbox/>}/>
            <IconBox title='Wycena' icon={<FaHandshake />}/>
            <IconBox title='Doractwo' icon={<FaTools />}/>
            <IconBox title='Montaż' icon={<FaShoppingCart />}/>
          </div>
        </div>
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

         {/* <div className='flex flex-row w-full h-fit'>
            <div className='w-1/2 h-full'>
                <p className={`${styles.sectionSubText} text-surella-600 text-left p-8`}>{description}</p>
            </div>
            <div className='w-1/2 grid grid-cols-2 aspect-square place-items-center'>
                  <IconBox title='Doradztwo' icon={<FaToolbox/>}/>
                  <IconBox title='Wycena' icon={<FaHandshake />}/>
                  <IconBox title='Doractwo' icon={<FaTools />}/>
                  <IconBox title='Montaż' icon={<FaShoppingCart />}/>
            </div>
        </div> */}

        // type Props = {
//   title: string;
//   icon: ReactElement;
// };
// const IconBox = ({ title, icon }: Props) => {
//   return (
//     <div className=' flex w-fit h-fit acspect-square items-center justify-center'>
//       <div className='flex flex-col w-28 h-28 bg-surella-500 text-white items-center justify-center p-6'>
//       {React.cloneElement(icon, { className: 'w-10 h-10' })}
//         <p>{title}</p>
//       </div>
//     </div>
//   );
// }