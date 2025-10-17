import React from "react";
import { FaRegRectangleList } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";

function NestedHeader({ title, view, setView }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <p className="text-4xl font-semibold text-gray-800">{title}</p>

      <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
        <button
          type="button"
          onClick={() => setView("list")}
          className={`flex items-center justify-center w-6 h-8 transition-colors ${
            view === "list"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <FaRegRectangleList size={18} />
        </button>
        <button
          type="button"
          onClick={() => setView("grid")}
          className={`flex items-center justify-center w-6 h-8 transition-colors ${
            view === "grid"
              ? "bg-blue-100 text-blue-600"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <LuLayoutGrid size={18} />
        </button>
      </div>
    </div>
  );
}

export default NestedHeader;
