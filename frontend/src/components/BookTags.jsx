import React from "react";

const BookTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap mt-2">
      {tags.map((tag, index) => (
        <span key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full mr-2">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default BookTags;
