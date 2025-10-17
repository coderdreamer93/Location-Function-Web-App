import React from "react";
import { FaSearch } from "react-icons/fa";
import FilterButton from "./FilterButton";
import { CgSortAz } from "react-icons/cg";
import { TbArrowsUpDown } from "react-icons/tb";

function PageFilter({
  search,
  setSearch,
  filterOptions = [],
  selectedFilter,
  setSelectedFilter,
  isOpen,
  setIsOpen,
}) {
  return (
    <div className="w-full flex flex-col sm:flex-row pb-2 items-center justify-between gap-3">
      {/* ===== Left Section ===== */}
      <div className="flex flex-row items-center gap-3 w-full">
        {filterOptions.length > 0 && (
          <div className="flex gap-2">
            {filterOptions.map((item) => (
              <FilterButton
                key={item.value}
                label={item.label}
                isActive={selectedFilter === item.value}
                onClick={() => setSelectedFilter(item.value)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ===== Right Section ===== */}
      <div className="flex flex-row items-center gap-3 w-full">
        {/* Search Box */}
        <div className="relative w-full bg-">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="border rounded-full w-full border-gray-100 text-gray-600 pl-9 pr-3 py-1.5 text-sm focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
          />
          <FaSearch
            className="absolute left-3 text-blue-600 top-2.5"
            size={14}
          />
        </div>

        <div className="flex justify-between items-center gap-3">
          {/* Up/Down Arrow */}
          <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
            <TbArrowsUpDown size={16} className="text-blue-600" />
          </button>

          {/* Sidebar Toggle */}
          <button
            type="button"
            onClick={() =>
              setIsOpen((prev) => (prev === "close" ? "open" : "close"))
            }
            className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <CgSortAz size={26} className="text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageFilter;
