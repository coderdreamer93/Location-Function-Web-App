import React from "react";
import FilterButton from "./FilterButton";
import { ReactComponent as SearchIcon } from "../../../../Assets/icons/searchIcon.svg";
import { ReactComponent as FilterIcon } from "../../../../Assets/icons/filterIcon.svg";
import { ReactComponent as SortIcon } from "../../../../Assets/icons/sortIcon.svg";

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
    <>
      <div className="w-full hidden sm:flex flex-col sm:flex-row pb-2 items-center justify-between gap-3">
        {/* ===== Left Section ===== */}
        <div
          className={`flex flex-row items-center gap-3 sm:w-1/2 w-full ${
            filterOptions.length > 3
              ? "overflow-x-scroll scrollbar-hidden"
              : "overflow-hidden scrollbar-hidden"
          }`}
        >
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
        <div className="flex flex-row items-center gap-3 sm:w-1/2 w-full">
          {/* Search Box */}
          <div className="relative w-full bg-">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="border rounded-full w-full border-gray-100 newFontColor pl-12 pr-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
            />
            <SearchIcon
              className=" absolute left-3 newPrimaryColor top-1.5"
              size={14}
            />
          </div>

          <div className="flex justify-between items-center gap-3">
            {/* Up/Down Arrow */}
            <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
              <SortIcon size={16} className="newPrimaryColor" />
            </button>

            {/* Sidebar Toggle */}
            <button
              type="button"
              onClick={() =>
                setIsOpen((prev) => (prev === "close" ? "open" : "close"))
              }
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <FilterIcon size={26} className="newPrimaryColor" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden flex flex-col pb-2 items-center justify-between gap-3">
        {/* ===== Left Section ===== */}
        <div className="w-full mb-2">
          <div className="relative w-full bg-">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="border rounded-full w-full border-gray-100 newFontColor pl-12 pr-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
            />
            <SearchIcon
              className=" absolute left-3 newPrimaryColor top-1.5"
              size={14}
            />
          </div>
        </div>

        {/* ===== Right Section ===== */}
          <div className="flex flex-row items-center gap-2 sm:w-1/2 w-full">
            <div
              className={`flex flex-row items-center gap-2 w-3/4 ${
                filterOptions.length > 3
                  ? "overflow-x-scroll scrollbar-hidden"
                  : "overflow-hidden scrollbar-hidden"
              }`}
            >
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
            <div className="flex justify-end items-center gap-2 w-1/4">
              {/* Up/Down Arrow */}
              <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                <SortIcon size={16} className="newPrimaryColor" />
              </button>

              {/* Sidebar Toggle */}
              <button
                type="button"
                onClick={() =>
                  setIsOpen((prev) => (prev === "close" ? "open" : "close"))
                }
                className="flex items-center justify-center w-8 h-8 bg-white rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <FilterIcon size={26} className="newPrimaryColor" />
              </button>
            </div>
          </div>
      </div>
    </>
  );
}

export default PageFilter;
