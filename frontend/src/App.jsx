import React from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import SwipeView from "./pages/SwipeView";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <NavBar />
        <div className="flex justify-center items-center flex-grow">
          <SwipeView />
        </div>
      </div>
    </div>
  );
}

export default App;
