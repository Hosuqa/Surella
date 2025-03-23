import { useState, useEffect } from "react";
import { gsap } from "gsap";
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

    useEffect(() => {
        if (scrolled) {
            gsap.to(".calcbutton", {
                x: 0,
                opacity: 1,
                duration: 0.2,
                ease: "power1.out",
            });
        } else {
            gsap.to(".calcbutton", {
                x: 120,
                opacity: 0,
                duration: 0.2,
                ease: "power1.in",
            });
        }
    }, [scrolled]);

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
