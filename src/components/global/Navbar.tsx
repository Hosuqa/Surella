import { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
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
            {/* usunąć div i w-fot => w-full */}
            <div className="flex flex-col w-fit box mt-[2px] overflow-hidden">
                <a href={href}
                   className={`${styles.NavbarText} w-full py-1 hidden xl:flex justify-center text-surella-600 tracking-wider font-interExtraBold font-bold cursor-pointer`}>
                   {title}
                </a>
                <div className="animation"></div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <nav className={`${styles.paddingX} w-full h-20 flex items-center py-5 fixed top-0 z-20 bg-white uppercase shadow-lg text-nowrap`}>
                <div className="w-full flex justify-between items-center">
                    <div className="h-full w-full">
                        <Link
                            to="/"
                            className="flex xl:justify-start gap-2 w-fit cursor-pointer items-center"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <img src={surella} alt="logo" className="w-10 h-10 object-contain" />
                            <p className="text-[25px] text-surella-600 font-interExtraBold font-bold ">Surella</p>
                        </Link>
                    </div>
                    <div className="justify-end hidden xl:flex gap-10 w-full">
                        <Title title="O nas" href="#About" />
                        <Title title="Realizacje" href="#Gallery"/>
                        <Title title="Współpraca" href="#Work"/>
                        <div className="w-full h-full bg-surella-600 text-white px-8 py-1">
                            <a href="#Contact"
                            className={`${styles.NavbarText} w-full hidden xl:flex justify-center text-white tracking-widest font-interExtraBold font-bold cursor-pointer`}>
                                Kontakt
                            </a>
                        </div>
                    </div>
                    <motion.div
                    className="xl:hidden flex flex-col cursor-pointer "
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[10.5px]' : ''}`}
                        ></motion.div>
                        <motion.div
                            className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                        ></motion.div>
                        <motion.div
                            className={`h-[5px] w-9 my-[3px] bg-surella-600 transition-transform duration-300 ${menuOpen ? '-rotate-45  -translate-y-[11px]' : ''}`}
                        ></motion.div>
                    </motion.div>
                </div>
            </nav>
            <motion.div
            initial={{ y:"-100%"}}
            animate={{ y: menuOpen ? 0 : "-100%" }}
            //animate={{ scale: menuOpen ? 0 : 1 , opacity: menuOpen ? 0 : 1}}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="xl:hidden fixed top-[80px] right-0 bg-surella-800 flex flex-col z-10 gap-8 p-10 uppercase">
                <Link to="/"  className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>O nas</Link>
                <Link to="/realizacje" className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>Realizacje</Link>
                <Link to="/wspolpraca" className={`text-white font-bold ${styles.NavbarText} ${'visible'}}`}>Współpraca</Link>
                <Link to="/kontakt" className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>Kontakt</Link>
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
