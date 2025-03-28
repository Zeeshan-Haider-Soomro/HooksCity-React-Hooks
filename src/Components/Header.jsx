import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`w-full top-0 left-0 fixed z-50 p-4 transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          HooksCity
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-indigo-500 transition duration-300">About</Link>
          <Link to="/hooks" className="hover:text-indigo-500 transition duration-300">Hooks</Link>
          <Link to="/contact" className="hover:text-indigo-500 transition duration-300">Contact</Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="hidden md:block p-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition duration-300">
          {darkMode ? "Light 🌞" : "Dark 🌙"}
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link to="/" className="hover:text-indigo-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-indigo-500 transition duration-300">About</Link>
          <Link to="/hooks" className="hover:text-indigo-500 transition duration-300">Hooks</Link>
          <Link to="/contact" className="hover:text-indigo-500 transition duration-300">Contact</Link>
          <button onClick={() => setDarkMode(!darkMode)} className="mt-4 p-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition duration-300">
            {darkMode ? "Light 🌞" : "Dark 🌙"}
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
