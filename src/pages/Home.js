import React from "react";
import Banner from "../components/home/Banner";
import Courses from "../components/home/Courses";
import Categories from "../components/home/Categories";
import About from "../components/home/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <Categories />
      <About />
    </div>
  );
};

export default Home;
