import React, { useState } from "react";
import { Link, Outlet, } from "react-router-dom";
import Footer from "../Components/Footer";

const hooksData = [
  { name: "useState", path: "/hooks/usestate" },
  { name: "useEffect", path: "/hooks/useeffect" },
  { name: "useContext", path: "/hooks/usecontext" },
  { name: "useRef", path: "/hooks/useref" },
  { name: "useReducer", path: "/hooks/usereducer" },
  { name: "useMemo", path: "/hooks/usememo" },
  { name: "useCallback", path: "/hooks/usecallback" },
  { name: "useLayoutEffect", path: "/hooks/uselayouteffect" },
  { name: "useImperativeHandle", path: "/hooks/useimperativehandle" },
  { name: "use", path: "/hooks/use" },
];

const Hooks = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`pt-14 min-h-screen flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} transition-all`}>
      
      {/* Sidebar (Fixed) */}
      <div className={`pb-20 w-56 h-screen overflow-scroll fixed left-0 top-17 p-5 shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-2xl font-bold text-center mb-4">Hooks Menu</h2>
        <div className="flex flex-col gap-2">
          {hooksData.map((hook, index) => (
            <Link
              key={index}
              to={hook.path}
              className={`p-3 rounded-lg transition duration-300 hover:scale-105 
              ${darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-black hover:bg-gray-300"}`}
            >
              {hook.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content (Scrollable) */}
      <div className="flex-1 ml-56 p-6 ">
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition duration-300"
          >
            {darkMode ? "Light 🌞" : "Dark 🌙"}
          </button>
        </div>

        {/* Page Content */}
        <h1 className="text-4xl font-bold text-center">React Hooks Guide </h1>

        {/* Outlet for hook content */}
        <div className="">
          <Outlet />
          <Footer/>
        </div>
      </div>

    </div>
  );
};

export default Hooks;
