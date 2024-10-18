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
        <div className="bg-transparent w-full h-full basis1/6 border-8 border-white relative flex justify-center">
            <img src={image} className="object-cover h-full w-full" alt="hero" />
            <p className="text-2xl absolute w-full text-center bottom-0 bg-white px-6 py-2">{title}</p>
        </div>
    );
}

const Gallery = () => {
    return (
        <div className='bg-surella-700 w-full h-[80vh]'>
            <XlWrapper>
                <Title title="Nasze realizacje" subtitle="Zobacz i oceń"  lineColor="bg-white" titleColor='text-white' subtitleColor='text-white'/>
            </XlWrapper>
                <div className={`${styles.paddingX} w-full h-[50vh] flex flex-row  gap-4 text-surella-700 font-[500] tracking-wider cursor-pointer`}>
                        <GalleryComp image={hero3} title='Rolety'/>
                        <GalleryComp image={hero1} title='Żaluzje'/>
                        <GalleryComp image={hero2} title='Moskitiery'/>
                        <GalleryComp image={hero1} title='Zasłony'/>
                        <GalleryComp image={hero3} title='Firany'/>
                        <GalleryComp image={hero2} title='Markizy'/>
                </div>
    

        </div>
    );
}

export default Gallery;