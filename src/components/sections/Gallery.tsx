/* eslint-disable @typescript-eslint/no-explicit-any */

import { XlWrapper } from '@components/global/Wrappers'
import Title from '../global/Title'
import { styles } from "../../styles";
import images from '../../images.json'
import { useEffect, useState } from 'react';
import { FaXmark } from "react-icons/fa6";

type Props = {
    image: string;
    title: string;
    onClick: () => void;
};

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


const GalleryComp = ({image, title, onClick }: Props) => {
    return (
        <div className="relative cursor-pointer bg-black h-[100px] md:h-[200px] w-full flex flex-col justify-center shadow-xl group" onClick={onClick}>
            <img
                src={image}
                className=" object-cover w-full h-full group-hover:opacity-80 opacity-50 duration-300"
                alt="hero"
            />
            <div className='w-full h-full absolute flex flex-col justify-between group'>
                <div className='flex w-full h-[50px] items-center'>
                    <div className='w-full h-[2px] bg-white/30 mx-8 group-hover:opacity-0 duration-300'></div>
                </div>
                <div className='flex w-full items-end'>
                    <p className={`${styles.galleryText} w-fit font-[700] uppercase tracking-wider text-white pl-8 pr-4 my-3 group-hover:tracking-widest duration-300 `}>
                        {title}
                    </p>
                    <div className='w-full h-[2px] mb-[25px] bg-white/30 mr-8 group-hover:opacity-0 duration-300'></div>
                </div>
            </div>
        </div>
    );
}


const Gallery = () => {

    const [currentSet, setCurrentSet] = useState<string[] | null>(null);

    return (
        <>
            <GalleryModal currentSet={currentSet} onClick={() => setCurrentSet(null)}/>
            <div  className='bg-white w-full h-fit '>
                <XlWrapper id="Gallery">
                    <Title title="Nasze realizacje" subtitle="Zobacz i oceń" />
                    <div className="relative cursor-pointer bg-black h-[100px] md:h-[200px] w-full flex flex-col justify-center shadow-xl group mb-6" onClick={ () => setCurrentSet(images.rolety)} >
                        <img
                            src="../images/rolety1.jpg"
                            className=" object-cover w-full h-full group-hover:opacity-80 opacity-50 duration-300"
                            alt="hero"
                        />
                        <div className='w-full h-full absolute flex flex-col justify-between group'>
                            <div className='flex w-full h-[50px] items-center'>
                                <div className='w-full h-[2px] bg-white/30 mx-8 group-hover:opacity-0 duration-300'></div>
                            </div>
                            <div className='flex w-full items-center'>
                                <p className={`${styles.galleryText} w-fit font-[700] uppercase tracking-wider text-white pl-8 pr-4 my-3 group-hover:tracking-widest duration-300`}>
                                    Rolety
                                </p>
                                <div className='w-full h-[2px] bg-white/30 mr-8 group-hover:opacity-0 duration-300'></div>
                            </div>
                        </div>
                    </div>
                    <div className={` flex flex-col md:grid md:grid-cols-2 w-full h-full gap-5 items-center justify-self-center justify-center text-surella-700 font-[500] tracking-wider pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28`}>
                        <GalleryComp image="../images/zaluzje3.jpg" title='Żaluzje' onClick={ () => setCurrentSet(images.zaluzje)}/>
                        <GalleryComp image="../images/moskitiera2.jpg" title='Moskitiery' onClick={ () => setCurrentSet(images.moskitiery)}/>
                        <GalleryComp image="../images/firany8.jpg" title='Firany' onClick={ () => setCurrentSet(images.firany)}/>
                        <GalleryComp image="../images/oslony2.jpg" title='Osłony zewnętrzne' onClick={ () => setCurrentSet(images.oslony)}/>
                    </div>
                </XlWrapper>
            </div>
        </>
    );
}

export default Gallery;