import Title from "@components/global/Title";
import { XlWrapper } from "@components/global/Wrappers";
import { FaStar } from "react-icons/fa6";
import { google } from "../../assets";
import reviewData from "../../Review.json";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,EffectCoverflow } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import 'swiper/css/navigation';
import 'swiper/css';
import './Review.css'
gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  name: string;
  date: string;
};

const ReviewCard = (props: Props) => (
  <div className="select-none w-full h-full border-2 border-surella-500 bg-white flex flex-col justify-between">
    <div className="flex h-fit items-center justify-between bg-white p-4">
      <img src={google} alt="google" className="h-8 w-8" />
      <p className="text-surella-600 font-bold">{props.date}</p>
    </div>
    <div className="bg-surella-500 h-full p-6 flex flex-col">
      <p className="text-white font-bold">{props.name}:</p>
      <p className="text-[15px] text-white tracking-widest leading-relaxed my-4 mx-4">
        "{props.text}"
      </p>
      <div className="flex text-white gap-4 mx-4">
        <FaStar className="h-6 w-6" />
        <FaStar className="h-6 w-6" />
        <FaStar className="h-6 w-6" />
        <FaStar className="h-6 w-6" />
        <FaStar className="h-6 w-6" />
      </div>
    </div>
  </div>
);

const ReviewCard2 = (props: Props) => (
  <div className="bg-surella-500 select-none w-full h-full border-2 border-surella700 justify-beween flex flex-col items-center">
    <FaQuoteRight className="text-white h-16 w-16 mt-8"/>
    <div className=" h-ful p-6 flex flex-col">
      <p className="text-white font-bold">{props.name}:</p>
      <p className="text-[15px] text-white tracking-widest leading-relaxed my-4 mx-4">
        "{props.text}"
      </p>
    </div>
    {/* <div className="mb-8 bg-white rounded-full p-2">
      <img src={google} alt="google" className="h-8 w-8 " />
    </div>   */}
  </div>
);

const Sandbox = () => {

  return (
    <div className="bg my-20">
      <XlWrapper >
        <div className="w-full h-full">
          <Title title="Opinie o Surelli" subtitle="Posłuchaj" />
        </div>
      </XlWrapper>
      <div className="reviews-slider ">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          speed={550}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            scale: 0.8,
          }}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="relative"
        >
          {reviewData.map((review, index) => (
            <SwiperSlide key={index} className="h-[300px] px-6 md:px-0 md:w-[100px] md:h-[350px]">
              <ReviewCard2 text={review.text} date={review.date} name={review.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sandbox;
