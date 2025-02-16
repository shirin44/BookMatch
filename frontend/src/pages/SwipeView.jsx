// src/pages/SwipeView.jsx
import React from 'react';
import BookCard from '../components/BookCard';

const SwipeView = () => {
  // Placeholder book data
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
  ];

  return (
    <div className="p-8">
      {books.map((book) => (
        <BookCard key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

export default SwipeView;
