import { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { surella } from '../../assets';
import { motion } from "framer-motion";

type Props = {
    title: string;
};

const Title = ({ title }: Props) => {
    return (
        <p className={`${styles.NavbarText} w-full py-1 hidden xl:flex justify-center text-surella-600 tracking-wider font-interExtraBold font-bold cursor-pointer`}>
            {title}
        </p>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <nav className={`${styles.paddingX} w-full h-20 flex items-center py-5 fixed top-0 z-20 bg-white uppercase shadow-lg`}>
                <div className="w-full flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex xl:justify-start gap-2 w-full cursor-pointer items-center"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img src={surella} alt="logo" className="w-10 h-10 object-contain" />
                        <p className="text-[25px] text-surella-600 font-interExtraBold font-bold ">Surella</p>
                    </Link>
                    <div className="justify-end hidden xl:flex gap-2 w-full">
                        <Title title="O nas" />
                        <Title title="Realizacje" />
                        <Title title="Współpraca" />
                        <div className="w-full h-full bg-surella-600 text-white py-1">
                        <p className={`${styles.NavbarText} w-full hidden xl:flex justify-center text-white tracking-widest font-interExtraBold font-bold cursor-pointer`}>
                        Kontakt
                        </p>
                        </div>
                    </div>
                    <motion.div
                    className="xl:hidden flex flex-col gap-[7.5px] cursor-pointer"
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}>
                        <div className="h-[5px] w-10 bg-surella-600"></div>
                        <div className="h-[5px] w-10 bg-surella-600"></div>
                        <div className="h-[5px] w-10 bg-surella-600"></div>
                    </motion.div>
                </div>
            </nav>
            <motion.div
            initial={{ y:"-100%"}}
            animate={{ y: menuOpen ? 0 : "-100%" }}
            //animate={{ scale: menuOpen ? 0 : 1 , opacity: menuOpen ? 0 : 1}}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="xl:hidden fixed top-[70px] right-0 bg-surella-800 flex flex-col z-10 gap-8 p-10 uppercase">
                <Link to="/"  className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>O nas</Link>
                <Link to="/realizacje" className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>Realizacje</Link>
                <Link to="/wspolpraca" className={`text-white font-bold ${styles.NavbarText} ${'visible'}}`}>Współpraca</Link>
                <Link to="/kontakt" className={`text-white font-bold ${styles.NavbarText} ${'visible'}`}>Kontakt</Link>
            </motion.div>
        </>
    );
};
export default Navbar;