import { surellawhite } from '../../assets';
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";


const Footer = () => {
    return (
        <>
            <footer className='z-30 relative bg-surella-500 h-full w-full flex flex-col items-center' >
                <img src={surellawhite} alt="logo" className="w-14 h-14 mt-10 mb-4 md:mb-8 object-contain" />
                <p className='text-white mb-10'>Copyright &copy; {new Date().getFullYear()} Surella</p>
                <Link
                    to="/"
                    className="top-1/2 -translate-y-1/2 right-4 md:right-12 absolute bg-surella-600 p-1 cursor-pointer"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <IoIosArrowDown className={`rotate-180 w-8 h-8 md:w-10 md:h-10 text-white transform duration-500 flex items-center justify-center`} />
                </Link>
            </footer>
        </>
    );
};
export default Footer;