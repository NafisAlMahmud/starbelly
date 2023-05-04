import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const [bookmark, setBookmark] = useState(true);
  const handleBookMark = () => {
    if (bookmark) {
      setBookmark(false);
      return Swal.fire("Successfully Bookmarked", "", "success");
    }
  };
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

        <p className="text-left text-base font-semibold flex ">
          {" "}
          Raiting: {rating}
          <div className="flex pt-1 pl-2">
            <FaStar className="text-yellow-400"></FaStar>{" "}
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            <FaStarHalf className="text-yellow-400"></FaStarHalf>
          </div>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={handleBookMark}
            disabled={false}
            className=" rounded-full"
          >
            {bookmark ? (
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
            ) : (
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
                  d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
