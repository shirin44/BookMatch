import React from "react";
import { FaUser, FaHeart, FaFire } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom"; // Add navigation

const Sidebar = () => {
  return (
    <aside className="w-24 h-screen bg-gray-100 flex flex-col items-center pt-12 shadow-md">
      <SidebarIcon icon={<FaUser size="28" />} label="My Profile" link="/" />
      <SidebarIcon icon={<FaHeart size="28" />} label="Favorites" link="/favorites" />
      <SidebarIcon icon={<FaFire size="28" />} label="Trending" />
    </aside>
  );
};

const SidebarIcon = ({ icon, label, link }) => (
  <Link to={link ?? "#"} className="flex flex-col items-center mb-10 cursor-pointer hover:opacity-80">
    <div className="bg-gray-300 p-4 rounded-full">{icon}</div>
    <p className="text-sm mt-2 text-gray-700">{label}</p>
  </Link>
);

export default Sidebar;
