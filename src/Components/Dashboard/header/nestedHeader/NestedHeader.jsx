

import React from "react";
import { ReactComponent as ListBlueIcon } from "../../../../Assets/icons/listBlueIcon.svg";
import { ReactComponent as ListGrayIcon } from "../../../../Assets/icons/listGrayIcon.svg";
import { ReactComponent as GridBlueIcon } from "../../../../Assets/icons/gridBlueIcon.svg";
import { ReactComponent as GridGrayIcon } from "../../../../Assets/icons/gridGrayIcon.svg";

function NestedHeader({ title, view, setView }) {
  return (
    <div className="flex justify-between h-full items-center mb-2 z-50">
      <h1 className="text-[24px] font-bold text-black">{title}</h1>

      <div className="flex items-center border border-gray-200 rounded-md overflow-hidden bg-white">
        {/* List View Button */}
        <button
          type="button"
          onClick={() => setView("list")}
          className={`flex items-center justify-center px-2 py-2 transition-colors duration-200
            ${
              view === "list"
                ? "bg-blue-50 text-blue-600"
                : "bg-white text-gray-400 hover:bg-blue-50 hover:text-blue-600"
            }`}
        >
          {view === "list" ? (
            <ListBlueIcon className="w-[18px] h-[18px]" />
          ) : (
            <ListGrayIcon className="w-[18px] h-[18px]" />
          )}
        </button>

        {/* Grid View Button */}
        <button
          type="button"
          onClick={() => setView("grid")}
          className={`flex items-center justify-center px-2 py-2 transition-colors duration-200
            ${
              view === "grid"
                ? "bg-blue-50 text-blue-600"
                : "bg-white text-gray-400 hover:bg-blue-50 hover:text-blue-600"
            }`}
        >
          {view === "grid" ? (
            <GridBlueIcon className="w-[14px] h-[14px]" />
          ) : (
            <GridGrayIcon className="w-[14px] h-[14px]" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NestedHeader;


