import { XlWrapper } from '@components/global/Wrappers'
import Title from '../global/Title'
import images from '../../images.json'
import { useEffect, useState } from 'react';
import { FaXmark, FaMagnifyingGlass  } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

import texts from '../../texts.json';
gsap.registerPlugin(ScrollTrigger);

type GalleryModalProps = {
    currentSet: string[] | null;
    onClick: () => void;
};

const GalleryModal = ({ currentSet, onClick }: GalleryModalProps) => {
    const [currentPhoto, setCurrentPhoto] = useState(currentSet ? currentSet[0] : "");

    useEffect(() => {
        if (currentSet) {
            gsap.fromTo(
                ".gallery-modal-bg",
                { opacity: 0 },
                { opacity: 1, duration: 0.4 }
            );
            gsap.fromTo(
                ".gallery-modal",
                { scale: 0.6 },
                { scale: 1, duration: 0.4 }
            );
            gsap.fromTo(
                ".thumbnail-image",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, delay: 0.1, duration: 0.2, stagger: 0.05, ease: "power1.out" }
            );
        }
    }, [currentSet]);

    const closeModal = () => {
        gsap.to(".gallery-modal", {
            scale: 0.9,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => onClick(),
        });
        gsap.fromTo(
            ".gallery-modal-bg",
            { opacity: 1 },
            { opacity: 0, duration: 0.3 }
        );
    };

    const navigate = (direction: "prev" | "next") => {
        if (!currentSet) return;
        const currentIndex = currentSet.indexOf(currentPhoto);
        const newIndex =
            direction === "prev"
                ? (currentIndex - 1 + currentSet.length) % currentSet.length
                : (currentIndex + 1) % currentSet.length;
        setCurrentPhoto(currentSet[newIndex]);
    };

    return (
        <div
            role="dialog"
            aria-hidden={!currentSet}
            className={`gallery-modal-bg ${currentSet ? "fixed" : "hidden"} select-none flex z-[40] top-0 right-0 h-full bg-black/90 backdrop-blur-md`}
        >
            <div className="relative w-full h-full flex">
                <motion.div
                whileTap={{ y: -4 }}
                onClick={closeModal}
                className='absolute top-0 right-0 m-4 w-10 h-10 z-50'>                   
                    <FaXmark
                        className="w-full h-full cursor-pointer text-white "
                    />
                </motion.div>
                <div className="w-full h-[88vh] xl:py-10 px-4 sm:px-20 md:px-28 lg:py-8 md:py-6 py-4 flex items-center justify-center">
                    <motion.div
                    whileTap={{ x: -4 }}
                    onClick={() => navigate("prev")}
                    className='w-12 h-12 absolute left-4 md:left-10 z-50'>
                        <IoIosArrowDown
                            className=" text-white h-full w-full rotate-90 cursor-pointer"
                        />
                    </motion.div>
                    <div className="w-full h-full relative gallery-modal">
                        <img
                            src={currentPhoto}
                            loading="lazy"
                            className="object-contain w-full h-full"
                            alt="zdjecie"
                        />
                    </div>
                    <motion.div
                    whileTap={{ x: 4 }}
                    onClick={() => navigate("next")}
                    className='w-12 h-12 absolute right-4 md:right-10 z-50'>
                        <IoIosArrowDown
                            className=" text-white h-full w-full -rotate-90 cursor-pointer "
                        />
                    </motion.div>
                </div>

                <div className="absolute flex bottom-0 w-full h-[12vh] bg-black/70">
                    <div className="w-full h-full py-2 flex items-center overflow-x-auto overflow-y-hidden ">
                        {currentSet &&
                            currentSet.map((image) => (
                                <div
                                key={image}
                                className={`thumbnail-image h-full aspect-square group cursor-pointer ml-3 ${currentPhoto === image ? " opacity-100" : "opacity-50"
                                }`}
                                onClick={() => setCurrentPhoto(image)}
                            >
                                    <div className="w-full h-full relative">
                                        <img
                                            src={image}
                                            className="object-cover w-full h-full duration-300"
                                            alt="zdjecie"
                                            draggable="false"
                                        />
                                        <div className={`bg-black w-full h-full absolute top-0 bottom-0 group-hover:opacity-0 z-50 ${currentPhoto === image ? " opacity-0" : "opacity-50"} duration-300`}></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const Gallery = () => {
    const [currentSet, setCurrentSet] = useState<string[] | null>(null);

    useEffect(() =>{
        (gsap.utils.toArray(".sqareImageLeft") as HTMLElement[]).forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, x: 10 },
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
                { opacity: 0, x: -10 },
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

        gsap.fromTo(
            ".Yline",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".Yline",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <>
            <XlWrapper vertical id="Gallery">
                <div className="w-full">
                    <Title title="Nasze realizacje" subtitle="Zobacz i oceń" />
                    <div className="flex w-full h-full">
                        <div className="sqareImageLeft w-full hidden md:flex flex-col">
                            <div className="sqareImageLeft relative h-[200px] my-10 mr-10 cursor-pointer group overflow-hidden" onClick={() => setCurrentSet(images.rolety)}>
                                <div className='h-full w-full absolute duration-300 bg-black/05 group-hover:bg-black/25'></div>
                                <img src="../images/rolety1.jpg" className="object-cover w-full h-full" />
                                <FaMagnifyingGlass  className="h-8 w-8 object-cover absolute bottom-3 right-3 text-white bg-black/30 group-hover:bg-surella-700/60 p-2 duration-300 group-hover:scale-[1.15]" />
                                <div className='flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 duration-300 h-[37px] w-fit bg-surella-700/60 text-white tracking-wider absolute bottom-[10px] right-[50px]'>
                                    Zobacz więcej
                                </div>
                            </div>
                            <div className=" h-[200px] sqareImageLeft my-10 mr-10 flex flex-col justify-center items-end tracking-wider">
                                <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">
                                    Żaluzje
                                </p>
                                <p className="text-surella-800 text-end">{texts[3].blinds}</p>
                            </div>
                            <div className="sqareImageLeft relative h-[200px] my-10 mr-10 cursor-pointer  group overflow-hidden" onClick={() => setCurrentSet(images.moskitiery)}>
                                <div className='h-full w-full absolute duration-300 bg-black/05 group-hover:bg-black/25'></div>
                                <img src="../images/moskitiera2.jpg" className="object-cover w-full h-full" />
                                <FaMagnifyingGlass  className="h-8 w-8 object-cover absolute bottom-3 right-3 text-white bg-black/30 group-hover:bg-surella-700/60 p-2 duration-300 group-hover:scale-[1.15]" />
                                <div className='flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 duration-300 h-[37px] w-fit bg-surella-700/60 text-white tracking-wider absolute bottom-[10px] right-[50px]'>
                                    Zobacz więcej
                                </div>
                            </div>
                            <div className=" h-[200px] sqareImageLeft my-10 mr-10 flex flex-col justify-center items-end tracking-wider">
                                <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">
                                    Firany
                                </p>
                                <p className="text-surella-800 text-end">{texts[5].curtains}</p>
                            </div>
                            <div className="sqareImageLeft relative h-[200px] my-10 mr-10 cursor-pointer  group overflow-hidden" onClick={() => setCurrentSet(images.oslony)}>
                                <div className='h-full w-full absolute duration-300 bg-black/05 group-hover:bg-black/25'></div>
                                <img src="../images/oslony2.jpg" className="object-cover w-full h-full" />
                                <FaMagnifyingGlass  className="h-8 w-8 object-cover absolute bottom-3 right-3 text-white bg-black/30 group-hover:bg-surella-700/60 p-2 duration-300 group-hover:scale-[1.15]" />
                                <div className='flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 duration-300 h-[37px] w-fit bg-surella-700/60 text-white tracking-wider absolute bottom-[10px] right-[50px]'>
                                    Zobacz więcej
                                </div>
                            </div>
                        </div>
                        <div className="Yline bg-gren-700 w-fit flex flex-col items-center">
                            <div className="bg-surella-600 w-0 h-0 md:h-5 md:w-5"></div>
                            <div className="bg-surella-600 w-0 md:w-1 flex-grow"></div>
                        </div>
                        <div className="sqareImageRight w-full flex flex-col">
                            <div className=" md:h-[200px] w-full sqareImageRight md:my-10 md:ml-10 flex flex-col justify-center items-start tracking-wider">
                                <p className="uppercase text-[25px] md:text-[30px] text-surella-700 font-interBold font-bold md:mb-4 my-4">
                                    Rolety
                                </p>
                                <p className="hidden md:flex text-surella-800 text-start">{texts[2].rollerblinds}</p>
                            </div>
                            <div className=" md:hidden sqareImageLeft relative h-[150px] md:h-[200px] md:my-10 md:ml-10 cursor-pointer group overflow-hidden" onClick={() => setCurrentSet(images.rolety)}>
                                <div className='h-full w-full absolute duration-300 bg-black/05 group-hover:bg-black/25'></div>
                                <img src="../images/rolety1.jpg" className="object-cover w-svw h-full" />
                                <FaMagnifyingGlass  className="h-8 w-8 object-cover absolute bottom-3 right-3 text-white bg-black/30 group-hover:bg-surella-700/60 p-2 duration-300 group-hover:scale-[1.15]" />
                                <div className='flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 duration-300 h-[37px] w-fit bg-surella-700/60 text-white tracking-wider absolute bottom-[10px] right-[50px]'>
                                    Zobacz więcej
                                </div>
                            </div>
                            <div className="md:hidden md:h-[200px] sqareImageLeft md:my-10 md:md:ml-10 flex flex-col justify-center items-start tracking-wider">
                                <p className="uppercase text-[25px] md:text-[30px] text-surella-700 font-interBold font-bold md:mb-4 my-4">
                                    Żaluzje
                                </p>
                                <p className="text-surella-800 text-start hidden">{texts[3].blinds}</p>
                            </div>
                            <div className="sqareImageRight relative h-[150px] md:h-[200px] md:my-10 md:ml-10 cursor-pointer group overflow-hidden" onClick={() => setCurrentSet(images.zaluzje)}>
                                <div className='h-full w-full absolute duration-300 bg-black/05 group-hover:bg-black/25'></div>
                                <img src="../images/zaluzje3.jpg" className="object-cover w-full h-full" />
                                <FaMagnifyingGlass  className="h-8 w-8 object-cover absolute bottom-3 right-3 text-white bg-black/30 group-hover:bg-surella-700/60 p-2 duration-300 group-hover:scale-[1.15]" />
                                <div className='flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 duration-300 h-[37px] w-fit bg-surella-700/60 text-white tracking-wider absolute bottom-[10px] right-[50px]'>
                                    Zobacz więcej
                                </div>
                            </div>
                            <div className=" md:h-[200px] sqareImageRight md:my-10 md:ml-10 flex flex-col justify-center items-start tracking-wider">
                                <p className="uppercase text-[25px] md:text-[30px] text-surella-700 font-interBold font-bold md:mb-4 my-4">
                                    Moskitiery
                                </p>
                                <p className="hidden md:flex text-surella-800 text-start">{texts[4].mosquitonets}</p>
                            </div>
                            <div className="md:hidden sqareImageLeft relative h-[150px] md:h-[200px] md:my-10 md:ml-10 cursor-pointer  group overflow-hidden" onClick={() => setCurrentSet(images.moskitiery)}>
                                <div className='h-full w-full absolute duration-300 bg-black/05 group-hover:bg-black/25'></div>
                                <img src="../images/moskitiera2.jpg" className="object-cover w-full h-full" />
                                <FaMagnifyingGlass  className="h-8 w-8 object-cover absolute bottom-3 right-3 text-white bg-black/30 group-hover:bg-surella-700/60 p-2 duration-300 group-hover:scale-[1.15]" />
                                <div className='flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 duration-300 h-[37px] w-fit bg-surella-700/60 text-white tracking-wider absolute bottom-[10px] right-[50px]'>
                                    Zobacz więcej
                                </div>
                            </div>
                            <div className="md:hidden md:h-[200px] sqareImageLeft md:my-10 md:ml-10 flex flex-col justify-center items-start tracking-wider">
                                <p className="uppercase text-[25px] md:text-[30px] text-surella-700 font-interBold font-bold md:mb-4 my-4">
                                    Firany
                                </p>
                                <p className="hidden text-surella-800 text-end">{texts[5].curtains}</p>
                            </div>
                            <div className="sqareImageRight relative h-[150px] md:h-[200px] md:my-10 md:ml-10 cursor-pointer group overflow-hidden" onClick={() => setCurrentSet(images.firany)}>
                                <div className='h-full w-full absolute duration-300 bg-black/05 group-hover:bg-black/25'></div>
                                <img src="../images/firany8.jpg" className="object-cover w-full h-full" />
                                <FaMagnifyingGlass  className="h-8 w-8 object-cover absolute bottom-3 right-3 text-white bg-black/30 group-hover:bg-surella-700/60 p-2 duration-300 group-hover:scale-[1.15]" />
                                <div className='flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 duration-300 h-[37px] w-fit bg-surella-700/60 text-white tracking-wider absolute bottom-[10px] right-[50px]'>
                                    Zobacz więcej
                                </div>
                            </div>
                            <div className=" md:h-[200px] sqareImageRight  md:my-10 md:ml-10 flex flex-col justify-center items-start tracking-wider">
                                <p className="uppercase text-[25px] md:text-[30px] text-surella-700 font-interBold font-bold md:mb-4 my-4">
                                    Osłony zewnętrzne
                                </p>
                                <p className="hidden md:flex text-surella-800 text-start">{texts[6].covers}</p>
                            </div>
                            <div className="md:hidden sqareImageLeft relative h-[150px] md:h-[200px] md:my-10 md:ml-10 cursor-pointer  group overflow-hidden" onClick={() => setCurrentSet(images.oslony)}>
                                <div className='h-full w-full absolute duration-300 bg-black/05 group-hover:bg-black/25'></div>
                                <img src="../images/oslony2.jpg" className="object-cover w-full h-full" />
                                <FaMagnifyingGlass  className="h-8 w-8 object-cover absolute bottom-3 right-3 text-white bg-black/30 group-hover:bg-surella-700/60 p-2 duration-300 group-hover:scale-[1.15]" />
                                <div className='flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 duration-300 h-[37px] w-fit bg-surella-700/60 text-white tracking-wider absolute bottom-[10px] right-[50px]'>
                                    Zobacz więcej
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </XlWrapper>
            {currentSet && <GalleryModal currentSet={currentSet} onClick={() => setCurrentSet(null)} />}
        </>
    );
}

export default Gallery;