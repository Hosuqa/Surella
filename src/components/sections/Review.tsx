import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";
import { FaStar } from "react-icons/fa6";
import { google } from "../../assets";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  name: string;
  date: string;
};

const ReviewCard = (props: Props) => {
    return (
      <div className="select-none w-full h-full  border-2 border-surella-500 bg-white flex flex-col justify-between"> 
        <div className="flex h-fit items-center justify-between bg-white p-4"> 
            <img src={google} alt="google" className="h-8 w-8" />
            <p className="text-surella-600 font-bold">{props.date}</p>
        </div>
        <div className="bg-surella-500 h-full p-6 flex flex-col "> 
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
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".reviewbox",
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.8,
  //       stagger: 0.15,
  //       scrollTrigger: {
  //         trigger: ".reviewbox",
  //         start: "top 90%",
  //         toggleActions: "play none none none",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <>
    <XlWrapper>
      <div className="w-full h-full ">
        <Title title="Opinie o Surelli " subtitle="Posłuchaj" />
        </div>
    </XlWrapper>
    <div className="reviews-slider">
          <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      speed={550}
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1.1,
        slideShadows: false,
        scale: 0.9,
      }}
      modules={[EffectCoverflow, Autoplay]} // Include the Autoplay module here
    >
  <SwiperSlide className="w-[550px] h-[350px]">
    <ReviewCard text="text" date="2024" name="ania" />
  </SwiperSlide>
  <SwiperSlide className="w-[550px] h-[350px]">
    <ReviewCard 
      text="Ale bym sobie takaroletkę strzeliła. Generalnie to polecam chłopaków dobrze robią dobra energia" 
      date="2024" 
      name="ania" 
    />
  </SwiperSlide>
  <SwiperSlide className="w-[550px] h-[350px]">
    <ReviewCard text="text" date="2024" name="ania" />
  </SwiperSlide>
  <SwiperSlide className="w-[550px] h-[350px]">
    <ReviewCard text="text" date="2024" name="ania" />
  </SwiperSlide>
    <SwiperSlide className="w-[550px] h-[350px]">
    <ReviewCard text="text" date="2024" name="ania" />
  </SwiperSlide>
    <SwiperSlide className="w-[550px] h-[350px]">
    <ReviewCard text="text" date="2024" name="ania" />
  </SwiperSlide>
    <SwiperSlide className="w-[550px] h-[350px]">
    <ReviewCard text="text" date="2024" name="ania" />
  </SwiperSlide>
</Swiper>
</div>
  </>

  );
};

export default Sandbox;
