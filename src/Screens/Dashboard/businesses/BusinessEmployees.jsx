import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { businessData } from "../../../data/data";
import { ReactComponent as AddEmployeesButton } from "../../../Assets/icons/addEmployees.svg";

import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";
import Navigation from "../../../Components/Dashboard/header/pageFilter/Navigation";
import EmployeesListView from "../../../Components/Dashboard/business/EmployeesListView";

function BusinessEmployees() {
  const [selectedFilter, setSelectedFilter] = useState("allEmployees");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const filterOptions = [
    { label: "All Employees", value: "allEmployees" },
    { label: "Requested", value: "requested" },
  ];

  // 🔍 filter employees based on selectedFilter
  useEffect(() => {
    if (selectedFilter === "allEmployees") {
      setFilteredData(businessData.filter((item) => item.isProblem === true));
    } else if (selectedFilter === "requested") {
      setFilteredData(businessData.filter((item) => item.isProblem === false));
    } else {
      setFilteredData(businessData);
    }
  }, [selectedFilter]);

  return (
    <div className="relative flex flex-col w-full bg-gray-50 h-screen">
      {/* Header */}
      <div className="z-20 bg-white p-4">
        <NestedHeaderWhite
          title="Employees"
          breadcrumbs={[
            {
              label: "Business",
              path: "/dashboard/businesses/businessemployees",
            },
            { label: "Employees", path: "" },
          ]}
        />
      </div>

      {/* Filter Navigation */}
      <div className="w-full px-4 bg-white">
        <Navigation
          filterOptions={filterOptions}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>

      {/* Employee List */}
      <div
        className={`${
          selectedFilter === "allEmployees" ? "bg-gray-50" : "bg-gray-50"
        } p-2 min-h-[calc(100vh-8rem)]`}
      >
        <EmployeesListView data={filteredData} />
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 flex bg-white justify-end w-full items-center h-20">
        <AddEmployeesButton
          className="cursor-pointer"
          onClick={() => navigate("../businesses/addbusinessdetail")}
        />
      </div>
    </div>
  );
}

export default BusinessEmployees;
