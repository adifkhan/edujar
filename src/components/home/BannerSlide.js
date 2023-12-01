import React from "react";
import style from "../../styles/banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import logo1 from "../../assets/banner/logo1.png";
import logo2 from "../../assets/banner/logo2.png";
import logo3 from "../../assets/banner/logo3.png";
import logo4 from "../../assets/banner/logo4.png";
import logo5 from "../../assets/banner/logo5.png";
import logo6 from "../../assets/banner/logo6.png";
import logo7 from "../../assets/banner/logo7.png";

const imgData = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
];

const BannerSlide = () => {
  return (
    <Swiper
      centeredSlides={true}
      grabCursor={true}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      breakpoints={{
        300: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        550: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1300: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      }}
      className={style.slide_wrapper}
    >
      {imgData.map((item, i) => (
        <SwiperSlide key={i} className={style.slide_img}>
          <img src={item} alt="logo" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlide;
