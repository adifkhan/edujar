import React from "react";
import style from "../../styles/testimonial.module.css";
import TestimonialSlide from "./TestimonialSlide";
import person1 from "../../assets/users/person_1.png";
import person2 from "../../assets/users/person_2.png";
import person3 from "../../assets/users/person_3.png";
import person4 from "../../assets/users/person_4.png";
import person5 from "../../assets/users/person_5.png";

const testimonial = [
  {
    name: "John Smith",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person1,
  },
  {
    name: "Emely Hopson",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person2,
  },
  {
    name: "John Rooster",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person3,
  },
  {
    name: "George Brook",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person4,
  },
  {
    name: "Cloe Marena",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”",
    img: person5,
  },
];

const Testimonial = () => {
  return (
    <section className={style.testimonials_container} id="testimonial">
      <div className="heading">
        <h2 style={{ textAlign: "center" }}>Testimonials</h2>
      </div>
      <div className={style.testimonial_wrapper}>
        <TestimonialSlide testimonial={testimonial} />
        <div className={style.user_photo}>
          <img src={person1} alt="user" />
          <img src={person2} alt="user" />
          <img src={person3} alt="user" />
          <img src={person4} alt="user" />
          <img src={person5} alt="user" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
