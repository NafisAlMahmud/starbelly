import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const SingleChefs = () => {
  const details = useLoaderData();
  const {
    id,
    name,
    profile_picture,
    num_recipes,
    experiance,
    description,
    signature_recipes,
  } = details;

  return (
    <div className="my-20">
      <div className="card lg:card-side bg-base-100">
        <figure>
          <img src={profile_picture} alt="Album" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title text-3xl font-semibold">{name}</h2>
          <p className="text-base font-semibold mt-10">{description}</p>
          <p className="text-base font-semibold">
            Numbers of Recipe : {num_recipes}
          </p>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-primary">Go beck</button>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold mt-10">Signature Recipes</h3>
      <div className="grid lg:grid-cols-3 mt-10">
        {signature_recipes.map((recipe) => (
          <Recipe recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default SingleChefs;
