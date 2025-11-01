import React from "react";
import FilterButton from "./FilterButton";

function Navigation({ filterOptions = [], selectedFilter, setSelectedFilter }) {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row pb-2 items-center justify-between gap-3">
        {/* ===== Left Section ===== */}
        <div
          className={`flex flex-row items-center gap-3 sm:w-1/2 w-full ${
            filterOptions.length > 1
              ? "overflow-x-scroll scrollbar-hidden"
              : "overflow-x-scroll scrollbar-hidden"
            // : "overflow-hidden scrollbar-hidden"
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
      {/* </div> */}

      </div>
    </>
  );
}

export default Navigation;
