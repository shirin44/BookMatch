// src/components/BookCard.jsx
import React from 'react';

const BookCard = ({ title, author }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-700">by {author}</p>
    </div>
  );
};

export default BookCard;
