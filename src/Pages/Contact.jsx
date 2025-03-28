import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Start loading state
    emailjs
    .send(
      "service_mn843lh", // EmailJS Service ID
      "template_liiuzm8", // EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "434xTpAOBR2oSxciV" // EmailJS Public Key
    )
    .then(
      (response) => {
        toast.success("📩 Message Sent Successfully!", { autoClose: 3000 });
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      },
      (error) => {
        toast.error("❌ Failed to send message. Try again!");
        console.error(error);
      }
    );
    // alert("Message Sent Successfully! 🚀");
    // setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={`pt-20 min-h-screen flex flex-col items-center justify-center transition-all duration-500
      ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>

<ToastContainer position="top-right" />

      
      {/* 🔘 Dark Mode Toggle */}
      <div className="absolute top-20 right-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
        >
          {darkMode ? "Light 🌞" : "Dark 🌙"}
        </button>
      </div>

      {/* 📌 Contact Form */}
      <div className={`p-8 rounded-2xl shadow-lg w-full max-w-lg backdrop-blur-lg transition-all
        ${darkMode ? "bg-gray-800/50 text-white " : "bg-white/50"}`}>
        
        <h2 className="text-3xl font-bold text-center mb-6">📩 Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={`p-3 rounded-lg w-full border-none shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className={`p-3 rounded-lg w-full border-none shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
          />

          {/* Message Input */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message..."
            rows="4"
            required
            className={`p-3 rounded-lg w-full border-none shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none resize-none ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg font-bold shadow-lg hover:bg-indigo-700 transition"
          >
            {isSending ? "🚀 Sending..." : "📩 Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
