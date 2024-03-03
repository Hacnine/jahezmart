import React, { useState } from "react";

const SizeButton = () => {
  const [activeButton, setActiveButton] = useState(""); // State to manage active button

  const handleButtonClick = (size:string) => {
    setActiveButton(size); // Set the clicked button as active
  };

  return (
    <div className="pt-2">
      <p className="text-gray-600 font-semibold">Size</p>
      <div className="flex items-center mt-2 gap-3">
        <button
          className={`text-sm w-6 h-7 rounded-sm flex items-center justify-center cursor-pointer font-extrabold  ring-2 ring-orangeRed ${
            activeButton === "S"
              ? "text-white bg-orangeRed"
              : "text-orangeRed"
          }`}
          onClick={() => handleButtonClick("S")}
        >
          S
        </button>
        <button
          className={`text-sm w-6 h-7 rounded-sm flex items-center justify-center cursor-pointer font-extrabold ring-2 ring-orangeRed ${
            activeButton === "D"
              ? "text-white bg-orangeRed"
              : "text-orangeRed"
          }`}
          onClick={() => handleButtonClick("D")}
        >
          D
        </button>
        <button
          className={`text-sm w-6 h-7 rounded-sm flex items-center justify-center cursor-pointer font-extrabold ring-2 ring-orangeRed ${
            activeButton === "Q"
              ? "text-white bg-orangeRed"
              : "text-orangeRed"
          }`}
          onClick={() => handleButtonClick("Q")}
        >
          Q
        </button>
      </div>
    </div>
  );
};

export default SizeButton;
