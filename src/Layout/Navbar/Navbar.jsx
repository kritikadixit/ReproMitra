import React from "react";
import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink
                to="/"
                className="border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Health Issues
              </NavLink>
              <NavLink
                to="/"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Doctors
              </NavLink>
              <NavLink
                to="/about"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About
              </NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-custom text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-opacity-90">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;