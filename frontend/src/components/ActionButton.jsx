import React from "react";
import { FaTimes, FaStar, FaHeart } from "react-icons/fa";

const ActionButtons = ({ onLike, onDislike, onSave }) => {
  return (
    <div className="flex justify-center gap-8 mt-4">
      <button className="p-6 bg-red-500 rounded-full shadow-lg hover:scale-110 transition" onClick={onDislike}>
        <FaTimes size={30} className="text-white" />
      </button>
      <button className="p-6 bg-blue-500 rounded-full shadow-lg hover:scale-110 transition" onClick={onSave}>
        <FaStar size={30} className="text-white" />
      </button>
      <button className="p-6 bg-green-500 rounded-full shadow-lg hover:scale-110 transition" onClick={onLike}>
        <FaHeart size={30} className="text-white" />
      </button>
    </div>
  );
};

export default ActionButtons;