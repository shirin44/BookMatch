import React, { useState , useRef, useEffect} from "react";
import TinderCard from "react-tinder-card";
import BookCard from "../components/BookCard";
import ActionButtons from "../components/ActionButton";
import Questionnaire from "../components/Questionnaire";
import { fetchBooks } from "../services/bookService";
// const booksData = [
//   {
//     id: 1,
//     title: "The Hunger Games",
//     author: "Suzanne Collins",
//     image: "https://m.media-amazon.com/images/I/71un2hI4mcL.jpg",
//     tags: ["Dystopian", "Young Adult (YA)", "Survival", "Love Triangle"],
//     rating: 4.8,
//     reviews: 513,
//   },
//   {
//     id: 2,
//     title: "1984",
//     author: "George Orwell",
//     image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png",
//     tags: ["Dystopian", "Political Fiction", "Classic"],
//     rating: 4.5,
//     reviews: 620,
//   },
//   {
//     id: 3,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     image: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
//     tags: ["Classic", "Coming of Age", "Drama"],
//     rating: 4.9,
//     reviews: 710,
//   }
// ];

const SwipeView = () => {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    if (searchParams) {
      const { category, language, minRating } = searchParams;
      fetchBooks("books", category, language, minRating).then(setBooks);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {!searchParams ? (
        <Questionnaire onSubmit={(category, language, minRating) => setSearchParams({ category, language, minRating })} />
      ) : (
        <>
          <div className="relative w-full max-w-lg flex items-center justify-center flex-grow">
            {books.length > 0 ? (
              books.map((book) => (
                <TinderCard
                  className="absolute transform transition-transform duration-300 ease-in-out"
                  key={book.id}
                  onSwipe={() => setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id))}
                  preventSwipe={["up", "down"]}
                >
                  <BookCard book={book} />
                </TinderCard>
              ))
            ) : (
              <p className="text-gray-500">Loading books...</p>
            )}
          </div>
          <div className="mt-4 mb-12">
            <ActionButtons />
          </div>
        </>
      )}
    </div>
  );
};

export default SwipeView;