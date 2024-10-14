import Navbar from '@components/global/Navbar';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Counter from '@components/sections/Counter';

const ContentBox = () => {
    return (
        <>
            <Navbar/><Hero/><About/><Counter/>
        </>
    );
}

export default ContentBox;