import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Updated path

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10" />
        <div className="text-white font-bold text-3xl">
          Welcome to the Cricket Tournament
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:text-gray-400">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
