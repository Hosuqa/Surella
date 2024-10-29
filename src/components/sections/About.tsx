import Title from '../global/Title'
import { XlWrapper } from '@components/global/Wrappers'
import { styles } from "../../styles";
import './About.css';

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
 //react-parallax-tilt = > zmiana div na Titlr + zmienne + plik About.css z paralax_out paralax_in
const IconBox = ({title, icon}: Props) => {
  return (
    <div
    className='paralax_out bg-surella-500 text-white w-full h-full min-w-[160px] flex flex-col justify-center items-center p-6'>
      {React.cloneElement(icon, { className: 'paralax_in md:w-16 md:h-16 w-10 h-10' })}
      <p className='paralax_in pt-4 uppercase font-bold text-[18px] tracking-wider'>{title}</p>
    </div>
  );
}

const About = () => {
  const description = texts[0]?.companyDescription;


  return (
    <XlWrapper id='About' vertical >
      <div  className="bg-white w-full flex-col">
        <Title title='Poznaj Surelle' subtitle='Trochę o nas'></Title>
        <div className='flex xl:flex-row flex-col w-full gap-4'>
          <div className='w-full xl:w-3/5 h-full flex order-2 xl:order-1'>
            <div className='w-full h-full bg-slate-100 font-[400] p-16'>
              <p className={`${styles.aboutText} tracking-wide text-surella-700 leading-relaxed text-justify`}>{description}</p>
            </div>
          </div>
          <div className='w-full xl:w-2/5 gap-4 flex flex-col items-center justify-center xl:order-2 order-1'>
            <div className='flex h-full w-full gap-4'>
              <IconBox title='Ekspertyza' icon={<FaToolbox/>}/>
              <IconBox title='Montaż' icon={<FaTools />}/>
            </div>
            <div className='flex h-full w-full gap-4'>
              <IconBox title='Doradztwo' icon={<FaHandshake />}/>
              <IconBox title='Sprzedaż' icon={<FaMoneyCheckDollar />}/>
            </div>
          </div>
        </div>
      </div>
    </XlWrapper>
  )
}
export default About