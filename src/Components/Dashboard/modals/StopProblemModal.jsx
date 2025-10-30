
import React, { useState } from "react";
import { ReactComponent as RightTick } from "../../../Assets/icons/check.svg";

export default function StopProblemModal({ onClose }) {
  const [selected, setSelected] = useState("Date");

  const options = ["Date", "Alphabetical Order", "Business"];

  // ✅ Select option (just show tick, don't close modal)
  const handleSelect = (option) => {
    setSelected(option);
  };

  // ✅ Close on outside click
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
            className={`relative flex items-center justify-between p-2 text-[14px] cursor-pointer 
              ${index < options.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <span>{option}</span>
            {selected === option && (
              <span className="absolute right-2 flex items-center justify-center">
                <RightTick />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
