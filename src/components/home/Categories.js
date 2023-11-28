import React from "react";
import style from "../../styles/category.module.css";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { PiPenNibStraightLight } from "react-icons/pi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdAddChart } from "react-icons/md";
import { LuPieChart } from "react-icons/lu";

const category = [
  { title: "Design", icon: <PiPenNibStraightLight /> },
  { title: "Development", icon: <HiOutlineSquare3Stack3D /> },
  { title: "Professional Dev.", icon: <ImProfile /> },
  { title: "Photography", icon: <IoImageOutline /> },
  { title: "Data Science", icon: <HiOutlineCircleStack /> },
  { title: "Business", icon: <LuPieChart /> },
  { title: "Marketing", icon: <MdAddChart /> },
  { title: "Music", icon: <IoMusicalNotesOutline /> },
];

const Categories = () => {
  return (
    <section className={style.category_container} id="category">
      <div className="heading" style={{ textAlign: "center" }}>
        <h2>
          Most Popular <span>Category</span>
        </h2>
      </div>
      <div className={style.category_wrapper}>
        {category.map((item, index) => (
          <div key={index} className={style.category_card}>
            <div className={style.card_title}>
              <span>{item.icon}</span> <p> {item.title}</p>
            </div>
            <span>
              <BsArrowUpRightSquareFill size={20} color="#7f56d9" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
