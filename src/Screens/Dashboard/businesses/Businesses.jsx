// import React, { useState, useEffect, useCallback } from "react";
// import useCardView from "../../../hook/useCardView";
// import useFilterView from "../../../hook/useFilterView";
// import PageFilter from "../../../Components/Dashboard/header/pageFilter/PageFilter";
// import NestedHeader from "../../../Components/Dashboard/header/nestedHeader/NestedHeader";
// import SidebarFilter from "../../../Components/Dashboard/sidebarFilter/SidebarFilter";
// import ListView from "../../../Components/Dashboard/business/ListView";
// import GridView from "../../../Components/Dashboard/business/GridView";
// import { Outlet } from "react-router";
// import {
//   alphabet,
//   businessData,
//   businesses,
//   formulaUsage,
//   locations,
//   operations,
//   types,
// } from "../../../data/data";

// function Businesses() {
//   const [view, setView] = useCardView();
//   const [isOpen, setIsOpen] = useFilterView();
//   const [search, setSearch] = useState("");
//   const [selectedFilter, setSelectedFilter] = useState("all");
//   const [activeFilters, setActiveFilters] = useState({});
//   const [filteredData, setFilteredData] = useState(businessData);

//   const filterOptions = [
//     { label: "All Businesses", value: "all" },
//     { label: "Near", value: "near" },
//     { label: "Available Now", value: "available" },
//   ];

//   // 🔁 Receive filters from SidebarFilter
//   const handleFilterChange = useCallback((filters) => {
//     setActiveFilters({ ...filters });
//   }, []);

//   // 🧠 Apply Filters
//   useEffect(() => {
//     console.log("🧩 Active Filters Changed:", activeFilters);
//     let data = [...businessData];

//     // 🔤 Alphabet filter — only affects businessData
//     if (activeFilters?.alphabet) {
//       const letter = activeFilters.alphabet.toLowerCase();
//       data = data.filter((b) => b.location.toLowerCase().startsWith(letter));
//     }

//     // 📍 Location filter — supports multi-select & AND/OR logic
//     if (Array.isArray(activeFilters?.location) && activeFilters.location.length > 0) {
//       const validLocations = activeFilters.location.filter(
//         (loc) => typeof loc === "string" && loc.trim() !== ""
//       );

//       if (validLocations.length > 0) {
//         const isAndLogic = activeFilters?.logic === "AND";

//         if (isAndLogic) {
//           data = data.filter((b) =>
//             validLocations.every((loc) =>
//               b.location.toLowerCase().includes(loc.toLowerCase())
//             )
//           );
//         } else {
//           data = data.filter((b) =>
//             validLocations.some((loc) =>
//               b.location.toLowerCase().includes(loc.toLowerCase())
//             )
//           );
//         }
//       }
//     }

//     // 🏢 Business filter
//     if (Array.isArray(activeFilters?.business) && activeFilters.business.length > 0) {
//       data = data.filter((b) =>
//         activeFilters.business.some((biz) =>
//           b.name.toLowerCase().includes(biz.toLowerCase())
//         )
//       );
//     }

//     // ⚙️ Operation filter
//     if (typeof activeFilters?.operation === "string" && activeFilters.operation) {
//       const op = activeFilters.operation.toLowerCase();
//       if (op === "and") {
//         data = data.filter((b) => b.function && b.problem);
//       } else if (op === "or") {
//         data = data.filter((b) => b.function || b.problem);
//       } else if (op === "exact phrase") {
//         data = data.filter((b) => b.function.toLowerCase().includes("engine"));
//       }
//     }

//     // 🧮 Formula usage filter
//     if (Array.isArray(activeFilters?.formulaUsage) && activeFilters.formulaUsage.length > 0) {
//       data = data.filter((b) =>
//         activeFilters.formulaUsage.some((f) =>
//           b.function.toLowerCase().includes(f.toLowerCase())
//         )
//       );
//     }

//     // 🔍 Search filter
//     if (search.trim()) {
//       const s = search.toLowerCase();
//       data = data.filter(
//         (b) =>
//           b.name.toLowerCase().includes(s) ||
//           b.location.toLowerCase().includes(s) ||
//           b.function.toLowerCase().includes(s) ||
//           b.problem.toLowerCase().includes(s)
//       );
//     }

//     // 🟢 Top bar filter (available / near)
//     if (selectedFilter === "available") {
//       data = data.filter((b) => b.online);
//     } else if (selectedFilter === "near") {
//       data = data.filter((b) => b.distance < 180);
//     }

//     setFilteredData(data);
//   }, [activeFilters, search, selectedFilter]);

//   return (
//     <div className="relative flex w-full">
//       {/* Sidebar */}
//       <div
//         className={`fixed top-18 left-0 z-30 h-[calc(100vh-3.5rem)] w-70 border-r border-gray-200 bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${
//           isOpen === "open" ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <SidebarFilter
//           locations={locations}
//           operations={operations}
//           formulaUsage={formulaUsage}
//           alphabet={alphabet}
//           businesses={businesses}
//           types={types}
//           onFilterChange={handleFilterChange}
//         />
//       </div>

//       {/* Main Area */}
//       <div
//         className={`flex-1 transition-all duration-300 ease-in-out p-4 ${
//           isOpen === "open" ? " md:ml-64" : "ml-0"
//         }`}
//       >
//         {/* Header */}
//         <div
//           className={`fixed top-14 left-0 right-0 z-20 bg-gray-50 p-4 transition-all duration-300 ease-in-out ${
//             isOpen === "open" ? "md:ml-64" : "ml-0"
//           }`}
//         >
//           <NestedHeader title="Businesses" view={view} setView={setView} />
//           <PageFilter
//             search={search}
//             setSearch={setSearch}
//             filterOptions={filterOptions}
//             selectedFilter={selectedFilter}
//             setSelectedFilter={setSelectedFilter}
//             isOpen={isOpen}
//             setIsOpen={setIsOpen}
//           />
//         </div>

//         {/* Data */}
//         <div className="bg-gray-50 relative sm:mt-36 mt-48 pb-10 rounded-lg min-h-[calc(100vh-8rem)]">
//           {view === "list" ? (
//             <ListView data={filteredData} />
//           ) : (
//             <GridView data={filteredData} />
//           )}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Businesses;

import React, { useState, useEffect, useCallback } from "react";
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
  const [activeFilters, setActiveFilters] = useState({});
  const [filteredData, setFilteredData] = useState(businessData);

  const filterOptions = [
    { label: "All Businesses", value: "all" },
    { label: "Near", value: "near" },
    { label: "Available Now", value: "available" },
  ];

  // 🔁 Receive filters from SidebarFilter
  const handleFilterChange = useCallback((filters) => {
    setActiveFilters({ ...filters });
  }, []);

  // 🧠 Apply Filters
  useEffect(() => {
    let data = [...businessData];

    // 🔤 Alphabet filter
    if (activeFilters?.alphabet) {
      const letter = activeFilters.alphabet.toLowerCase();
      data = data.filter((b) => b.name.toLowerCase().startsWith(letter));
    }

    // 📍 Location filter — supports multiple selections
    if (
      Array.isArray(activeFilters?.location) &&
      activeFilters.location.length > 0
    ) {
      const validLocations = activeFilters.location
        .filter((loc) => typeof loc === "string" && loc.trim() !== "")
        .map((l) => l.toLowerCase());

      const isAndLogic = activeFilters?.logic === "AND";

      if (isAndLogic) {
        // All selected locations must be present (rare use)
        data = data.filter((b) =>
          validLocations.every((loc) => b.location.toLowerCase().includes(loc))
        );
      } else {
        // Show if matches any selected location
        data = data.filter((b) =>
          validLocations.some((loc) => b.location.toLowerCase().includes(loc))
        );
      }
    }

    // 🏢 Business filter
    if (
      Array.isArray(activeFilters?.business) &&
      activeFilters.business.length > 0
    ) {
      data = data.filter((b) =>
        activeFilters.business.some((biz) =>
          b.name.toLowerCase().includes(biz.toLowerCase())
        )
      );
    }

    // ⚙️ Operation filter
    if (
      typeof activeFilters?.operation === "string" &&
      activeFilters.operation
    ) {
      const op = activeFilters.operation.toLowerCase();
      if (op === "and") {
        data = data.filter((b) => b.function && b.problem);
      } else if (op === "or") {
        data = data.filter((b) => b.function || b.problem);
      } else if (op === "exact phrase") {
        data = data.filter((b) => b.function.toLowerCase().includes("engine"));
      }
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

    // 🔍 Search filter
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

    // 🟢 Top bar filter (available / near)
    if (selectedFilter === "available") {
      data = data.filter((b) => b.online);
    } else if (selectedFilter === "near") {
      data = data.filter((b) => b.distance < 180);
    }

    setFilteredData(data);
  }, [activeFilters, search, selectedFilter]);

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
          alphabet={alphabet}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Main Area */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out p-4 ${
          isOpen === "open" ? " md:ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
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

        {/* Data */}
        <div className="bg-gray-50 relative sm:mt-36 mt-48 pb-10 rounded-lg min-h-[calc(100vh-8rem)]">
          {view === "list" ? (
            <ListView data={filteredData} />
          ) : (
            <GridView data={filteredData} />
          )}
          {/* <div className="w-full h-full">

          <Outlet />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Businesses;
