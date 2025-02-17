import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating, reviews }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) stars.push(<FaStar key={i} className="text-yellow-500" />);
    else if (rating >= i + 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    else stars.push(<FaRegStar key={i} className="text-gray-500" />);
  }

  return (
    <div className="flex items-center mt-2">
      {stars}
      <span className="ml-2 text-gray-400 text-sm">{rating} ({reviews})</span>
    </div>
  );
};

export default Rating;
