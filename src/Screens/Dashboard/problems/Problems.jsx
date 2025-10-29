import React, { useState, useEffect, useCallback } from "react";
import useCardView from "../../../hook/useCardView";
import useFilterView from "../../../hook/useFilterView";
import PageFilter from "../../../Components/Dashboard/header/pageFilter/PageFilter";
import NestedHeader from "../../../Components/Dashboard/header/nestedHeader/NestedHeader";
import SidebarFilter from "../../../Components/Dashboard/sidebarFilter/SidebarFilter";
import { Outlet, useNavigate } from "react-router";
import AddButton from "../../../Components/Dashboard/common/AddButton";
// import ProblemGridView from "../../../Components/Dashboard/business/ProblemGridView";
import ProblemListView from "../../../Components/Dashboard/business/ProblemListView";
import {
  businessData,
  businesses,
  formulaUsage,
  locations,
  operations,

} from "../../../data/data";

function Problems() {
  const [view, setView] = useCardView();
  const [isOpen, setIsOpen] = useFilterView();
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("allProblems");
  const [activeFilters, setActiveFilters] = useState({});
  const [filteredData, setFilteredData] = useState(businessData);
  const navigate = useNavigate();

  const filterOptions = [
    { label: "All Problems", value: "allProblems" },
    { label: "My Problems", value: "myProblems" },
    { label: "Shared Problems", value: "sharedProblems" },
    { label: "Assign Problems", value: "assignProblems" },
  ];

  const handleAdd = () => navigate("addProblem");

  const handleFilterChange = useCallback((filters) => {
    setActiveFilters({ ...filters });
  }, []);

  useEffect(() => {
    let data = [...businessData];

    // 🔤 Alphabet filter
    if (activeFilters?.alphabet) {
      const letter = activeFilters.alphabet.toLowerCase();
      data = data.filter((b) => b.name.toLowerCase().startsWith(letter));
    }

    // 📍 Location filter
    if (
      Array.isArray(activeFilters?.location) &&
      activeFilters.location.length > 0
    ) {
      const validLocations = activeFilters.location
        .filter((loc) => typeof loc === "string" && loc.trim() !== "")
        .map((l) => l.toLowerCase());

      data = data.filter((b) =>
        validLocations.some((loc) => b.location.toLowerCase().includes(loc))
      );
    }

    // 🧮 Formula usage filter
    if (
      Array.isArray(activeFilters?.formulaUsage) &&
      activeFilters.formulaUsage.length > 0
    ) {
      data = data.filter((b) =>
        activeFilters.formulaUsage.some((f) =>
          b.function.toLowerCase().includes(f.toLowerCase())
        )
      );
    }

    // 🔍 Search
    if (search.trim()) {
      const s = search.toLowerCase();
      data = data.filter(
        (b) =>
          b.name.toLowerCase().includes(s) ||
          b.location.toLowerCase().includes(s) ||
          b.function.toLowerCase().includes(s) ||
          b.problem.toLowerCase().includes(s)
      );
    }

    // 🧩 Top Filter Logic
    if (selectedFilter === "myProblems") {
      data = data.filter((b) => b.isProblem); // example
    } else if (selectedFilter === "sharedProblems") {
      data = data.filter((b) => !b.isProblem); // example
    }

    setFilteredData(data);
  }, [activeFilters, search, selectedFilter]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative flex w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-18 left-0 z-30 h-[calc(100vh-3.5rem)] 
    w-[85%] sm:w-64 md:w-64 
    border-r border-gray-200 bg-white overflow-y-auto 
    transition-transform duration-300 ease-in-out transform
    ${isOpen === "open" ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarFilter
          locations={locations}
          operations={operations}
          formulaUsage={formulaUsage}
          businesses={businesses}
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
            <NestedHeader title="Problems" view={view} setView={setView} />
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

        <div className="bg-gray-50 relative sm:mt-[8rem] mt-[11rem] pb-10 rounded-lg min-h-[calc(100vh-10rem)]">
          <AddButton onClick={handleAdd} label="Add Problem" />

          {view === "list" ? (
            <ProblemListView
              data={businessData}
              selectedFilter={selectedFilter}
            />
          ) : (
            <ProblemListView
              data={businessData}
              selectedFilter={selectedFilter}
            />
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Problems;
