import React from "react";
import Banner from "../components/home/Banner";
import Courses from "../components/home/Courses";
import Categories from "../components/home/Categories";
import About from "../components/home/About";
import Testimonial from "../components/home/Testimonial";
import Subscription from "../components/home/Subscription";

const Home = () => {
  return (
    <main>
      <Banner />
      <Courses />
      <Categories />
      <About />
      <Testimonial />
      <Subscription />
    </main>
  );
};

export default Home;
