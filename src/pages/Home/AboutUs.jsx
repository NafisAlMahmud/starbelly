import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-20">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="my-auto">
          <h2 className="text-left font-bold text-4xl">About us</h2>
          <p className="text-left mt-7">
            Welcome to Starbelly, where we believe that food should be a source
            of joy and connection. Our mission is to provide you with a dining
            experience that delights all of your senses, from the aromas that
            waft from our kitchen to the textures and flavors that you'll savor
            with every bite. We are a [type of cuisine]-inspired restaurant that
            takes pride in using only the freshest, highest-quality ingredients
            in all of our dishes. Our talented team of chefs is passionate about
            creating culinary masterpieces that are as beautiful as they are
            delicious, and we're always experimenting with new techniques and
            flavor combinations to keep things fresh and exciting.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/4033084/pexels-photo-4033084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
