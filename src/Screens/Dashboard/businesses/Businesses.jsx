import React, { useState } from "react";
import useCardView from "../../../hook/useCardView";
import useFilterView from "../../../hook/useFilterView";
import PageFilter from "../../../Components/Dashboard/header/pageFilter/PageFilter";
import NestedHeader from "../../../Components/Dashboard/header/nestedHeader/NestedHeader";
import SidebarFilter from "../../../Components/Dashboard/sidebarFilter/SidebarFilter";
import ListView from "../../../Components/Dashboard/business/ListView";
import GridView from "../../../Components/Dashboard/business/GridView";
import { Outlet } from "react-router";

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

  const [businessData, setBusinessData] = useState([
    {
      id: 1,
      name: "SLP Garage",
      location: "Los Angeles, CA, USA",
      phone: "(323) 555-0199",
      rating: 3,
      reviews: 32,
      function: "Fix Car",
      problem: "Bad Radiator",
      branch: "Dallas, TX USA",
      online: true,
      distance: 200,
      isProblem: true,
    },
    {
      id: 2,
      name: "Turbo Motors",
      location: "Houston, TX, USA",
      phone: "(281) 777-0101",
      rating: 4,
      reviews: 54,
      function: "Engine Service",
      problem: "Overheating",
      branch: "Austin, TX USA",
      online: false,
      distance: 150,
      isProblem: false,
    },
    {
      id: 3,
      name: "AutoPro Mechanics",
      location: "San Diego, CA, USA",
      phone: "(619) 555-0133",
      rating: 5,
      reviews: 87,
      function: "Full Service",
      problem: "Oil Leakage",
      branch: "Phoenix, AZ USA",
      online: true,
      distance: 95,
      isProblem: true,
    },
    {
      id: 4,
      name: "MaxTune Workshop",
      location: "Phoenix, AZ, USA",
      phone: "(480) 555-0190",
      rating: 4,
      reviews: 42,
      function: "Tune-up & Performance",
      problem: "Low Power Output",
      branch: "Scottsdale, AZ USA",
      online: true,
      distance: 180,
      isProblem: true,
    },
    {
      id: 5,
      name: "EcoFix Auto Center",
      location: "Chicago, IL, USA",
      phone: "(312) 555-0142",
      rating: 3,
      reviews: 25,
      function: "Hybrid Repair",
      problem: "Battery Issue",
      branch: "Naperville, IL USA",
      online: false,
      distance: 120,
      isProblem: false,
    },
    {
      id: 6,
      name: "RapidRepair Garage",
      location: "New York, NY, USA",
      phone: "(917) 555-0110",
      rating: 5,
      reviews: 101,
      function: "Transmission Fix",
      problem: "Gear Slipping",
      branch: "Brooklyn, NY USA",
      online: true,
      distance: 80,
      isProblem: true,
    },
    {
      id: 7,
      name: "Metro AutoWorks",
      location: "San Francisco, CA, USA",
      phone: "(415) 555-0167",
      rating: 4,
      reviews: 63,
      function: "Brake Replacement",
      problem: "Brake Noise",
      branch: "Oakland, CA USA",
      online: false,
      distance: 240,
      isProblem: false,
    },
    {
      id: 8,
      name: "PrimeTech Motors",
      location: "Miami, FL, USA",
      phone: "(305) 555-0182",
      rating: 5,
      reviews: 89,
      function: "AC & Cooling",
      problem: "AC Not Cooling",
      branch: "Fort Lauderdale, FL USA",
      online: true,
      distance: 60,
      isProblem: true,
    },
  ]);

  return (
    <div className="relative flex w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-18 left-0 z-30 h-[calc(100vh-3.5rem)] w-70 border-r border-gray-200 bg-white overflow-y-auto transition-transform duration-300 ease-in-out transform ${
          isOpen === "open" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarFilter />
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
        <div className="bg-gray-50 mt-3 relative pt-40 pb-10 rounded-lg min-h-[calc(100vh-8rem)]">
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
