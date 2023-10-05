import { useState } from "react";

export function DishCardHor({ title, img }) {
  const [isHovered, setIsHovered] = useState(false);

  function mouseEnter() {
    setIsHovered(true);
  }
  function mouseExit() {
    setIsHovered(false);
  }

  return (
    <>
      <div
        className="w-[350px] h-[200px] m-5 relative"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseExit}
      >
        {/* Image */}
        <a href="#">
          <img
            className={`w-[350px] h-[200px] rounded transition duration-300 ${
              isHovered ? "filter brightness-50" : ""
            }`}
            src={`/images/${img}`}
            alt=""
          />
          {/* Hovered Title */}
          {isHovered && (
            <h1 className="absolute inset-0 text-white text-xl font-light flex justify-center items-center p-0 pb-6">
              {title}
            </h1>
          )}
          {/* Title */}
          <h1
            className={`text-center text-xl font-light ${
              isHovered ? "text-transparent leading-0" : ""
            }`}
          >
            {title}
          </h1>
        </a>
      </div>
    </>
  );
}
