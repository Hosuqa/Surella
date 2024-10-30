import { useState } from "react";
import { XlWrapper } from "@components/global/Wrappers";
import Title from '../global/Title';
import { IoIosArrowDown } from "react-icons/io";
import { rollo, rollo2 } from '../../assets';

type Props = {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
};

const ColabBox = ({ title, description, isOpen, onClick }: Props) => {
  return (
    <div className="flex flex-col h-full">
      <div 
        className='grow flex w-full bg-surella-600 py-4 px-8 items-center justify-between cursor-pointer'
        onClick={onClick}
      >
        <p className='uppercase font-bold text-white text-[18px] tracking-wider'>{title}</p>
        <IoIosArrowDown className={`w-10 h-10 text-white transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
      </div>
      <div>
        {isOpen && (
          <div className="px-8 pb-8 bg-surella-600 text-white text-[16px] leading-relaxed tracking-wide text-justify">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

const Colab = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBox = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const rollos = [rollo, rollo2, rollo2, rollo2];

  return (
    <XlWrapper vertical id="Colab">
      <Title title='Poznaj Surelle' subtitle='Trochę o nas' />
      <div className="w-full flex gap-4">
        <div className="flex flex-col w-full gap-4">
          <ColabBox
            title="CIEZKO MI SIE ROBI"
            description="CIEZKO MI SIE ROBI"
            isOpen={openIndex === 0}
            onClick={() => toggleBox(0)}
          />
          <ColabBox
            title="CIEZKO MI SIE ROBI"
            description="Lorem ipsum dolor sit amet consectetur  elit. Lorem ipsum dolor sit amet  adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  ipsum dolor sit amet consectetur  elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            isOpen={openIndex === 1}
            onClick={() => toggleBox(1)}
          />
          <ColabBox
            title="CIEZKO MI SIE ROBI"
            description="sd"
            isOpen={openIndex === 2}
            onClick={() => toggleBox(2)}
          />
          <ColabBox
            title="CIEZKO MI SIE ROBI"
            description="sd"
            isOpen={openIndex === 3}
            onClick={() => toggleBox(3)}
          />
        </div>
        <div className="w-full bg-slate-300">
        {openIndex !== null ? (
            <img src={rollos[openIndex]} className="w-full h-full object-cover" alt={rollos[openIndex]} />
          ) : (
            <img src={rollo} className="w-full h-full object-cover" alt="Deafult" />
          )}
        </div>
      </div>
    </XlWrapper>
  );
};

export default Colab;
