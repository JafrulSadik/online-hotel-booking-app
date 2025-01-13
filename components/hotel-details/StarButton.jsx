"use client";

import { FaStar } from "react-icons/fa6";

const StarButton = ({
  index,
  star,
  mouseOverStar,
  setStar,
  setMouseOverStar,
}) => {
  const isActive = index + 1 <= (mouseOverStar || star);

  return (
    <button
      type="button"
      key={index}
      onClick={() => setStar(index + 1)}
      onMouseOver={() => setMouseOverStar(index + 1)}
      onMouseLeave={() => setMouseOverStar(0)}
      className={`text-2xl hover:text-yellow-500 ${
        isActive ? "text-yellow-500" : "text-gray-300"
      }`}
    >
      <FaStar />
    </button>
  );
};

export default StarButton;
