import React, { useState } from "react";
import BookTags from "./BookTags";
import Rating from "./Rating";

const BookCard = ({ book }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[350px] h-[550px] cursor-pointer transform transition-transform duration-500 hover:scale-105"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Book Front Cover */}
      {!isFlipped ? (
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <img
            src={book.thumbnail}
            alt={book.title}
            className="w-full h-[450px] object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900">{book.title}</h2>
            <p className="text-gray-600 text-sm">{book.authors.join(", ")}</p>
            <p className="text-xs text-gray-500">{book.publishedDate}</p>
          </div>
        </div>
      ) : (
        // Book Details (Back Side)
        <div className="bg-gray-900 text-white shadow-2xl rounded-lg p-5 flex flex-col justify-between h-full">
          <h2 className="text-lg font-bold">{book.title}</h2>
          <p className="text-sm text-gray-300 italic">{book.authors.join(", ")}</p>
          <p className="text-sm text-gray-400">{book.publishedDate}</p>
          <p className="text-gray-200 text-sm">{book.description}</p>
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
      )}
    </div>
  );
};

export default BookCard;
