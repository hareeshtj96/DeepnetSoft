import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-black text-white w-full p-2">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img src="images/logo.jpeg" alt="logo" className="w-10 h-10" />

          <div className="hidden lg:block text-left">
            <h1 className="text-lg font-bold">
              <span className="text-blue-500">DEEP</span>{" "}
              <span className="text-white">NET</span>
            </h1>
            <h1 className="text-lg font-bold text-gray-400">SOFT</h1>
          </div>
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`lg:flex gap-8 text-sm ${
            isMenuOpen
              ? "flex flex-col absolute bg-black w-full top-12 left-0 px-4 py-2 z-50"
              : "hidden"
          }`}
        >
          <li className="text-white-400 cursor-pointer py-2">HOME</li>
          <li className="text-blue-500 cursor-pointer py-2">MENU</li>
          <li className="text-white-400 cursor-pointer py-2">
            MAKE A RESERVATION
          </li>
          <li className="text-white-400 cursor-pointer py-2">CONTACT US</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
