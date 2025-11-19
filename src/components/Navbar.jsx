import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-40 h-10 object-contain" />
      </div>
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li className="cursor-pointer hover:text-gray-600">Home</li>
        <li className="cursor-pointer hover:text-gray-600">About</li>
        <li className="cursor-pointer hover:text-gray-600">Menu</li>
        <li className="cursor-pointer hover:text-gray-600">Reservations</li>
        <li className="cursor-pointer hover:text-gray-600">Order Online</li>
        <li className="cursor-pointer hover:text-gray-600">Login</li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">About</li>
          <li className="cursor-pointer hover:text-gray-600">Menu</li>
          <li className="cursor-pointer hover:text-gray-600">Reservations</li>
          <li className="cursor-pointer hover:text-gray-600">Order Online</li>
          <li className="cursor-pointer hover:text-gray-600">Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
