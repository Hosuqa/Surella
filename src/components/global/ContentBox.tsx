import Navbar from '@components/global/Navbar';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Counter from '@components/sections/Counter';
import Gallery from '@components/sections/Gallery';
import Footer from '@components/global/Footer'
import Contact from '@components/sections/Contact';

const ContentBox = () => {
    return (
        <>
            <Navbar/><Hero/><About/><Counter/><Contact/><Footer/>
        </>
    );
}

export default ContentBox;