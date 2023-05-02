import React from "react";
import Header from "../pages/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const Details = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Details;
