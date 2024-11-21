import { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { surellawhite } from '../../assets';
import { surella } from '../../assets';
import { motion } from "framer-motion";
import './Navbar.css'

type Props = {
    title: string;
    href: string;
};

const Title = ({ title, href }: Props) => {
    return (
        <div className="w-full h-full justify-center items-center">
            <div className="flex flex-col w-fit box mt-[2px] overflow-hidden">
                <a href={href} 
                   className={`${styles.NavbarText} w-full py-1 hidden xl:flex justify-center text-white tracking-wider font-interExtraBold font-bold cursor-pointer`}
                  >

                   {title}
                </a>
                <div className="animation"></div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
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
            <motion.nav className={`${styles.paddingX} w-full h-20 flex items-center py-5 fixed top-0 z-40 uppercase text-nowrap transition-colors duration-500 `}
                animate={{ backgroundColor: scrolled ? "#fff" : "transparent" }} >
                   <div className="w-full flex justify-between items-center">
                    <div className="h-full w-full">
                        <Link
                            to="/"
                            className="flex xl:justify-start gap-2 w-fit cursor-pointer items-center"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <img 
                                src={scrolled ? surella : surellawhite} 
                                alt="logo" 
                                className="w-10 h-10 object-contain transition-all duration-500" 
                            />
                            <p className={` ${scrolled ? "text-surella-600" : "text-white"} text-[25px]  font-interExtraBold font-bold`}>Surella</p>
                        </Link>
                    </div>
                    <div className="justify-end hidden xl:flex gap-10 w-full">
                        <Title title="O nas" href="#About" />
                        <Title title="Realizacje" href="#Gallery"/>
                        <Title title="Współpraca" href="#Colab"/>
                        <motion.div className="w-full h-full bg-surella-600 hover:bg-surella-700 duration-300 text-surella-600 px-8 py-[6px]"
                            whileTap={{ y:4 }}>
                            <a href="#Contact"
                            className={`${styles.NavbarText} w-full hidden xl:flex justify-center text-white tracking-widest font-interExtraBold font-bold cursor-pointer`}>
                                Kontakt
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                    className="xl:hidden flex flex-col cursor-pointer "
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[10.5px]' : ''}`}
                        ></motion.div>
                        <motion.div
                            className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                        ></motion.div>
                        <motion.div
                            className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-transform duration-200 ${menuOpen ? '-rotate-45  -translate-y-[11px]' : ''}`}
                        ></motion.div>
                    </motion.div>
                </div>
            </motion.nav>
            <motion.div
            initial={{ y:"-100%"}}
            animate={{ y: menuOpen ? 0 : "-100%" }}
            //animate={{ scale: menuOpen ? 0 : 1 , opacity: menuOpen ? 0 : 1}}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="xl:hidden fixed top-[80px] right-0 bg-surella-800 flex flex-col z-10 gap-8 p-10 uppercase">
                <a href="#About" className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>O nas</a>
                <a href="#Gallery" className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>Realizacje</a>
                <a href="#Colab" className={`text-white font-bold ${styles.NavbarText} ${'visible'}}`}>Współpraca</a>
                <a href="#Contact" className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>Kontakt</a>
            </motion.div>
        </>
    );
};
export default Navbar;

// \/ Toggle menu
// className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-transform duration-300 ${menuOpen ? '-rotate-45 translate-y-[11px] translate-x-[8.5px] w-7' : ''}`}
// ></motion.div>
// <motion.div
//     className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
// ></motion.div>
// <motion.div
//     className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-transform duration-300 ${menuOpen ? 'rotate-45  -translate-y-[11px] -translate-x-[8px] w-7' : ''}`}
