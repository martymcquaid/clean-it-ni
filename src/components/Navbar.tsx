import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-blue-600 font-bold text-lg">Clean It NI</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-600">Services</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link>
            <Link to="/testimonials" className="text-gray-800 hover:text-blue-600">Testimonials</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;