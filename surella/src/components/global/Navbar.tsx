import { useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { surella } from '../../assets';

type Props = {
    title: string,
}

const Title = ({ title }: Props) => {
    return (
        <div className={`${styles.NavbarText} w-full hidden xl:flex justify-center text-surella-600 -tracking-tight font-interExtraBold font-bold cursor-pointer `}>
            {title}
        </div>
    );
};

const Navbar = () => {
    const [active, setActive] = useState('');

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white uppercase`}>
            <div className="w-full flex justify-between  items-center ">
            <Link
                    to="/"
                    className="flex xl:justify-sart gap-2 w-full  cursor-default"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={surella} alt="logo" className="w-10 h-10 object-contain" />
                    <p className="text-[25px] text-surella-600 font-interExtraBold font-bold cursor-pointer ">Surella</p>
                </Link>
                <div className="justify-end flex gap-10 w-full">
                    <Title title="O nas" />
                    <Title title="Realizacje" />
                
                    <Title title="Współpraca" />
                    <Title title="Kontakt" />
                    </div>
                    <div className="xl:hidden flex flex-col gap-2 bg cursor-pointer">
                        <div className="h-1.5 w-12 bg-surella-600"></div>
                        <div className="h-1.5 w-12 bg-surella-600"></div>
                        <div className="h-1.5 w-12 bg-surella-600"></div>
                    </div>
            </div>
        </nav>
    );
};

export default Navbar;
