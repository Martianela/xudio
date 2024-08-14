import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <header className="bg-white p-4 flex justify-between items-center">
        <div className="text-black w-32">
          <img className="img" src={logo} alt="Xudio" />
        </div>
        <nav>
          <ul className="flex space-x-4 text-gray-500 text-lg font-light ">
            <li className="hover:text-black">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-black">Shop</li>
            <li className="hover:text-black">About</li>
            <li className="hover:text-black">Contact</li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded font-light hover:bg-gray-200 "
          />
          <div className="text-gray-950 text-center cursor-pointer flex flex-col justify-center">
            🛒
          </div>
          <div className="text-white cursor-pointer flex flex-col justify-center">
            👤
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
