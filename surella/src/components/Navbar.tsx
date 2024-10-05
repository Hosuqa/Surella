import { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { surella } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');

    const ScrollToTop = () => {
        setActive("");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-md`}>
            <div className="w-full flex items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={ScrollToTop}>
                    <img src={surella} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-[18px] font-bold cursor-pointer">Surella</p>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
