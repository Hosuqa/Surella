/* eslint-disable @typescript-eslint/no-explicit-any */

import { XlWrapper } from '@components/global/Wrappers'
import Title from '../global/Title'
import images from '../../images.json'
import { useEffect, useState } from 'react';
import { FaXmark, FaMagnifyingGlass  } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GalleryModalProps = {
    currentSet: string[] | null;
    onClick: () => void;
};

const GalleryModal = ({ currentSet, onClick }: GalleryModalProps ) => {

    const [currentPhoto, setCurrentPhoto] = useState(currentSet ? currentSet[0] : "");
    
    useEffect(() => {
        if (currentSet != null) setCurrentPhoto(currentSet[0]);
    }, [currentSet]);

    return (
        <div className={`${currentSet ? "fixed" : "hidden"} flex z-[9999] top-0 right-0 w-[100vw] h-[100vh] bg-black/90 backdrop-blur-md`}>
            <div className='relative w-full h-full flex'>
                <FaXmark className='absolute top-4 right-4 xl:right-2 w-[5vw] h-[5vh] cursor-pointer text-white' onClick={onClick}/>
                <div className='w-full h-[90vh] xl:py-20 xl:px-72 lg:py-16 lg:px-48 md:py-12 md:px-24 py-10 px-8'>
                    <div className=" w-full h-full relative">
                        <img src={currentPhoto} className="object-contain w-full h-full" alt="zdjecie" />
                    </div>
                </div>
            
                <div className='absolute flex bottom-14 md:bottom-0 w-full h-[10vh] bg-black/70'>
                    <div className='w-full h-full p-2 gap-2 flex px-4'>
                        { currentSet && currentSet.map((image) => (
                            <div className='h-full aspect-square overflow-hidden group cursor-pointer' onClick={ () =>  setCurrentPhoto(image) }>
                                <div className='w-full h-full relative'>
                                    <img src={image} className='object-cover w-full h-full group-hover:scale-[1.2] duration-300'/>
                                    <div className="bg-black w-full h-full absolute top-0 bottom-0 group-hover:opacity-70 opacity-0 duration-300"></div>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}




const Gallery = () => {

    const [currentSet, setCurrentSet] = useState<string[] | null>(null);

    useEffect(() =>{
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

        gsap.fromTo(
            ".line",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".line",
                    start: "top 20%",
                    toggleActions: "play none none none",
                },
            }
        );
    })

    return (
        <>
            <XlWrapper vertical id="Gallery">
                <div className="w-full h-[full]">
                    <Title title="Nasze realizacje" subtitle="Zobacz i oceń" />
                    <div className="flex w-full h-full">
                        <div className="sqareImageLeft w-full flex flex-col">
                            <div className="relative h-[200px] m-10 cursor-pointer" onClick={() => setCurrentSet(images.rolety)}>
                                <img src="../images/rolety1.jpg" className="object-cover w-full h-full" />
                                <FaMagnifyingGlass  className="h-10 w-10 object-cover absolute bottom-3 right-3 text-white text-lg bg-black/30 p-2" />
                            </div>
                            <div className=" h-[200px] sqareImageLeft mx-10 my-10 flex flex-col justify-center items-end tracking-wider">
                                <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">Żaluzje</p>
                                <p className="text-surella-800 text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                            </div>
                            <img src="../images/moskitiera2.jpg" onClick={ () => setCurrentSet(images.moskitiery)} className="sqareImageLeft object-cover h-[200px] m-10" />
                            <div className=" h-[200px] sqareImageLeft mx-10 my-10 flex flex-col justify-center items-end tracking-wider">
                                <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">Firany</p>
                                <p className="text-surella-800 text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                            </div>
                            <img src="../images/oslony2.jpg" onClick={ () => setCurrentSet(images.oslony)} className="sqareImageLeft object-cover h-[200px] m-10" />
                        </div>
                        <div className="line bg-gren-700 w-fit flex flex-col items-center">
                            <div className="bg-surella-600 h-5 w-5"></div>
                            <div className="bg-surella-600 w-1 flex-grow"></div>
                        </div>
                        <div className="sqareImageRight w-full flex flex-col">
                            <div className=" h-[200px] sqareImageRight mx-10 my-10 flex flex-col justify-center items-start tracking-wider">
                                <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">Rolety</p>
                                <p className="text-surella-800 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                            </div>
                            <img src="../images/zaluzje3.jpg" onClick={ () => setCurrentSet(images.zaluzje)} className="sqareImageRight object-cover h-[200px] m-10" />
                            <div className=" h-[200px] sqareImageRight mx-10 my-10 flex flex-col justify-center items-start tracking-wider">
                                <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">Moskitiera</p>
                                <p className="text-surella-800 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
                            </div>
                            <img src="../images/firany8.jpg" onClick={ () => setCurrentSet(images.firany)} className="sqareImageRight object-cover h-[200px] m-10" />
                            <div className=" h-[200px] sqareImageRight  mx-10 my-10 flex flex-col justify-center items-start tracking-wider">
                                <p className="uppercase text-[30px] text-surella-700 font-interBold font-bold mb-4">Osłony zewnętrzne</p>
                                <p className="text-surella-800 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur neque accusantium corrupti! Id illo nostrum molestias quod, modi fuga culpa corrupti accusantium tempora libero natus odio praesentium, aut optio!</p>
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

// <GalleryModal currentSet={currentSet} onClick={() => setCurrentSet(null)}/>
// <div  className='bg-white w-full h-fit '>
//     <XlWrapper id="Gallery">
//         <Title title="Nasze realizacje" subtitle="Zobacz i oceń" />
//         <div className="relative cursor-pointer bg-black h-[100px] md:h-[200px] w-full flex flex-col justify-center shadow-xl group mb-6" onClick={ () => setCurrentSet(images.rolety)} >
//             <img
//                 src="../images/rolety1.jpg"
//                 className=" object-cover w-full h-full group-hover:opacity-80 opacity-50 duration-300"
//                 alt="hero"
//             />
//             <div className='w-full h-full absolute flex flex-col justify-between group'>
//                 <div className='flex w-full h-[50px] items-center'>
//                     <div className='w-full h-[2px] bg-white/30 mx-8 group-hover:opacity-0 duration-300'></div>
//                 </div>
//                 <div className='flex w-full items-center'>
//                     <p className={`${styles.galleryText} w-fit font-[700] uppercase tracking-wider text-white pl-8 pr-4 my-3 group-hover:tracking-widest duration-300`}>
//                         Rolety
//                     </p>
//                     <div className='w-full h-[2px] bg-white/30 mr-8 group-hover:opacity-0 duration-300'></div>
//                 </div>
//             </div>
//         </div>
//         <div className={` flex flex-col md:grid md:grid-cols-2 w-full h-full gap-5 items-center justify-self-center justify-center text-surella-700 font-[500] tracking-wider pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28`}>
//             <GalleryComp image="../images/zaluzje3.jpg" title='Żaluzje' onClick={ () => setCurrentSet(images.zaluzje)}/>
//             <GalleryComp image="../images/moskitiera2.jpg" title='Moskitiery' onClick={ () => setCurrentSet(images.moskitiery)}/>
//             <GalleryComp image="../images/firany8.jpg" title='Firany' onClick={ () => setCurrentSet(images.firany)}/>
//             <GalleryComp image="../images/oslony2.jpg" title='Osłony zewnętrzne' onClick={ () => setCurrentSet(images.oslony)}/>
//         </div>
//     </XlWrapper>
// </div>


// const GalleryComp = ({image, title, onClick }: Props) => {
//     return (
//         <div className="relative cursor-pointer bg-black h-[100px] md:h-[200px] w-full flex flex-col justify-center shadow-xl group" onClick={onClick}>
//             <img
//                 src={image}
//                 className=" object-cover w-full h-full group-hover:opacity-80 opacity-50 duration-300"
//                 alt="hero"
//             />
//             <div className='w-full h-full absolute flex flex-col justify-between group'>
//                 <div className='flex w-full h-[50px] items-center'>
//                     <div className='w-full h-[2px] bg-white/30 mx-8 group-hover:opacity-0 duration-300'></div>
//                 </div>
//                 <div className='flex w-full items-end'>
//                     <p className={`${styles.galleryText} w-fit font-[700] uppercase tracking-wider text-white pl-8 pr-4 my-3 group-hover:tracking-widest duration-300 `}>
//                         {title}
//                     </p>
//                     <div className='w-full h-[2px] mb-[25px] bg-white/30 mr-8 group-hover:opacity-0 duration-300'></div>
//                 </div>
//             </div>
//         </div>
//     );
// }