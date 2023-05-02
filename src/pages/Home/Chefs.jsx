import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Chefs = ({ chef }) => {
  const { id, name, profile_picture, num_recipes, experiance } = chef;

  return (
    <div className="mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 " src={profile_picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-lg font-medium">
            Numbers of recipes: {num_recipes}
          </p>
          <p className="text-lg font-medium"> Experience: {experiance}</p>
          <div className="card-actions mx-auto">
            <Link to={`/details/${id}`}>
              <button className="btn">view recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
