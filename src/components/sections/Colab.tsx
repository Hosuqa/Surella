import { useState } from "react";
import { XlWrapper } from "@components/global/Wrappers";
import { styles } from "../../styles";
import Title from '../global/Title';
import { IoIosArrowDown } from "react-icons/io";
import { rollo, rollo2, rollo3, rollo4 } from '../../assets';
import "./About.css"
type Props = {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
};

const ColabBox = ({ title, description, isOpen, onClick }: Props) => {
  return (
    <div className="flex flex-col h-full bg-red-700">
      <div 
        className='grow flex w-full bg-surella-600 py-2 px-4 lg:py-4 lg:px-8 items-center justify-between cursor-pointer'
        onClick={onClick}
      >
        <p className={`${styles.colabtitle} font-bold text-white text-[18px] tracking-wider`}>{title}</p>
        <IoIosArrowDown className={`w-6 h-6 lg:w-10 lg:h-10 text-white transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
      </div>
        {isOpen && (
          <div className={`${styles.colabtext} toggle -translate-y-[1px] px-8 pb-8 bg-surella-600 text-white text-[16px] leading-relaxed tracking-wide text-justify`}>
            {description}
              {/* -translate-y-[1px] - fix border na ipad */}
          </div>
        )}
    </div>
  );
};

const Colab = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lastOpenIndex, setLastOpenIndex] = useState<number | null>(null);

  const toggleBox = (index: number) => {
    setOpenIndex(prevIndex => {
      if (prevIndex === index) {
        setLastOpenIndex(index); // Retain last clicked index when box is closed
        return null;
      }
      return index;
    });
  };

  const rollos = [rollo, rollo2, rollo3, rollo4];
  const currentIndex = openIndex !== null ? openIndex : lastOpenIndex;

  return (
    <XlWrapper vertical id="Colab">
      <Title title='Poznaj Surelle' subtitle='Trochę o nas' />
      <div className="w-full flex flex-col-reverse xl:flex-row gap-4 ">
        <div className="flex flex-col w-full gap-4">
          <ColabBox
            title="Poznaj Surelle od dobrej storny"
            description="CIEZKO MI SIE ROBI"
            isOpen={openIndex === 0}
            onClick={() => toggleBox(0)}
          />
          <ColabBox
            title="Dobrej Surelle dobrej dobrej dobrej"
            description="Lorem ipsum dolor sit amet consectetur  elit. Lorem ipsum dolor sit amet  adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  ipsum dolor sit amet consectetur  elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            isOpen={openIndex === 1}
            onClick={() => toggleBox(1)}
          />
          <ColabBox
            title="Poznaj Surelle od dobrej"
            description="Pierwszym projektem, w którym wystąpi powracający do aktorstwa Armie Hammer, będzie western Frontier Crucible" isOpen={openIndex === 2}
            onClick={() => toggleBox(2)}
          />
          <ColabBox
            title="Poznaj Surelle dobrej strony"
            description="Gwiazdą westernu został Thomas Jane . W obsadzie Frontier Cruciblesą również Myles Clohessy" isOpen={openIndex === 3}
            onClick={() => toggleBox(3)}
          />
        </div>
        <div className="w-full h-[240px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] bg-slate-300">
          {currentIndex !== null ? (
            <img src={rollos[currentIndex]} className="w-full h-full object-cover" alt={`Image ${currentIndex}`} />
          ) : (
            <img src={rollo} className="w-full h-full object-cover" alt="Default" />
          )}
        </div>
      </div>
    </XlWrapper>
  );
};

export default Colab;
