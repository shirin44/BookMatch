import React from "react";

const Favorites = ({ savedBooks }) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Favorite Books</h2>
      {savedBooks.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {savedBooks.map((book) => (
            <div key={book.id} className="bg-white shadow-md p-4 rounded-lg">
              <img src={book.thumbnail} alt={book.title} className="w-full h-60 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-2">{book.title}</h3>
              <p className="text-gray-600">{book.authors.join(", ")}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No favorite books yet.</p>
      )}
    </div>
  );
};

export default Favorites;
