import React from "react";
import { FaRegRectangleList } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";

function ListAndGrid({ title, view, setView }) {
  return (
    <div className="flex justify-between items-center z-999">

      <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
        {view && (
          <>
            <button
              type="button"
              onClick={() => setView("list")}
              className={`flex items-center justify-center w-6 h-8 transition-colors ${
                view === "list"
                  ? "bg-blue-100 newPrimaryColor"
                  : "text-gray-600 hover:bg-blue-50 hover:newPrimaryColor"
              }`}
            >
              <FaRegRectangleList size={18} />
            </button>
            <button
              type="button"
              onClick={() => setView("grid")}
              className={`flex items-center justify-center w-6 h-8 transition-colors ${
                view === "grid"
                  ? "bg-blue-100 newPrimaryColor"
                  : "text-gray-600 hover:bg-blue-50 hover:newPrimaryColor"
              }`}
            >
              <LuLayoutGrid size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ListAndGrid;
