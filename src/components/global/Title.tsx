import { styles } from "../../styles";
import { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
    title: string,
    subtitle: string,
    titleColor?: string,
    subtitleColor?: string;
    lineColor?: string;
    className?: string
}

gsap.registerPlugin(ScrollTrigger);

const Title = ({ title, subtitle, className, titleColor="text-surella-600", subtitleColor='text-surella-500', lineColor='bg-surella-500' }: Props) => {
  
    useEffect(() => {
        gsap.fromTo(
          ".subTitle",
          {Opacity:0, x:-20},
          {
          Opacity:1,
          x:0,
          duration: 0.4,        
          scrollTrigger: {
            trigger: ".subTitle",
            start: "top 80%",
            toggleActions: "play none none none",
        },
          }
        );
        gsap.fromTo(
            ".line",
            {width:"0%"},
            {
            width:"100%",
            delay:0.1,
            duration: 1.5,        
            scrollTrigger: {
              trigger: ".subTitle",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            }
          );
          gsap.fromTo(
            ".Title",
            {Opacity:0},
            {
            delay:0.4,
            Opacity:1,
            duration: 1,        
            scrollTrigger: {
              trigger: ".subTitle",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            }
          );
    },
   []);
  
    return (
    <>
        <div className={`flex w-full h-fit mb-16 ${className}`}>
            <div className="flex flex-col">
                <div className="flex items-center h-full">
                    <p className={`${styles.titleSubTitle} subTitle basis-30 text-nowrap text-center h-full uppercase ${subtitleColor} font-interExtraBold `}>
                        {subtitle}
                    </p>
                    <div className={`line h-[4px] w-0 ml-4 ${lineColor} opacity-90 mx-6`}></div>
                </div>
                <p className={`${styles.titleHead} ${titleColor} Title uppercase  text-nowrap font-interExtraBold font-bold`}>
                    {title}
                </p>
            </div>
        </div>
    </>
  )
}

export default Title