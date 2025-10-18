import React from "react";

function FilterButton({ label, isActive, onClick }) {
  return (
    <div
      className={`flex text-xs font-semibold text-nowrap rounded-md  transition-all duration-300 px-3 py-1.5   ${
        isActive
          ? "border-2 border-blue-600 text-blue-600 bg-blue-50"
          : "border-2 border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-500"
      }`}
    >
      <button
        onClick={onClick}
        className={`text-xs font-semibold text-nowrap
        
            `}
      >
        {label}
      </button>
    </div>
  );
}

export default FilterButton;
