import React, { useState } from "react";

const UseStateHook = () => {
  // Counter App
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    if (counter <= 0) {
      counter = 0;
    } else {
      setCounter(counter - 1);
    }
  };

  // Manage Form App
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const RestartCounter = () => {
    setCounter(0);
  };

  // Toggle Visibilty
  const [isVisible, setIsVisible] = useState(false);

  // Form Handling
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log(name);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
    setSubmittedData([...submittedData, { name, email }]);
    // for reset input
    setName("");
    setEmail("");
  };
  return (
    <div className="">
      {/* Counter App */}
       <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-lime-400 to-green-600 p-6">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-lg rounded-xl p-8 text-center">
        <p className="text-2xl font-semibold text-white pb-4">1️⃣ Counter App 🧮</p>

        <div className="flex justify-center items-center space-x-6">
          {/* Decrease Button */}
          <button
            className="w-16 h-16 bg-red-500 text-white text-3xl font-bold rounded-full shadow-lg hover:bg-red-700 transition duration-300 cursor-pointer"
            onClick={Decrement}
          >
            -
          </button>

          {/* Counter Display */}
          <p className="text-4xl font-bold text-white w-20 bg-gray-900 py-4 rounded-lg shadow-inner">
            {counter}
          </p>

          {/* Increase Button */}
          <button
            className="w-16 h-16 bg-blue-500 text-white text-3xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={Increment}
          >
            +
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={RestartCounter}
          className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 cursor-pointer"
        >
          Reset 🔄
        </button>
      </div>
    </div>
      {/* Manage Form Input */}
      <div className="min-h-screen flex justify-center items-center bg-gray-200 p-6">
      <div className="w-full max-w-lg bg-gray-100 shadow-lg rounded-xl p-6 sm:p-8 text-center border border-gray-300">
        <p className="text-xl sm:text-2xl font-semibold text-gray-700 pb-4">
          2️⃣ Manage Form Input ✍️
        </p>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Write here..."
          value={value}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
        />

        {/* Display Text */}
        <div className="mt-6 h-40 w-full bg-gray-50 text-gray-700 p-4 rounded-lg overflow-y-auto shadow-inner border border-gray-400 sm:text-lg text-sm">
          {value || <span className="text-gray-500">Your text will appear here...</span>}
        </div>
      </div>
    </div>
      {/* Toggle Visibility */}
       <div className="min-h-screen bg-gradient-to-r from-amber-500 to-orange-600 p-8 flex justify-center items-center">
      <div className="max-w-xl bg-white/20 backdrop-blur-lg rounded-lg shadow-lg p-6">
        <p className="text-center text-white text-2xl font-semibold pb-5">
          3️⃣ Toggle Theme 🎨
        </p>

        <p className="text-white text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          doloribus assumenda Lorem ipsum dolor sit amet consectetur.
        </p>

        {isVisible && (
          <div className="mt-4 p-4 bg-white/30 backdrop-blur-lg rounded-md shadow-md text-white text-lg">
            adipisicing elit. Provident ducimus deserunt quos expedita amet in
            consequuntur blanditiis, sit ratione ipsum tempora earum ab porro,
            voluptate illum laboriosam molestiae voluptatibus numquam?
          </div>
        )}

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="mt-6 w-full bg-white text-amber-600 font-semibold py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 cursor-pointer"
        >
          {isVisible ? "See Less" : "See More"}
        </button>
      </div>
    </div>
      {/* Form Handling */}
      <div className="min-h-screen bg-gradient-to-r from-indigo-700 to-purple-600 p-6 flex justify-center items-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <p className="text-center text-indigo-700 text-2xl font-bold pb-5">
          4️⃣ Form Handling 📝
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Form */}
          <form
            className="flex flex-col gap-4 w-full md:w-1/2 bg-indigo-100 p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <input
              value={name}
              required
              onChange={handleNameChange}
              className="text-[30px] border-2 border-indigo-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              value={email}
              required
              onChange={handleEmailChange}
              className="text-[30px] border-2 border-indigo-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="email"
              placeholder="Enter Your Email"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition cursor-pointer duration-300"
            >
              Submit
            </button>
          </form>

          {/* Display Submitted Data */}
          <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-indigo-700 mb-3">
              Submitted Entries:
            </h2>
            {submittedData.length > 0 ? (
              <div className="space-y-4">
                {submittedData.map((entry, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500"
                  >
                    <p className="text-gray-700">
                      <strong className="text-indigo-600">Name:</strong> {entry.name}
                    </p>
                    <p className="text-gray-700">
                      <strong className="text-indigo-600">Email:</strong> {entry.email}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No Data Submitted Yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UseStateHook;
