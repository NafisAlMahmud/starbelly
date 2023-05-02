import React from "react";

const Home = () => {
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
    </div>
  );
};

export default Home;
