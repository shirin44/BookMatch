import React, { useState, useEffect, useRef } from "react";
import TinderCard from "react-tinder-card";
import BookCard from "../components/BookCard";
import ActionButtons from "../components/ActionButton";
import Questionnaire from "../components/Questionnaire";
import { fetchBooks } from "../services/bookService";

const SwipeView = () => {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useState(null);
  const [savedBooks, setSavedBooks] = useState([]);
  const childRefs = useRef([]);

  useEffect(() => {
    if (searchParams) {
      const { category, language, minRating } = searchParams;
      fetchBooks("books", category, language, minRating).then(setBooks);
    }
  }, [searchParams]);

  const handleSwipe = (direction, bookId) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== bookId));
  };

  const swipe = (dir) => {
    if (childRefs.current.length > 0) {
      const bookIndex = books.length - 1;
      childRefs.current[bookIndex]?.swipe(dir);
    }
  };

  const handleSave = () => {
    if (books.length > 0) {
      setSavedBooks((prev) => [...prev, books[books.length - 1]]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      {/* If no searchParams, show the questionnaire */}
      {!searchParams ? (
        <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
          <Questionnaire
            onSubmit={(category, language, minRating) =>
              setSearchParams({ category, language, minRating })
            }
          />
        </div>
      ) : (
        <>
          {/* Book Swiping Area */}
          <div className="relative w-full max-w-lg flex items-center justify-center flex-grow mt-6">
            {books.length > 0 ? (
              books.map((book, index) => (
                <TinderCard
                  ref={(el) => (childRefs.current[index] = el)}
                  key={book.id}
                  className="absolute transform transition-transform duration-300 ease-in-out"
                  onSwipe={(dir) => handleSwipe(dir, book.id)}
                  preventSwipe={["up", "down"]}
                  swipeRequirementType="position"
                  swipeThreshold={50} // Even smoother swiping
                >
                  <BookCard book={book} />
                </TinderCard>
              ))
            ) : (
              <p className="text-gray-500 text-lg">No books left. Refresh to load more.</p>
            )}
          </div>

          {/* Action Buttons */}
          <ActionButtons 
            onLike={() => swipe("right")} 
            onDislike={() => swipe("left")} 
            onSave={handleSave} 
          />
        </>
      )}
    </div>
  );
};

export default SwipeView;
