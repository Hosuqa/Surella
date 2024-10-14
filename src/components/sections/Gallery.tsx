import { LgWrapper } from '@components/global/Wrappers'
import Title from '../global/Title'

const Gallery = () => {
    return (
        <div className='h-[50vw] bg-surella-700 '>
            <LgWrapper className='pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28' >
                <div className=' h-full w-full'>
                    <Title title='Nasze wizualizacje' subtitle='Zobacz i oceń' titleColor='text-white' subtitleColor='text-white' lineColor='bg-white'></Title>
                </div>
            </LgWrapper>
        </div>
    );
}

export default Gallery;