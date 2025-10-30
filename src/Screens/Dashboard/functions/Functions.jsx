import React, { useCallback, useEffect, useState } from "react";
import useCardView from "../../../hook/useCardView";
import useFilterView from "../../../hook/useFilterView";
import PageFilter from "../../../Components/Dashboard/header/pageFilter/PageFilter";
import NestedHeader from "../../../Components/Dashboard/header/nestedHeader/NestedHeader";
import FunctionSidebarFilter from "../../../Components/Dashboard/sidebarFilter/FunctionSidebarFilter";
import { Outlet, useNavigate } from "react-router";
import AddButton from "../../../Components/Dashboard/common/AddButton";
import {
  businessData,
  businesses,
  formulaUsage,
  functionsCategory,
  locations,
  operations,
  types,
} from "../../../data/data";
import FunctionListView from "../../../Components/Dashboard/business/FunctionListView";
import FunctionGridView from "../../../Components/Dashboard/business/FunctionGridView";

function Functions() {
  const [currentUser, setCurrentUser] = useState("John Thompson");
  const [view, setView] = useCardView();
  const [isOpen, setIsOpen] = useFilterView();
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("allFunctions");
  const [activeFilters, setActiveFilters] = useState({});

  const navigate = useNavigate();

  const filterOptions = [
    { label: "All Functions", value: "allFunctions" },
    { label: "My Functions", value: "myFunctions" },
  ];

  const handleAdd = () => navigate("addFunction");

  const handleFilterChange = useCallback((filters) => {
    setActiveFilters({ ...filters });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    console.log("Active Filters Updated:", activeFilters);
  }, [activeFilters]);

  return (
    <div className="relative flex w-full">
      <div
        className={`fixed top-18 left-0 z-30 h-[calc(100vh-3.5rem)] 
    w-[85%] sm:w-64 md:w-64 
    border-r border-gray-200 bg-white overflow-y-auto 
    transition-transform duration-300 ease-in-out transform
    ${isOpen === "open" ? "translate-x-0" : "-translate-x-full"}`}
      >
        <FunctionSidebarFilter
          locations={locations}
          operations={operations}
          formulaUsage={formulaUsage}
          businesses={businesses}
          types={types}
          // alphabet={alphabet}
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
          className={`fixed top-14 left-0 right-0 z-20 bg-gray-50 p-4 flex flex-col gap-2 transition-all duration-300 ease-in-out ${
            isOpen === "open" ? "md:ml-64" : "ml-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-2">
            <NestedHeader title="Functions" view={view} setView={setView} />
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
        </div>

        <div className="bg-gray-50 relative mt-[11rem] sm:mt-[8rem] pb-10 rounded-lg min-h-[calc(100vh-10rem)]">
          <AddButton onClick={handleAdd} label="Add Function" />

          {view === "list" ? (
            <FunctionListView
              data={businessData}
              selectedFilter={selectedFilter}
              activeFilters={activeFilters}
              functionsCategory={functionsCategory}
              filterOptions="myFunctions"
              currentUser={currentUser}
            />
          ) : (
            <FunctionGridView
              data={businessData}
              selectedFilter={selectedFilter}
              activeFilters={activeFilters}
              functionsCategory={functionsCategory}
              filterOptions="myFunctions"
              currentUser={currentUser}
            />
          )}

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Functions;
