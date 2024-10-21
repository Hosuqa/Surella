/* eslint-disable @typescript-eslint/no-explicit-any */

import { XlWrapper } from '@components/global/Wrappers'
import Title from '../global/Title'
import { styles } from "../../styles";
import { hero1, hero2, hero3} from '../../assets';
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
            
                <div className='absolute flex bottom-0 w-full h-[10vh] bg-black/70'>
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
        <div className="bg-transparent w-[200px] h-fit sm:w-[260px] sm:h-[400px] xl:h-full xl:w-full flex flex-col justify-center shadow-xl" onClick={onClick}>
            <img src={image} className="object-cover h-full w-full" alt="hero" />
            <p className={`${styles.galleryText} w-full text-center font-[700] uppercase tracking-wider bg-white py-3`}>{title}</p>
        </div>
    );
}


const Gallery = () => {

    const [currentSet, setCurrentSet] = useState<string[] | null>(null);

    return (
        <>
            <GalleryModal currentSet={currentSet} onClick={() => setCurrentSet(null)}/>
            <div className='bg-surella-700 w-full h-fit'>
                <XlWrapper >
                    <Title title="Nasze realizacje" subtitle="Zobacz i oceń"  lineColor="bg-white" titleColor='text-white' subtitleColor='text-white' className='pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28'/>
                </XlWrapper>
                <div className={`${styles.paddingX} w-full h-full flex flex-wrap xl:grid xl:grid-cols-5 gap-4 md:gap-8 xl:gap-5 justify-center text-surella-700 font-[500] tracking-wider cursor-pointer pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28`}>
                    <GalleryComp image="../public/images/rolety7.jpg" title='Rolety' onClick={ () => setCurrentSet(images.rolety)}/>
                    <GalleryComp image="../public/images/zaluzje11.jpg" title='Żaluzje' onClick={ () => setCurrentSet(images.zaluzje)}/>
                    <GalleryComp image="../public/images/moskitiera1.jpg" title='Moskitiery' onClick={ () => setCurrentSet(images.moskitiery)}/>
                    <GalleryComp image="../public/images/firany8.jpg" title='Firany' onClick={ () => setCurrentSet(images.firany)}/>
                    <GalleryComp image="../public/images/oslony2.jpg" title='Osłony' onClick={ () => setCurrentSet(images.oslony)}/>
                </div>
            </div>
        </>
    );
}

export default Gallery;