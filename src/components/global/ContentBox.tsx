import Navbar from '@components/global/Navbar';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Counter from '@components/sections/Counter';
import Gallery from '@components/sections/Gallery';
import Footer from '@components/global/Footer';
import Contact from '@components/sections/Contact';
import Colab from '@components/sections/Colab';

const ContentBox = () => {
    return (
        <>
            <Navbar/><Hero/><About/><Gallery/><Counter/><Colab/><Contact/><Footer/>
        </>
    );
}

export default ContentBox;