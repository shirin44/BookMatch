import React from "react";
import BookTags from "./BookTags";
import Rating from "./Rating";

const BookCard = ({ book }) => {
    return (
      <div className="bg-black text-white rounded-lg shadow-xl p-6 w-96 max-w-full">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-[450px] object-cover rounded-md"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <p className="text-gray-300">{book.author}</p>
          <BookTags tags={book.tags} />
          <Rating rating={book.rating} reviews={book.reviews} />
        </div>
      </div>
    );
  };

export default BookCard;
