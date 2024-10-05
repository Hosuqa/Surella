import { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { surella } from '../../assets';

const Navbar = () => {
    const [active, setActive] = useState('');

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-md`}>
            <div className="w-full flex items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={()=>{
                        setActive("");
                        window.scrollTo(0,0);
                      }}>
                        <img src={surella} alt="logo" className="w-9 h-9 object-contain" />
                        <p className="text-[18px] text-surella-500 font-bold cursor-pointer">Surella</p>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
