import React from "react";

const Recipe = ({ recipe }) => {
  const { name, description, image } = recipe;
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-28 h-28" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Recipe;
