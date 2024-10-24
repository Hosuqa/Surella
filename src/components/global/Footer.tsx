import { surellawhite } from '../../assets';


const Footer = () => {
    return (
        <>
            <footer className='bg-surella-500 h-full w-full flex flex-col items-center' >
                <img src={surellawhite} alt="logo" className="w-14 h-14 m-10 object-contain" />
                <p className='text-white mb-10'>Copyright &copy; {new Date().getFullYear()} Surella</p>
            </footer>
        </>
    );
};
export default Footer;