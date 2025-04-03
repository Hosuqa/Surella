import Navbar from '@components/global/Navbar';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Counter from '@components/sections/Counter';
import Gallery from '@components/sections/Gallery';
import Footer from '@components/global/Footer';
import Contact from '@components/sections/Contact';
import Colab from '@components/sections/Colab';
import Review from '@components/sections/Review';

const ContentBox = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <div className="flex flex-col items-center">
                <About /> 
                <Gallery />
            </div>
                <Counter />
            <div className="flex flex-col items-center">
                <Colab />
            </div>
                <Review />
            <div className="flex flex-col items-center">
                <Contact />
            </div>
            {/* <Sandbox /> */}
            <Footer />
        </>
    );
};

export default ContentBox;
