import { XlWrapper } from '@components/global/Wrappers'
import Title from '../global/Title'
import { styles } from "../../styles";
import { hero1, hero2, hero3 } from '../../assets';

type Props = {
    image: string;
    title: string;
};

const GalleryComp = ({image, title}: Props) => {
    return (
        <div className="bg-transparent w-full h-full flex flex-col justify-center shadow-xl">
            <img src={image} className="object-cover h-full w-full" alt="hero" />
            <p className={`${styles.galleryText}w-full text-center font-[700] uppercase tracking-wider bg-white py-3`}>{title}</p>
        </div>
    );
}

const Gallery = () => {
    return (
        <>
            <div className='bg-surella-700 w-full h-fit'>
                <XlWrapper >
                    <Title title="Nasze realizacje" subtitle="Zobacz i oceń"  lineColor="bg-white" titleColor='text-white' subtitleColor='text-white' className='pt-10'/>
                </XlWrapper>
                <div className={`${styles.paddingX} w-full h-full pb-[64px] grid grid-cols-2 xs:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-8 xl:gap-5 justify-center  text-surella-700 font-[500] tracking-wider cursor-pointer`}>
                    <GalleryComp image={hero3} title='Rolety'/>
                    <GalleryComp image={hero1} title='Żaluzje'/>
                    <GalleryComp image={hero2} title='Moskitiery'/>
                    <GalleryComp image={hero1} title='Zasłony'/>
                    <GalleryComp image={hero3} title='Firany'/>
                    <GalleryComp image={hero2} title='Markizy'/>
                </div>
            </div>
        </>
    );
}

export default Gallery;