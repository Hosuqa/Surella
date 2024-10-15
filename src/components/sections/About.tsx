import Title from '../global/Title'
import { LgWrapper } from '@components/global/Wrappers'
import { styles } from "../../styles";
//icons
import { FaToolbox } from "react-icons/fa6"; 
import { FaHandshake } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import React, { ReactElement } from 'react';
import texts from '../../texts.json'


 type Props = {
   title: string;
   icon: ReactElement;
 };
const IconBox = ({title, icon}: Props) => {
  return (
    <div className=' bg-surella-500 text-white w-40 h-40 lg:w-full lg:h-full flex flex-col justify-center items-center'>
      {React.cloneElement(icon, { className: 'w-16 h-16' })}
      <p className='pt-4 uppercase font-bold text-[18px] tracking-wider'>{title}</p>
    </div>
  );
}

const About = () => {
  const description = texts[0]?.companyDescription;


  return (
    <LgWrapper vertical>
      <div className="bg-white w-full flex-col">
        <Title title='Poznaj Surelle' subtitle='Trochę o nas'></Title>
        <div className='flex lg:flex-row flex-col w-full lg:h-[350px] gap-3'>
          <div className='lg:w-3/5 w-full h-full flex justify-center items-center bg-slate-50'>
            <p className={`${styles.aboutText} h-full flex items-center text-surella-600 px-8 leading-8 lg:leading-10 text-left `}>{description}</p>
          </div>
          <div className='lg:w-2/5 w-full h-96 lg:h-full gap-3 flex lex-wrap lg:flex-nowrap lg:flex-col aspect-square lg:items-center justify-center '>
            <div className='flex flex-wrap justify-end lg:justify-start mr-1 md:mr-0 lg:flex-nowrap lg:flex lg:h-full lg:w-full gap-3'>
              <IconBox title='Wycena' icon={<FaToolbox/>}/>
              <IconBox title='Montaż' icon={<FaTools />}/>
            </div>
            <div className='flex flex-wrap justify-start ml-1 md:ml-0 lg:flex-nowrap lg:flex lg:h-full lg:w-full gap-3'>
              <IconBox title='Doradztwo' icon={<FaHandshake />}/>
              <IconBox title='Sprzedaż' icon={<FaMoneyCheckDollar />}/>
            </div>
          </div>
        </div>
      </div>

    </LgWrapper>
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