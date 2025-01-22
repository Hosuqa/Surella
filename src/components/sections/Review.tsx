import Title from "@components/global/Title";
import { useEffect } from 'react';
import { XlWrapper } from "@components/global/Wrappers";
import reviewData from "../../review.json";
import { google } from '../../assets';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,EffectCoverflow } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css';
import './Review.css'
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  name: string;
};

const ReviewCard2 = (props: Props) => (
  <div className="bg-white border-[3px] border-surella-600 select-none w-full h-full max-w-[800px] justify-beween flex flex-col px-10 py-6">
    <div className="flex justify-between items-center">
      <img src={google} alt="" className="w-14 h-14 my-4 "/>
      <div className="flex text-surella-600 gap-2">
        <FaStar className="h-6 w-6"/>
        <FaStar className="h-6 w-6"/>
        <FaStar className="h-6 w-6"/>
        <FaStar className="h-6 w-6"/>
        <FaStar className="h-6 w-6"/>
      </div>
    </div>
    <div className="ml-1">
      <p className="text-surella-700 font-bold text-xl">{props.name}:</p>
      <div className=" h-ful flex flex-col">
        <p className="text-[15px] xl:text-[17px] text-surella-800 tracking-widest leading-relaxed mt-2">
            "{props.text}"
        </p>
      </div>
    </div>
  </div>
);

const Sandbox = () => {
  useEffect(() => {
    gsap.fromTo(
      ".review_box",
      { opacity: 0, y:50},
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".review_box",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <XlWrapper>
        <div className="w-full h-full ">
          <Title title="Opinie o Surelli" subtitle="Posłuchaj" />
        </div>
      </XlWrapper>
      <div className="my-20 ">
        <div className="reviews-slider review_box">
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
            className="relative "
          >
            {reviewData.map((review, index) => (
              <SwiperSlide key={index} className=" h-[300px] px-6 md:px-0 md:w-[100px] md:h-[300px]">
                <ReviewCard2 text={review.text} name={review.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
