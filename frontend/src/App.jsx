import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import SwipeView from "./pages/SwipeView";
import Favorites from "./pages/favorites";

function App() {
  const [savedBooks, setSavedBooks] = useState([]);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />

        <div className="flex flex-col w-full h-screen">
          <NavBar />
          <div className="flex justify-center items-center flex-grow px-8 py-4">
            <Routes>
              <Route path="/" element={<SwipeView savedBooks={savedBooks} setSavedBooks={setSavedBooks} />} />
              <Route path="/favorites" element={<Favorites savedBooks={savedBooks} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
