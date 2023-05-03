import React from "react";

const Recipe = ({ recipe }) => {
  const { name, description, image, cooking_method, rating, ingredients } =
    recipe;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-4">
      <figure>
        <img src={image} className="w-52 " alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-left">
          <span className="font-semibold text-base">Description: </span>
          {description}.
        </p>
        <p className="text-left">
          <span className="font-semibold text-base">Cooking Method: </span>
          {cooking_method}.
        </p>

        <p className="text-left">Ingredients: {ingredients}</p>

        <p className="text-left text-base font-semibold"> Raiting: {rating}</p>
        <div className="card-actions justify-end">
          <button className=" rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
