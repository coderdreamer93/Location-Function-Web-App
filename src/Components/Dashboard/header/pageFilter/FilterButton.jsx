import React from "react";

function FilterButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-semibold text-nowrap rounded-md border transition-all duration-300 px-3 py-1.5
        ${
          isActive
            ? "border-blue-600 text-blue-600 bg-blue-50"
            : "border-gray-400 text-gray-600 hover:border-blue-400 hover:text-blue-500"
        }`}
    >
      {label}
    </button>
  );
}


export default FilterButton;
