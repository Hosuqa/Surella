import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sandbox = () => {
    useEffect(() => {
        gsap.fromTo(
            ".line",
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".line",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <XlWrapper vertical >
            <div className="w-full h-[full]">
                <Title title="Sandbox tester" subtitle="Test" titleColor="text-red-900" subtitleColor="text-red-800" lineColor="bg-red-800" />

            </div>
        </XlWrapper>
    );
}

export default Sandbox;
