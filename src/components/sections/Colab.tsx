import { useState, useEffect } from "react";
import { XlWrapper } from "@components/global/Wrappers";
import { styles } from "../../styles";
import Title from '../global/Title';
import { IoIosArrowDown } from "react-icons/io";
import { rollo, rollo2, rollo3, rollo4 } from '../../assets';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
};

const ColabBox = ({ title, description, isOpen, onClick }: Props) => {
  return (
    <div className="txtbox">
      <div className={` duration-300 overflow-hidden border-surella-600 border-[2px] ${isOpen ? "h-[200px] xl:h-[300px]" : "h-[60px] xl:h-[84px]"} `}>
        <div 
          className='flex w-full h-[60px] xl:h-[84px] bg-surella-600 group py-2 px-4 lg:py-4 lg:px-8 justify-between items-center cursor-pointer'
          onClick={onClick}
        >
          <p className={`${styles.colabtitle} font-semibold text-white text-[18px] tracking-wider`}>{title}</p>
          <IoIosArrowDown className={`w-6 h-6 group-hover:scale-125 text-white transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
        <div className={`${styles.colabtext} px-8 py-2 text-surella-800 text-[16px] leading-relaxed tracking-wide text-justify duration-200 `}>
          {description}
        </div>
      </div>
    </div>
  );
};

const Colab = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleBox = (index: number) => {
    setOpenIndex(index);
  };

  const rollos = [rollo, rollo2, rollo3, rollo4];


  useEffect(() => {
    gsap.fromTo(
        ".txtbox",
        { opacity: 0, x: -20 },
        {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.20,
            scrollTrigger: {
                trigger: ".txtbox",
                start: "top 90%",
                toggleActions: "play none none none",
            },
        }
    );
    gsap.fromTo(
      ".picbox",
      { opacity: 0, x: 20 },
      {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.25,
          scrollTrigger: {
              trigger: ".picbox",
              start: "top 90%",
              toggleActions: "play none none none",
          },
      }
  );
}, []);

  return (
    <XlWrapper vertical id="Colab">
      <Title title='Poznaj Surelle' subtitle='Trochę o nas' />
      <div className="w-full flex flex-col-reverse xl:flex-row gap-4 ">
        <div className="txtbox flex flex-col w-full gap-4">
          <ColabBox
            title="Poznaj Surelle od dobrej storny"
            description="CIEZKO MI SIE ROBI"
            isOpen={openIndex === 0}
            onClick={() => toggleBox(0)}
          />
          <ColabBox
            title="Dobrej Surelle dobrej dobrej"
            description="Lorem ipsum dolor sit amet consectetur elit. Lorem ipsum dolor sit amet  adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  ipsum dolor sit amet consectetur  elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            isOpen={openIndex === 1}
            onClick={() => toggleBox(1)}
          />
          <ColabBox
            title="Poznaj Surelle od dobrej"
            description="Pierwszym projektem, w którym wystąpi powracający do aktorstwa Armie Hammer, będzie western Frontier Crucible"
            isOpen={openIndex === 2}
            onClick={() => toggleBox(2)}
          />
          <ColabBox
            title="Poznaj Surelle dobrej strony"
            description="Gwiazdą westernu został Thomas Jane . W obsadzie Frontier Cruciblesą również Myles Clohessy"
            isOpen={openIndex === 3}
            onClick={() => toggleBox(3)}
          />
        </div>
        <div className="picbox w-full h-[240px] md:h-[400px] xl:h-[600px]">
            <img src={rollos[openIndex]} className="w-full h-full object-cover" alt={`Image ${openIndex}`} />
        </div>
      </div>
    </XlWrapper>
  );
};

export default Colab;
