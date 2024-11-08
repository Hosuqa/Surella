import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";
import { hero1, hero2 } from '../../assets';
import hero3 from "/images/rolety5.jpg";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sandbox = () => {
    useEffect(() => {
        (gsap.utils.toArray(".sqareImageLeft") as HTMLElement[]).forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        (gsap.utils.toArray(".sqareImageRight") as HTMLElement[]).forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    delay: 0.1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        // Trigger for the line element
        gsap.fromTo(
            ".line",
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".line",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <XlWrapper vertical id="Contact">
            <div className="w-full h-[full]">
                <Title title="Sandbox tester" subtitle="Test" titleColor="text-red-900" subtitleColor="text-red-800" lineColor="bg-red-800" />
                <div className="flex w-full h-full">
                    <div className="sqareImageLeft g-green-100 w-full flex flex-col">
                        <img src={hero2} className="sqareImageLeft object-cover h-[200px] m-10" />
                        <div className="sqareImageLeft g-green-400 h-fit mx-10 my-10 flex flex-col justify-center items-end">
                            <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">ROLETY</p>
                            <p className="text-surella-800 text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                        </div>
                        <img src={hero1} className="sqareImageLeft object-cover h-[200px] m-10" />
                        <div className="sqareImageLeft g-green-400 h-fit mx-10 my-10 flex flex-col justify-center items-end">
                            <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">ROLETY</p>
                            <p className="text-surella-800 text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                        </div>
                        <img src={hero1} className="sqareImageLeft object-cover h-[200px] m-10" />
                    </div>
                    <div className="line bg-gren-700 w-fit flex flex-col items-center">
                        <div className="bg-surella-600 h-5 w-5"></div>
                        <div className="bg-surella-600 w-1 flex-grow"></div>
                    </div>
                    <div className="sqareImageRight g-green-100 w-full flex flex-col">
                        <div className="sqareImageRight g-green-400 h-fit mx-10 my-10 flex flex-col justify-center items-start">
                            <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">Żaluzje</p>
                            <p className="text-surella-800 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                        </div>
                        <img src={hero3} className="sqareImageRight object-cover h-[200px] m-10" />
                        <div className="sqareImageRight g-green-400 h-fit mx-10 my-10 flex flex-col justify-center items-start">
                            <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">Firany</p>
                            <p className="text-surella-800 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                        </div>
                        <img src={hero3} className="sqareImageRight object-cover h-[200px] m-10" />
                        <div className="sqareImageRight g-green-400 h-fit mx-10 my-10 flex flex-col justify-center items-start">
                            <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">Firany</p>
                            <p className="text-surella-800 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                        </div>
                    </div>
                </div>
            </div>
        </XlWrapper>
    );
}

export default Sandbox;
