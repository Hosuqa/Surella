import { styles } from "../../styles";
import { useEffect, useRef } from 'react';
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

const Title = ({ title, subtitle, className, titleColor = "text-surella-600", subtitleColor = 'text-surella-500', lineColor = 'bg-surella-500' }: Props) => {
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (subtitleRef.current && lineRef.current && titleRef.current) {
            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                lineRef.current,
                { width: "0%" },
                {
                    width: "100%",
                    delay: 0.1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                titleRef.current,
                { opacity: 0 },
                {
                    delay: 0.4,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <div className={`flex w-full h-fit mb-16 ${className}`}>
            <div className="flex flex-col">
                <div className="flex items-center h-full">
                    <p
                        ref={subtitleRef}
                        className={`${styles.titleSubTitle} basis-30 text-nowrap text-center h-full uppercase ${subtitleColor} font-interExtraBold`}
                    >
                        {subtitle}
                    </p>
                    <div
                        ref={lineRef}
                        className={`wline h-[4px] w-0 ml-4 ${lineColor} opacity-90 mx-6`}
                    ></div>
                </div>
                <p
                    ref={titleRef}
                    className={`${styles.titleHead} ${titleColor} uppercase text-nowrap font-interExtraBold font-bold`}
                >
                    {title}
                </p>
            </div>
        </div>
    );
};

export default Title;
