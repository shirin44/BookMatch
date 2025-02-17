import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import BookCard from "../components/BookCard";
import ActionButtons from "../components/ActionButton";

const booksData = [
  {
    id: 1,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    image: "https://m.media-amazon.com/images/I/71un2hI4mcL.jpg",
    tags: ["Dystopian", "Young Adult (YA)", "Survival", "Love Triangle"],
    rating: 4.8,
    reviews: 513,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b468d093312907.5e6139cf2ab03.png",
    tags: ["Dystopian", "Political Fiction", "Classic"],
    rating: 4.5,
    reviews: 620,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
    tags: ["Classic", "Coming of Age", "Drama"],
    rating: 4.9,
    reviews: 710,
  }
];

const SwipeView = () => {
    const [books, setBooks] = useState(booksData);
  
    const swiped = (direction, bookTitle) => {
      console.log(`${bookTitle} was swiped ${direction}`);
    };
  
    const outOfFrame = (bookTitle) => {
      console.log(`${bookTitle} is out of the screen`);
      setBooks((prevBooks) => prevBooks.filter(book => book.title !== bookTitle));
    };
  
    return (
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex justify-center items-center h-[80vh] w-full">
          <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center">
            {books.map((book) => (
              <TinderCard
                className="absolute"
                key={book.id}
                onSwipe={(dir) => swiped(dir, book.title)}
                onCardLeftScreen={() => outOfFrame(book.title)}
                preventSwipe={["up", "down"]}
              >
                <BookCard book={book} />
              </TinderCard>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <ActionButtons
            onLike={() => console.log("Liked")}
            onDislike={() => console.log("Disliked")}
            onSave={() => console.log("Saved")}
          />
        </div>
      </div>
    );
  };
  
  export default SwipeView