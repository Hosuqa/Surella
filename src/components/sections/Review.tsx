import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";
import { useEffect } from "react";
import { styles } from "../../styles";
import { FaGoogle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { google } from '../../assets';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
    text: string;
    name: string;
    date: string;
};

const ReviewCard = ({text, name, date}: Props) => {
    return (
        <div className="w-full h-full bg-white border-2 border-surella-600  justify-center items-center">
            <div className="h-fit flex justify-between items-center m-6">
                <img src={google} alt="google" className="h-8 w-8"/>
                <p className="text-surella-600 font-bold">
                    {date}
                </p>
            </div>
            <div className="bg-surella-600 px-6 py-10">
                <div className="flex justify-center text-white gap-4">
                        <FaStar className="h-6 w-6"/>
                        <FaStar className="h-6 w-6"/>
                        <FaStar className="h-6 w-6"/>
                        <FaStar className="h-6 w-6"/>
                        <FaStar className="h-6 w-6"/>
                </div>
                <div className="h-[2px] my-4 w-full bg-white "></div>
                <p className="text-white font-bold mb-4">{name}:</p>
                <p className="text-[15px] text-white tracking-widest leading-relaxed">"{text}"</p>
            </div>
        </div>
    );
};

const Sandbox = () => {
    useEffect(() => {

    }, []);

    return (
        <XlWrapper vertical >
            <div className="w-full h-[full]">
                <Title title="Opinie o Surelli " subtitle="Posłuchaj" />
                <div className="w-full h-full flex gap-4">
                    <ReviewCard name="Agnieszka (już tu nie mieszka)" date="2024-12-32" text="Jesteśmy bardzo zadowoleni. Profesjonalnie, szybko i w milej atmosferze. Od pomiarów do realizacji. Polecam serdecznie!"/>  
                    <ReviewCard name="Genowefa" date="2024-11-11" text="Jesteśmy bardzo zadowoleni. Profesjonalnie, szybko i w milej atmosferze. Od pomiarów do realizacji. Polecam serdecznie!"/>  
                    <ReviewCard name="Mieczysław" date="2024-18-32" text="Jesteśmy bardzo zadowoleni. Profesjonalnie, szybko i w milej atmosferze. Od pomiarów do realizacji. Polecam serdecznie!"/>  
                </div>
            </div>
        </XlWrapper>
    );
}

export default Sandbox;
