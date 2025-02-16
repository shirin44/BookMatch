
import React from 'react'; 
import './App.css'
import './index.css'
import NavBar from './components/NavBar';
import SwipeView from './pages/SwipeView';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <SwipeView />
    </div>
  );
}

export default App
