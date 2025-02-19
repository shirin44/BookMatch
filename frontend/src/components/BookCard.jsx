import React from "react";
import BookTags from "./BookTags";
import Rating from "./Rating";

const BookCard = ({ book }) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-xl p-6 w-96 max-w-full transform transition-transform duration-300 hover:scale-105">
      <img
        src={book.thumbnail}
        alt={book.title}
        className="w-full h-[450px] object-cover rounded-md"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-gray-300">{book.authors.join(", ")}</p>
        <p className="text-sm text-gray-400">{book.publishedDate}</p>
        <p className="text-gray-300 text-sm truncate">{book.description}</p>
        <BookTags tags={book.categories} />
        <Rating rating={book.rating} reviews={book.ratingsCount} />
        <a
          href={book.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline text-sm mt-2 block"
        >
          Preview on Google Books
        </a>
      </div>
    </div>
  );
};

export default BookCard;