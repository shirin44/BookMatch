import React from "react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-center border-b">
      <img src={Logo} alt="BookMatch Logo" className="w-20 h-20 mr-2" />
      <h1 className="text-3xl font-bold font-serif">BookMatch</h1>
    </nav>
  );
};

export default NavBar;
