import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";
import { useEffect } from "react";
import { styles } from "../../styles";
import { FaGoogle } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
    text: string;
};

const ReviewCard = ({text}: Props) => {
    return (
        <div className="w-[400px] h-full bg-white border-2 border-surella-600  justify-center items-center">
            <div className="h-fit flex justify-between items-center m-6">
                <FaGoogle className="h-8 w-8 text-surella-600 "/>
                <p className="text-surella-600 font-bold">
                    2024-11-14
                </p>
            </div>
            <div className="bg-surella-600 p-6">
                <p className="text-white font-bold mb-2">Agnieszka:</p>
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
                <div className="w-full h-full flex justify-between">
                    <ReviewCard text="Jesteśmy bardzo zadowoleni. Profesjonalnie, szybko i w milej atmosferze. Od pomiarów do realizacji. Polecam serdecznie!"/>  
                    <ReviewCard text="Jesteśmy bardzo zadowoleni. Profesjonalnie, szybko i w milej atmosferze. Od pomiarów do realizacji. Polecam serdecznie!"/>  
                    <ReviewCard text="Jesteśmy bardzo zadowoleni. Profesjonalnie, szybko i w milej atmosferze. Od pomiarów do realizacji. Polecam serdecznie!"/>  
                </div>
            </div>
        </XlWrapper>
    );
}

export default Sandbox;
