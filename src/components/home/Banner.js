import React from "react";
import style from "../../styles/banner.module.css";
import banner_svg from "../../assets/banner.svg";
import BannerSlide from "./BannerSlide";

const Banner = () => {
  return (
    <div className={style.banner_container} id="#home">
      <div className={style.banner}>
        <div className={style.banner_content}>
          <div className={style.banner_heading}>
            <h2>
              <span>Best courses</span> are waiting to enrich your skill
            </h2>
          </div>
          <p>
            Provides you with the latest online learning system and material
            that help your knowledge growing.
          </p>
          <div className={style.explore}>
            <input type="text" placeholder=" want to learn?" />
            <button>Explore</button>
          </div>
        </div>
        <div className={style.banner_img}>
          <img src={banner_svg} alt="" />
        </div>
      </div>
      <div className={style.slide_container}>
        <BannerSlide />
        <label>Our Course Partners</label>
      </div>
    </div>
  );
};

export default Banner;
