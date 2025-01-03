import { useState, useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
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
import Modal from '@components/global/Modal'; // Import Modal component

const ContentBox = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

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

    // Toggle modal visibility
    const handleButtonClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <Navbar />
            <Hero openModal={handleButtonClick} />
            <About /> 
            <Gallery />
            <Counter />
            <Colab />
            <Review />

            <Contact />
            {/* <Sandbox /> */}
            <Footer />


            <Modal isOpen={isModalOpen} onClose={handleButtonClick} />
            <button
                className="opacity-0 calcbutton fixed bottom-3 right-3 xl:bottom-6 xl:right-6 bg-surella-700 text-white p-3 shadow-lg hover:bg-surella-800 duration-500 z-20"
                onClick={handleButtonClick}
            >
                <FaCalculator className="m-2 h-6 w-6 md:h-8 md:w-8" />
            </button>
        </>
    );
};

export default ContentBox;
