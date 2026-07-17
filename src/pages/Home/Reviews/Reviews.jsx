import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import blueMap from "../../../assets/DhakaMap.png"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    // console.log(reviews)
    return (

        <div className="relative w-full h-[850px] overflow-hidden">


            <img
                src={blueMap}
                alt="Dhaka Map"
                className="absolute w-full h-full object-cover"
            />

            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-[#0B2545]/90"></div>


            <div className="relative z-20 text-center pt-20">
                <h2 className="text-5xl font-bold text-white">
                    What Our Users Say
                </h2>
                <p className="mt-4 text-slate-200 text-lg">
                    Real testimonials from happy drivers!
                </p>
            </div>

            {/* Swiper */}
            <div className="absolute inset-0 z-20 flex items-center">
                <Swiper
                    loop
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 120,
                        scale: 0.7,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className=" max-w-7xl mx-auto"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>



    );
};

export default Reviews;