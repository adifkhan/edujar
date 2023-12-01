import React from "react";
import style from "../../styles/about.module.css";
import about_svg from "../../assets/about.svg";
import { LuUsers2 } from "react-icons/lu";
import { PiGraduationCapDuotone,PiVideoCameraThin,PiUsersThreeLight } from "react-icons/pi";

const About = () => {
  return (
    <section className={style.about_container}>
      <div className="layer3"></div>
      <div className={style.about_left}>
        <div className="heading">
          <h2>
            What is our <span>difference</span>
          </h2>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          aut. Aut ducimus maxime quam debitis beatae voluptate fugit veniam
          tenetur consequatur quis doloremque nam atque libero
        </p>
        <p>
          minima sequi sit mollitia, numquam quas eligendi neque vero. Velit
          distinctio harum vero sed animi perferendis
        </p>
        <button>Learn More</button>
      </div>
      <div className={style.about_right}>
        <div className={style.about_img}>
          <img src={about_svg} alt="about" />
        </div>
        <div className={style.inventory_box}>
          <div className={style.inventory_card}>
            <span>
              <PiGraduationCapDuotone size={20} />
            </span>
            <div className={style.card_details}>
              <p>300</p>
              <label>instructor</label>
            </div>
          </div>
          <div className={style.inventory_card}>
            <span>
              <LuUsers2 size={20} />
            </span>
            <div className={style.card_details}>
              <p>20,000+</p>
              <label>Student</label>
            </div>
          </div>
          <div className={style.inventory_card}>
            <span>
              <PiVideoCameraThin size={20} />
            </span>
            <div className={style.card_details}>
              <p>10,000+</p>
              <label>Video</label>
            </div>
          </div>
          <div className={style.inventory_card}>
            <span>
              <PiUsersThreeLight size={20} />
            </span>
            <div className={style.card_details}>
              <p>1,00,000+</p>
              <label>Users</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
