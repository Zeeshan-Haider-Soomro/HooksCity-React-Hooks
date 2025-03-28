import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`pt-20 min-h-screen transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      {/* Toggle Theme Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition duration-300"
        >
          {darkMode ? "Light 🌞" : "Dark 🌙"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to <span className="text-indigo-500">HooksCity</span> 🚀</h1>
        <p className="mt-4 text-lg text-indigo-500 ">
          Explore the power of React Hooks and build amazing projects!
        </p>
        <Link to="/hooks">
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
            Explore Hooks
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 md:px-20">
        <h2 className="text-3xl font-semibold text-center">Why HooksCity?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">🔥 Fast & Efficient</h3>
            <p className="text-gray-600 dark:text-gray-300">React Hooks make state management simpler & faster.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">🎨 Easy to Use</h3>
            <p className="text-gray-600 dark:text-gray-300">Hooks provide a clean and intuitive way to manage logic.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600">🚀 Future of React</h3>
            <p className="text-gray-600 dark:text-gray-300">Hooks are the recommended way to build React apps.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-bold">Start Learning Hooks Today! 🎯</h2>
        <Link to="/hooks">
          <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
