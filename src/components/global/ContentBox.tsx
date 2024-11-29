import { useState, useEffect } from "react";
import Navbar from '@components/global/Navbar';
import Hero from '@components/sections/Hero';
import About from '@components/sections/About';
import Counter from '@components/sections/Counter';
import Gallery from '@components/sections/Gallery';
import Footer from '@components/global/Footer';
import Contact from '@components/sections/Contact';
import Colab from '@components/sections/Colab';
import Review from '@components/sections/Review';
import Sandbox from '@components/sections/Sandbox';
import { FaCalculator } from "react-icons/fa6";

const ContentBox = () => {
    const [scrolled, setScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 750) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Gallery />
            <Counter />
            <Colab />
            <Review />
            <Contact />
            <Sandbox />
            <Footer />

            {scrolled && (
                <button
                    className="calcbutton fixed bottom-6 right-6 bg-surella-700 text-white py-2 px-4 shadow-lg hover:bg-surella-800 duration-500 z-50">
                    <FaCalculator className="m-2 h-10 w-10"/>
                </button>
            )}
        </>
    );
};

export default ContentBox;
