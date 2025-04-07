import { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { surellawhite } from '../../assets';
import { surella } from '../../assets';
import { motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import './Navbar.css'

type Props = {
    title: string;
    href: string;
};

const NavTitle = ({ title, href }: Props) => {
    return (
        <div className="w-full h-full justify-center flex items-center">
            <div className="flex flex-col w-fit box mt-[2px] overflow-hidden">
                <a href={href} 
                   className={`${styles.NavbarText}  w-full py-1 px-4 hidden xl:flex justify-center tracking-wider font-interBold cursor-pointer`}
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
            if (window.scrollY > 350) {
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
            <motion.nav
            className={`${styles.paddingX} ${scrolled ? "text-surella-600" : "text-white"} navgsap w-full h-20 flex items-center py-5 fixed top-0 z-40 uppercase text-nowrap transition-colors duration-500`}
            animate={{
                backgroundColor: scrolled ? "#ffffff" : "transparent",
                boxShadow: scrolled
                ? "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)"
                : "none",
            }}>
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
                                className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-500" 
                            />
                            <p className={` ${scrolled ? "text-surella-600" : "text-white"} text-[20px] md:text-[25px] font-interBold tracking-wide`}>Surella</p>
                        </Link>
                    </div>
                    <div className="justify-end hidden xl:flex gap-10 w-full">
                        <NavTitle title="O nas" href="#About" />
                        <NavTitle title="Realizacje" href="#Gallery"/>
                        <NavTitle title="Opinie" href="#Reviews"/>
                        <motion.div className="w-full h-full bg-surella-600 hover:bg-surella-700 duration-300 text-surella-600 px-8 py-[6px]"
                            whileTap={{ y:4 }}>
                            <a href="#Contact"
                            className={`${styles.NavbarText} w-full hidden xl:flex justify-center text-white tracking-widest font-interBold font-bold cursor-pointer`}>
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
                            className={`h-1 md:h-[5px] w-9 my-[3px] ${scrolled ? "bg-surella-600" : "bg-white"} transition-transform duration-200 `}
                        ></motion.div>
                        <motion.div
                            className={`h-1 md:h-[5px] w-9 my-[3px] ${scrolled ? "bg-surella-600" : "bg-white"} transition-opacity duration-200 `}
                        ></motion.div>
                        <motion.div
                            className={`h-1 md:h-[5px] w-9 my-[3px] ${scrolled ? "bg-surella-600" : "bg-white"} transition-transform duration-200 `}
                        ></motion.div>
                    </motion.div>
                </div>
            </motion.nav>
            <motion.div
            initial={{ x:"150%"}}
            animate={{ x: menuOpen ? 0 : "150%" }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="xl:hidden fixed top-0 right-0 w-fit h-full z-50 bg-surella-800 flex flex-col gap-8 px-6 py-14 sm:py-20 md:px-28 uppercase">
                <motion.div
                whileTap={{ scale: 0.9 }}
                className="absolute top-5 right-5 md:right-16 z-50">
                    <FaXmark onClick={toggleMenu} className=" text-white font-bold text-2xl md:text-3xl cursor-pointer"/> {/* Dodano cursor-pointer dla jasności */}
                </motion.div>
                <motion.div className="flex flex-col gap-5 text-white text-[14px] md:text-[18px] font-medium text-end mt-6">
                    <motion.a href="#About" whileTap={{ scale: 0.9 }} onClick={toggleMenu}>O nas</motion.a>
                    <motion.a href="#Gallery" whileTap={{ scale: 0.9 }} onClick={toggleMenu}>Realizacje</motion.a>
                    <motion.a href="#Reviews" whileTap={{ scale: 0.9 }} onClick={toggleMenu}>Opinie</motion.a>
                    <motion.a href="#Contact" whileTap={{ scale: 0.9 }} onClick={toggleMenu}>Kontakt</motion.a>
                </motion.div>
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
