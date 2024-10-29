import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";
import texts from '../../texts.json'
import { styles } from "../../styles";

const Contact = () => {
const text = texts[1]?.contactText;

    return (
        <XlWrapper id="Contact" vertical>
            <div className="w-full" >
                <Title title="Skontaktuj się z nami" subtitle="Współpraca"></Title>
                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="bg-slate-100 w-full">
                        <div className="h-fit p-10">
                            <p className={`${styles.aboutText} tracking-wide text-surella-700 leading-relaxed text-justify`}>{text}</p>
                        </div>
                        <div className="h-fit p-10 pt-0 lg:pt-4 2xl:pt-10 text-center">
                            <p className={`${styles.contactText} text-nowrap text-surella-600 font-[700] tracking-wider`}>+48 722 299 530</p>
                        </div>
                    </div>
                    <div className="w-full h-full bg-surella-600">
                        <div className="w-full h-full flex flex-col uppercase tracking-wide text-white p-10">
                            <div className="w-full h-full flex gap-4">
                                <div className="w-full h-full">
                                    <p className="pb-1">Imię</p>
                                    <input className="w-full h-[30px] text-surella-800 focus:outline-none px-2" type="text"></input>
                                    </div>
                                    <div className="w-full h-full">
                                        <p className="pb-1">Nazwisko</p>
                                        <input className="w-full h-[30px] text-surella-800 focus:outline-none px-2" type="text"></input>
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col ">
                                    <p className="pt-2 pb-1">Email</p>
                                    <input className="w-full h-[30px] text-surella-800 focus:outline-none px-2"  type="email"></input>
                                    <p className="pt-2 pb-1">Wiadomość</p>
                                    <textarea className=" w-full 2xl:h-[200px] h-[100px] text-surella-800 text-wrap p-2 focus:outline-none" placeholder="Tutaj napisz swoją wiadomość do nas"></textarea>
                                    <div className="w-fit h-fit px-14 py-2 mt-5 font-bold tracking-widest uppercase bg-surella-800/80">
                                    <p>Wyślij</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </XlWrapper>
    );
}

export default Contact;