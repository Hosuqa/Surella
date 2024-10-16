import Navbar from '@components/global/Navbar';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Counter from '@components/sections/Counter';
import Gallery from '@components/sections/Gallery';

const ContentBox = () => {
    return (
        <>
            <Navbar/><Hero/><About/><Gallery/><Counter/>
        </>
    );
}

export default ContentBox;