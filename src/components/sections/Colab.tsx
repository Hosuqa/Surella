import { useState } from "react";
import { XlWrapper } from "@components/global/Wrappers";
import Title from '../global/Title';
import { IoIosArrowDown } from "react-icons/io";
import { rollo } from '../../assets';

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
        <IoIosArrowDown className={`w-10 h-10 text-white transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <div className="p-4 bg-surella-500 text-white text-[16px]">
          {description}
        </div>
      )}
    </div>
  );
};

const Colab = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBox = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <XlWrapper vertical id="Colab">
      <Title title='Poznaj Surelle' subtitle='Trochę o nas' />
      <div className="w-full bg-slate-100 flex">
        <div className="flex flex-col w-full bg-slate-200 gap-2">
          <ColabBox
            title="CIEZKO MI SIE ROBI"
            description="CIEZKO MI SIE ROBI"
            isOpen={openIndex === 0}
            onClick={() => toggleBox(0)}
          />
          <ColabBox
            title="CIEZKO MI SIE ROBI"
            description="CBIC"
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
          <img src={rollo} className="w-full" alt=""/>
        </div>
      </div>
    </XlWrapper>
  );
};

export default Colab;
