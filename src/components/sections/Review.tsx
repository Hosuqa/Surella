import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { google } from "../../assets";
import ReviewSlider from "@components/sections/ReviewSlider";
import Review from "../../Review.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  name: string;
  date: string;
};

const ReviewCard = (props: Props) => {
    return (
      <div className="select-none w-full  border-2 border-surella-600"> 
        <div className="flex mt-auto items-center justify-between bg-white p-4"> 
            <img src={google} alt="google" className="h-8 w-8" />
            <p className="text-surella-600 font-bold">{props.date}</p>
        </div>
        <div className="bg-surella-600 h-[220px] p-6 flex flex-col mb-2 mx-2"> 
          <p className="text-white font-bold ">{props.name}:</p>
          <p className="text-[15px] text-white tracking-widest leading-relaxed my-4 mx-4 ">
            "{props.text}"
          </p>
          <div className="flex text-white gap-4  mx-4">
          <FaStar className="h-6 w-6" />
          <FaStar className="h-6 w-6" />
          <FaStar className="h-6 w-6" />
          <FaStar className="h-6 w-6" />
          <FaStar className="h-6 w-6" />
        </div>
        </div>
      </div>
    );
  };

const Sandbox = () => {
  useEffect(() => {
    gsap.fromTo(
      ".reviewbox",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".reviewbox",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <XlWrapper vertical>
      <div className="w-full h-full ">
        <Title title="Opinie o Surelli " subtitle="Posłuchaj" />
        <div className="flex flex-col items-center justify-between ">
          <div className="w-screen ">
            <ReviewSlider options={{ align: "center" }}>
              {Review.map((testimonial, i) => (
                <div
                  key={i}
                  className="reviewbox mr-10 flex-[0_0_90%] md:flex-[0_0_50%] xl:flex-[0_0_29%]  "
                >
                  <ReviewCard {...testimonial} />
                </div>
              ))}
            </ReviewSlider>
          </div>
        </div>
      </div>
    </XlWrapper>
  );
};

export default Sandbox;
