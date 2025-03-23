import Title from "@components/global/Title";
import { useEffect, useState } from "react";
import { XlWrapper } from "@components/global/Wrappers";
import texts from '../../texts.json';
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const text = texts[1]?.contactText;

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        telephone: ""
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        telephone: ""
    });

    useEffect(() => {
        console.log("VITE_EMAIL_SERVICE_ID:", import.meta.env.VITE_EMAIL_SERVICE_ID);
        console.log("VITE_EMAIL_TEMPLATE_ID:", import.meta.env.VITE_EMAIL_TEMPLATE_ID);
        console.log("VITE_KOKOSY:", import.meta.env.VITE_KOKOSY);
        gsap.fromTo(
            ".textbox",
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.25,
                scrollTrigger: {
                    trigger: ".textbox",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
        gsap.fromTo(
            ".conbox",
            { opacity: 0, x: 20 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.25,
                scrollTrigger: {
                    trigger: ".conbox",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(form.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Proszę wprowadzić poprawny adres e-mail."
            }));
            return false;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: ""
        }));
        return true;
    };

    const validateTelephone = () => {
        const telephoneRegex = /^[0-9]{9}$/;
        if (!telephoneRegex.test(form.telephone)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                telephone: "Proszę wprowadzić poprawny numer telefonu."
            }));
            return false;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            telephone: ""
        }));
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const isEmailValid = validateEmail();
        const isTelephoneValid = validateTelephone();

        if (!isEmailValid || !isTelephoneValid) {
            setLoading(false);
            return;
        }

        const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
        const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
        const emailPublicKey = import.meta.env.VITE_KOKOSY;

        emailjs.send(
            emailServiceId,
            emailTemplateId,
            {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                message: form.message,
                telephone: form.telephone
            },
            emailPublicKey
        ).then(() => {
            setStatus("Wiadomość wysłana pomyślnie!");
            setForm({ firstName: "", lastName: "", email: "", message: "", telephone: "" });
        }).catch(() => {
            setStatus("Wystąpił błąd. Spróbuj ponownie.");
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <XlWrapper vertical id="Contact">
            <div className="w-full">
                <Title title="Skontaktuj się z nami" subtitle="Współpraca"></Title>
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="textbox bg-slate-100 w-full flex flex-col  ">
                        <div className="h-1/2 px-10 pt-10">
                            <p className={`${styles.contactTextMain} tracking-wide text-surella-700 leading-relaxed text-justify`}>{text}</p>
                        </div>
                        <div className="h-1/2 bg-red-30 flex flex-col gap-10 my-10">
                            <div className="h-fit text-center flex justify-center  items-center ">
                                <BsFillTelephoneFill className="text-surella-600 h-8 w-8 mr-10"/>
                                <p className={`${styles.contactText} flex justify-center text-nowrap text-surella-600 font-[700] tracking-wider`}>+48 722 299 530</p>
                            </div>
                            <div className="h-fit  text-center flex justify-center items-center">
                                <MdMail className="text-surella-600 h-10 w-10 mr-10"/>
                                <p className={`${styles.contactText} flex justify-center text-nowrap text-surella-600 font-[700] tracking-wider`}>biuro@surella.pl</p>
                            </div>
                        </div>
                    </div>
                    <div className="conbox w-full h-full bg-surella-600">
                        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col uppercase tracking-wide text-white p-10">
                            <div className="w-full h-full flex gap-4">
                                <div className="w-full h-full">
                                    <p className="pb-1">Imię</p>
                                    <input 
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        className="w-full h-[30px] text-surella-800 focus:outline-none px-2 rounded-none"
                                        type="text" 
                                        required
                                    />
                                </div>
                                
                                <div className="w-full h-full">
                                    <p className="pb-1">Nazwisko</p>
                                    <input 
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        className="w-full h-[30px] text-surella-800 focus:outline-none px-2 rounded-none" 
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col">
                                <p className="pt-2 pb-1">Email</p>
                                <input 
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full h-[30px] text-surella-800 focus:outline-none px-2 rounded-none"  
                                    type="email"
                                    required
                                />
                                {errors.email && <p className="text-xs mt-2 font-bold text-red-300">{errors.email}</p>}

                                <p className="pt-2 pb-1">Numer telefonu</p>
                                <input 
                                    name="telephone"
                                    value={form.telephone}
                                    onChange={handleChange}
                                    className="w-full h-[30px] text-surella-800 focus:outline-none px-2 rounded-none"
                                    type="tel"
                                />
                                {errors.telephone && <p className="text-xs mt-2 font-bold text-red-300">{errors.telephone}</p>}

                                <p className="pt-2 pb-1">Wiadomość</p>
                                <textarea 
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full 2xl:h-[200px] h-[100px] text-surella-800 text-wrap p-2 focus:outline-none rounded-none" 
                                    placeholder="Tutaj napisz swoją wiadomość do nas"
                                    required
                                />
                                <div className="flex justify-between items-center mt-10 gap-4">
                                    <motion.button 
                                        type="submit"
                                        className="w-fit h-fit cursor-pointer px-14 py-2 font-bold tracking-widest uppercase bg-surella-800/80"
                                        whileTap={{ y: 4 }}
                                        disabled={loading}
                                    >
                                        {loading ? "Wysyłanie..." : "Wyślij"}
                                    </motion.button>
                                    {status && <p className="text-center text-xs md:text-base">{status}</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </XlWrapper>
    );
};

export default Contact;
