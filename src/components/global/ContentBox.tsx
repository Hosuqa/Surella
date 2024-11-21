import Navbar from '@components/global/Navbar';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Counter from '@components/sections/Counter';
import Gallery from '@components/sections/Gallery';
import Footer from '@components/global/Footer';
import Contact from '@components/sections/Contact';
import Colab from '@components/sections/Colab';
import Review from '@components/sections/Review'
import Sandbox from '@components/sections/Sandbox';

const ContentBox = () => {
    return (
        <>
            <Navbar/><Hero/><About/><Gallery/><Counter/><Colab/><Review/><Contact/><Sandbox/><Footer/>
        </>
    );
}

export default ContentBox;