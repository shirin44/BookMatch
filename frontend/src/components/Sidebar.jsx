import React from "react";
import { FaUser, FaHeart, FaFire } from "react-icons/fa"; // Import icons

const Sidebar = () => {
    return (
      <aside className="w-24 h-screen bg-gray-100 flex flex-col items-center pt-12 shadow-md">
        <SidebarIcon icon={<FaUser size="28" />} label="My Profile" />
        <SidebarIcon icon={<FaHeart size="28" />} label="Favorites" />
        <SidebarIcon icon={<FaFire size="28" />} label="Trending" />
      </aside>
    );
  };
  
  const SidebarIcon = ({ icon, label }) => (
    <div className="flex flex-col items-center mb-10 cursor-pointer hover:opacity-80">
      <div className="bg-gray-300 p-4 rounded-full">{icon}</div>
      <p className="text-sm mt-2 text-gray-700">{label}</p>
    </div>
  );
  
  export default Sidebar