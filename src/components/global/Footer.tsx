import { surellawhite } from '../../assets';
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Import icons for Facebook and Google

const Footer = () => {
    return (
        <>
            <footer className='z-30 relative bg-surella-500 h-full w-full flex flex-col items-center py-10 px-4 md:px-12'> {/* Added px for horizontal padding */}

                {/* Section: Social Icons & Logo */}
                <div className="w-full max-w-screen-xl flex justify-center gap-24 items-center mb-8"> {/* Adjusted width for better control */}
                    {/* Facebook Icon - Left */}
                    <a href="https://www.facebook.com/profile.php?id=100063725075763" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FaFacebook className="w-8 h-8" />
                    </a>

                    {/* Logo */}
                    <img src={surellawhite} alt="logo" className="w-14 h-14 object-contain" />

                    {/* Google Icon - Right */}
                    <a href="https://www.google.com/search?sca_esv=f74d7b244621f2cc&rlz=1C1FKPE_plPL953PL954&sxsrf=AE3TifMEQBDM-6J2yq1YdUyc4qvmzKDZ-w:1753803265696&q=surella+krs&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8sx2lHPaADpfsg7TB0gPr5rC64suEbekPyBd409PvxYu0MqgpqDNrzUhIFYvgTp6jSS-VjpI%3D&uds=AOm0WdFjhyjv-N7IxYZGImag8WESivZa1Gub8DcFl1MzZazDPY6NvYwNUCxTH7Z_nrU4x2O5caqu2kXskiJQmsBBdqa1_KE8gNuxojrNMciLHQ7CBYAdkMc&sa=X&sqi=2&ved=2ahUKEwj_paGlsuKOAxXaQ_EDHeIlH7UQ3PALegQIFRAE&biw=1600&bih=749&dpr=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FaGoogle className="w-8 h-8" />
                    </a>
                </div>

                {/* Company Info */}
                <div className="text-white text-center text-sm md:text-base mb-4"> {/* mb-4 for spacing */}
                    <h3 className="font-bold mb-2">Surella Sp. z o.o.</h3>
                    <p>ul. Lawendowa 20</p>
                    <p>Olszewnica Stara, 05-123 Chotomów</p>
                    <p>NIP: 5361978238</p>
                    <p>REGON: 527968185</p>
                </div>

                {/* Copyright Text */}
                <p className='text-white mb-0'>Copyright &copy; {new Date().getFullYear()} Surella</p> {/* mb-0 to prevent extra space */}

                {/* Scroll to Top Button */}
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