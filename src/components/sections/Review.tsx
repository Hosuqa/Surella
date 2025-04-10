import Title from "@components/global/Title";
import { useEffect } from 'react';
import { ReviewWrapper } from "@components/global/Wrappers";
import reviewData from "../../Review.json"; 
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
interface Review {
  text: string;
  name: string;
}


const ReviewCard2 = (props: Props) => (
  <div className="bg-white border-[2px] md:border-[3px] border-surella-600 select-none w-full h-fit md:min-h-[260px] max-w-[800px] justify-beween flex flex-col px-4 md:px-10 py-2 md:py-6">
    <div className="flex justify-between items-center md:mb-2">
      <img src={google} alt="" className="w-10 h-10 md:w-14 md:h-14 my-2 "/>
      <div className="flex text-surella-600 gap-2">
        <FaStar className="h-4 w-4 md:h-6 md:w-6"/>
        <FaStar className="h-4 w-4 md:h-6 md:w-6"/>
        <FaStar className="h-4 w-4 md:h-6 md:w-6"/>
        <FaStar className="h-4 w-4 md:h-6 md:w-6"/>
        <FaStar className="h-4 w-4 md:h-6 md:w-6"/>
      </div>
    </div>
    <div className="ml-1">
      <p className="text-surella-700 font-bold text-xl">{props.name}:</p>
      <div className=" h-ful flex flex-col">
        <p className="text-[13px] xl:text-[17px] text-surella-800 tracking-widest leading-relaxed my-2">
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
      <ReviewWrapper vertical>
        <div className="w-full h-full ">
          <Title title="Opinie o Surelli" subtitle="Posłuchaj" />
        </div>
      </ReviewWrapper>
      <div className="my-8 md:my-0">
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
            {reviewData.map((review: Review, index: number) => (
              <SwiperSlide key={index} className="h-[200px] px-6 my-2 md:px-0 md:w-[100px] md:h-[300px]">
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
