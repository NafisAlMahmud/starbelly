import React from "react";
import Header from "../pages/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import { Audio } from "react-loader-spinner";
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>;

const Details = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Details;
