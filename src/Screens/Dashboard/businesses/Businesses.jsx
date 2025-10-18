import React, { useState } from "react";
import useCardView from "../../../hook/useCardView";
import useFilterView from "../../../hook/useFilterView";
import PageFilter from "../../../Components/Dashboard/header/pageFilter/PageFilter";
import NestedHeader from "../../../Components/Dashboard/header/nestedHeader/NestedHeader";
import SidebarFilter from "../../../Components/Dashboard/sidebarFilter/SidebarFilter";
import ListView from "../../../Components/Dashboard/business/ListView";
import GridView from "../../../Components/Dashboard/business/GridView";
import { Outlet } from "react-router";
import {
  alphabet,
  businessData,
  businesses,
  formulaUsage,
  locations,
  operations,
  types,
} from "../../../data/data";

function Businesses() {
  const [view, setView] = useCardView();
  const [isOpen, setIsOpen] = useFilterView();
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterOptions = [
    { label: "All Businesses", value: "all" },
    { label: "Near", value: "near" },
    { label: "Available Now", value: "available" },
  ];





    const handleFilterChange = (filters) => {
    console.log("Selected Filters:", filters);
    // You can apply your filtering logic here
  };

  return (
    <div className="relative flex w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-18 left-0 z-30 h-[calc(100vh-3.5rem)] w-70 border-r border-gray-200 bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${
          isOpen === "open" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarFilter
          locations={locations}
          operations={operations}
          formulaUsage={formulaUsage}
          alphabet={alphabet}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/*  ================= Right Side ================== */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out p-4 ${
          isOpen === "open" ? " md:ml-64" : "ml-0"
        }`}
      >
        <div
          className={`fixed top-14 left-0 right-0 z-20 bg-gray-50 p-4 transition-all duration-300 ease-in-out ${
            isOpen === "open" ? "md:ml-64" : "ml-0"
          }`}
        >
          <NestedHeader title="Businesses" view={view} setView={setView} />
          <PageFilter
            search={search}
            setSearch={setSearch}
            filterOptions={filterOptions}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 relative sm:mt-36 mt-48 pb-10 rounded-lg min-h-[calc(100vh-8rem)]">
          {view === "list" ? (
            <div>
              <div>
                <div>
                  <ListView data={businessData} />
                  <Outlet />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <GridView data={businessData} />
              <Outlet />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Businesses;
