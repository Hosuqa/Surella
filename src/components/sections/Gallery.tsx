import { XlWrapper } from '@components/global/Wrappers'
import Title from '../global/Title'

const Gallery = () => {
    return (
        <div className='bg-surella-700 w-full h-[50vh]'>
            <XlWrapper>
                <Title title="Nasze realizacje" subtitle="Zobacz i oceń"  lineColor="bg-white" titleColor='text-white' subtitleColor='text-white'/>
                <div className='bg-slate-600 w-full h-[200px]'>
                
                </div>
    
            </XlWrapper>
        </div>
    );
}

export default Gallery;