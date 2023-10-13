import { useState } from "react";

export function CreateDishForm() {
  const [dishName, setDishName] = useState("");
  const [img, setImg] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);
  const [cookTime, setCookTime] = useState();
  const [category, setCategory] = useState("");

  return (
    <form className="md:w-2/5 w-3/4">
      <h1 className="text-4xl font-medium mb-2">Sign Up</h1>
      <h2 className="mb-10 italic text-sm">
        Take the First Step Towards a Healthier You!
      </h2>
      <div className="mb-4">
        {/* Dish Name*/}
        <div className="flex space-x-3 md:space-x-8 mb-4">
          <div className="w-1/2">
            <label
              htmlFor="dishName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Dish Name
            </label>
            <input
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              type="text"
              id="dishName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          {/* Image */}
          <div className="w-1/2">
            <label
              htmlFor="lName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Image
            </label>
            <input
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="text"
              id="fName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
      </div>
      {/* Ingredients */}
      <div className="mb-4">
        <label
          htmlFor="ingredient"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ingredients
        </label>
        <input
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          type="text"
          id="ingredient"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      {/* Instructions */}
      <div className="mb-4">
        <label
          htmlFor="instruction"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Instructions
        </label>
        <input
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          type="text"
          id="instruction"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      {/* Cook Time & Category */}
      <div className="flex space-x-3 md:space-x-8 mb-4">
        <div className="w-82">
          <label
            htmlFor="cookTime"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Cook Time
          </label>
          <div className="flex">
            <input
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              type="text"
              id="cookTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5"
              required
            />
            <p className="ml-2 flex items-center">
              <i>in minutes</i>
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Category
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            id="category"
            className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            required
          />
        </div>
      </div>
      {/* Button */}
      <button
        type="submit"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Sign Up
      </button>
    </form>
  );
}
