import React from "react";
import style from "../../styles/testimonial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { IoStar } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const TestimonialSlide = ({ testimonial }) => {
  return (
    <div>
      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={style.slider_container}
      >
        {testimonial.map((item, index) => (
          <SwiperSlide key={index} className={style.slider_card}>
            <div className={style.slide_header}>
              <div className={style.user_info}>
                <img src={item.img} alt="our user" />
                <div>
                  <p>{item.name}</p>
                  <label>Python Developer</label>
                </div>
              </div>
              <span>
                <IoStar size={10} color="orange" />
                <IoStar size={10} color="orange" />
                <IoStar size={10} color="orange" />
                <IoStar size={10} color="orange" />
                <IoStar size={10} color="white" />
              </span>
            </div>
            <div className={style.description}>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={style.navigator}>
          <FaArrowLeft size={18} />
          <FaArrowRight size={18} />
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlide;
