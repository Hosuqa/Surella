import { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { surella } from '../../assets';

type Props = {
    title: string,
}

const Title = ({ title }: Props) => {
    return (
        <div className={`${styles.NavbarText} w-full flex justify-center text-surella-600 -tracking-tight font-interExtraBold font-bold cursor-pointer `}>
            {title}
        </div>
    );
};

const Navbar = () => {
    const [active, setActive] = useState('');

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white uppercase`}>
            <div className="w-full flex  items-center max-w-7xl justify-around mx-auto">
                    <Title title="O nas" />
                    <Title title="Realizacje" />
                <Link
                    to="/"
                    className="flex justify-center gap-2 w-full"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={surella} alt="logo" className="w-10 h-10 object-contain" />
                    <p className="text-[25px] text-surella-600 font-interExtraBold font-bold cursor-pointer ">Surella</p>
                </Link>
                    <Title title="Współpraca" />
                    <Title title="Kontakt" />
            </div>
        </nav>
    );
};

export default Navbar;
