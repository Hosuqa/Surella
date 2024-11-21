import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sandbox = () => {
    useEffect(() => {

    }, []);

    return (
        <XlWrapper vertical >
            <div className="w-full h-[full]">
                <Title title="Opinie o Surelli " subtitle="Posłuchaj" />

            </div>
        </XlWrapper>
    );
}

export default Sandbox;
