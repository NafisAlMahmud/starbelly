import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs";

import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import { data } from "autoprefixer";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className=" mt-10">
      <div className="grid lg:grid-cols-2">
        <div>
          <img src="https://pngimg.com/d/chef_PNG10.png" alt="" />
        </div>
        <div className="my-auto ">
          <h2 className="text-right font-extrabold text-6xl">
            Welcome to our place. You will find happiness and food here
          </h2>
        </div>
      </div>
      <AboutUs></AboutUs>
      <div className="mt-20">
        <h2 className="text-4xl font-bold">Our Chefs</h2>
        <div className="grid lg:grid-cols-3">
          {chefs.map((chef) => (
            <Chefs chef={chef}></Chefs>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
