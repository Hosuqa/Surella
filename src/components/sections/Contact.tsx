import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";


const Contact = () => {
    return (
        <XlWrapper vertical>
            <div className="w-full h-[60vh]">
                <Title title="Skontaktuj się z nami" subtitle="Współpraca"></Title>
                <div className="w-full h-full flex gap-4 bg-white">
                    <div className="w-full h-full flex flex-col bg-slate-100">
                        <h3 className="bg-red-400">Potrzebujesz odpowidzi na pytanie? Amoze kurwa nie wiem z checia rozwiklamy twoje watpliwosci zadzwon do nas albo wyslij wiadomosc</h3>
                        <h1 className="bg-gray-300">+48 610 256 643</h1>
                    </div>
                    <div className="w-full h-full bg-surella-600">
                        <div className="w-full h-[20%] flex flex-col gap-4 uppercase tracking-wide text-white p-10">
                            <div className="w-full h-full flex gap-4 my-4">
                                <div className="w-full h-full">
                                    <p>Imię</p>
                                    <input className="w-full h-full" type="text"></input>
                                </div>
                                <div className="w-full h-full">
                                    <p>Nazwisko</p>
                                    <input className="w-full h-full" type="text"></input>
                                </div>

                            </div>
                            <div className="w-full h-[80%] flex flex-col">
                            <p>Email</p>
                            <input className="w-full h-full"  type="text"></input>
                            <p>Wiadomość</p>
                            <input className="w-full h-full" type="text"></input>
                            <div className="w-fit h-fit px-10 py-1 font-bold tracking-widest uppercase bg-surella-800/80"><p>Wyślij</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </XlWrapper>
    );
}

export default Contact;