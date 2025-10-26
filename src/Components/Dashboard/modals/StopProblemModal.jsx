import React, { useState } from "react";

export default function StopProblemModal({ onClose }) {
  const [selected, setSelected] = useState("Date");

  const options = ["Date", "Alphabetical Order", "Business"];

  // Handles selecting an option and closing the modal
  const handleSelect = (option) => {
    setSelected(option);
    onClose?.(); // close modal after selection
  };

  // Handles outside click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-[230px] rounded-2xl shadow-lg overflow-hidden">
        {options.map((option, index) => (
          <div
            key={option}
            onClick={() => handleSelect(option)}
            className={`flex items-center justify-between px-4 py-2.5 text-[14px] cursor-pointer transition-colors duration-150 
              ${index < options.length - 1 ? "border-b border-gray-200" : ""} 
              ${selected === option ? "text-black" : "text-gray-700"} 
              hover:bg-gray-100 active:bg-gray-100`}
          >
            <span>{option}</span>
            {selected === option && (
              <span className="text-blue-500 text-base leading-none">✓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
