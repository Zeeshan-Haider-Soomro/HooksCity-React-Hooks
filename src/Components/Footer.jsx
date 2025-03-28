import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Github, Link, Youtube, ChartArea, Contact, Contact2, ContactIcon, PhoneCallIcon } from "lucide-react";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <footer className={`w-full p-6 mt-10 text-center transition-all duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}>
      {/* Footer Content */}
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-bold">HooksCity</h2>
        <p className="text-sm mt-2">Zeeshan Haider Soomro © {new Date().getFullYear()} All Rights Reserved</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a title="FaceBook" href="https://web.facebook.com/zeexhan.haider.73" className="hover:text-blue-500 transition duration-300"><Facebook size={24} /></a>
          <a title="+92 3202727926(WhatsApp number also)" href="#" className="hover:text-blue-400 transition duration-300"><PhoneCallIcon size={24} /></a>
          <a title="Youtube" href="https://www.youtube.com/channel/UCyyN-92o0FFpDNDHwwMY2xg" className="hover:text-blue-400 transition duration-300"><Youtube size={24} /></a>
          <a title="LinkedIn" href="https://www.linkedin.com/in/zeeshan-haider-b12338288/" className="hover:text-blue-700 transition duration-300"><Linkedin size={24} /></a>
          <a title="Github" href="https://github.com/Zeeshan-Haider-Soomro" className="hover:text-blue-700 transition duration-300"><Github size={24} /></a>
          <a title="Portfolio" href="https://my-portfolio-from-next-js.vercel.app/" className="hover:text-blue-700 transition duration-300"><Link size={24} /></a>
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="mt-4 p-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition duration-300">
          {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
