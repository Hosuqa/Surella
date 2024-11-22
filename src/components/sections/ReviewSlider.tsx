import useEmblaCarousel from "embla-carousel-react";
import { PropsWithChildren } from "react";

type Props = { options:any } & PropsWithChildren;

const ReviewSlider = ({ children, options }: Props) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    duration: 100,
    startIndex:3, // żeby gsap stager aniamcja działala ładnie
    loop: true,
    align: "start",
    ...options,
  });
  

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex ">{children}</div>
    </div>
  );
};
export default ReviewSlider;
