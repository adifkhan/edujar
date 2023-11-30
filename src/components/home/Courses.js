import React from "react";
import style from "../../styles/courses.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import img1 from "../../assets/course/course1.jpg";
import img2 from "../../assets/course/course2.jpg";
import img3 from "../../assets/course/course3.jpg";
import img4 from "../../assets/course/course4.jpg";
import img5 from "../../assets/course/course5.jpg";
import img6 from "../../assets/course/course6.jpg";
import lecturer from "../../assets/users/person_2.png";
import { Link } from "react-router-dom";

//use other details for dinamic course information
const courses = [img1, img2, img3, img4, img5, img6];

const Courses = () => {
  return (
    <section className={style.course_container} id="course">
      <div className={style.course_header}>
        <div className="heading">
          <h2>
            Popular <span>Courses</span>
          </h2>
        </div>
        <div className={style.button_group}>
          {/* active_button class can be toggled by using Nablink or other js functions  */}
          <button className={style.active_button}>Design</button>
          <button>Development</button>
          <button>Business</button>
          <button>Data Science</button>
          <button>Marketing</button>
        </div>
      </div>
      <div className={style.course_wrapper}>
        {courses.map((course, index) => (
          <div key={index} className={style.course_card}>
            <img src={course} alt="course" className={style.cardImg} />
            <div className={style.card_content}>
              <div className={style.card_header}>
                <span>
                  <FaCirclePlay size={18} color="#aa85fb" /> 10x Lessons
                </span>
                <button>Design</button>
              </div>
              <div className={style.card_title}>
                <p>
                  Python for Financial Analysis Next and Algorithmic Trading
                </p>
              </div>
              <div className={style.lecturer_wrapper}>
                <div className={style.lecturer}>
                  <img src={lecturer} alt="lecturer" />
                  <div>
                    <p>Adam Smith</p>
                    <span>Python Developer</span>
                  </div>
                </div>
                <label>50+ Students</label>
              </div>
              <div className={style.card_footer}>
                <div>
                  <IoStar size={10} color="orange" />
                  <IoStar size={10} color="orange" />
                  <IoStar size={10} color="orange" />
                  <IoStar size={10} color="orange" />
                  <IoStar size={10} color="white" />
                </div>
                <Link to="#">Enroll Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.all_course_btn}>
        <button>Explore All Courses</button>
      </div>
    </section>
  );
};

export default Courses;
