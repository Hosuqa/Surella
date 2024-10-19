/* eslint-disable @typescript-eslint/no-explicit-any */

import { XlWrapper } from '@components/global/Wrappers'
import Title from '../global/Title'
import { styles } from "../../styles";
import { hero1, hero2, hero3} from '../../assets';
import images from '../../images.json'
import { useEffect, useState } from 'react';

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

        if (currentSet != null) setCurrentPhoto(currentSet[0])

    }, [currentSet]);

    return (
        <div className={`${currentSet ? "fixed" : "hidden"} flex z-[9999] top-0 right-0 w-[100vw] h-[100vh] bg-black/80`}>
            <div className='relative w-full h-full flex'>
                <div className='absolute top-2 right-2 w-[5vw] h-[5vh] bg-red-500 cursor-pointer' onClick={onClick}/>
                <div className='w-full h-[90vh] xl:py-20 xl:px-72 lg:py-16 lg:px-48 md:py-12 md:px-24 py-10 px-8'>
                    <div className=" w-full h-full relative">
                        <img src={currentPhoto} className="object-contain w-full h-full" alt="zdjecie" />
                    </div>
                </div>
            
                <div className='absolute flex bottom-0 w-full h-[10vh] bg-black/70'>
                    <div className='w-full h-full p-2 gap-2 flex px-4'>
                        { currentSet && currentSet.map((image) => (
                            <div className='h-full aspect-square overflow-hidden group cursor-pointer'>
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
        <div className="bg-transparent w-full h-full flex flex-col justify-center shadow-xl" onClick={onClick}>
            <img src={image} className="object-cover h-full w-full" alt="hero" />
            <p className={`${styles.galleryText}w-full text-center font-[700] uppercase tracking-wider bg-white py-3`}>{title}</p>
        </div>
    );
}


const Gallery = () => {

    const [currentSet, setCurrentSet] = useState<string[] | null>(null);

    return (
        <>
            <GalleryModal currentSet={currentSet} onClick={() => setCurrentSet(null)}/>
            <div className='bg-surella-700 w-full h-fit'>
                <XlWrapper>
                    <Title title="Nasze realizacje" subtitle="Zobacz i oceń"  lineColor="bg-white" titleColor='text-white' subtitleColor='text-white' className='pt-10'/>
                </XlWrapper>
                <div className={`${styles.paddingX} w-full h-full pb-[64px] grid grid-cols-2 xs:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-8 xl:gap-5 justify-center  text-surella-700 font-[500] tracking-wider cursor-pointer`}>
                    <GalleryComp image={hero3} title='Rolety' onClick={ () => setCurrentSet(images.rolety)}/>
                    <GalleryComp image={hero1} title='Żaluzje' onClick={ () => setCurrentSet(images.zaluzje)}/>
                    <GalleryComp image={hero2} title='Moskitiery' onClick={ () => setCurrentSet(images.rolety)}/>
                    <GalleryComp image={hero1} title='Zasłony' onClick={ () => setCurrentSet(images.rolety)}/>
                    <GalleryComp image={hero3} title='Firany' onClick={ () => setCurrentSet(images.rolety)}/>
                    <GalleryComp image={hero2} title='Markizy' onClick={ () => setCurrentSet(images.rolety)}/>
                </div>
            </div>
        </>
    );
}

export default Gallery;