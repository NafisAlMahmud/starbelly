import React from "react";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/Home/AboutUs";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Main;
