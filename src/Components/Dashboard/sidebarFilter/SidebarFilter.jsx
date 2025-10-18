import React, { useState, useEffect, useMemo } from "react";
import { FiCheck } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";

const SidebarFilter = ({
  locations = [],
  operations = [],
  businesses = [],
  types = [],
  formulaUsage = [],
  alphabet = [],
  onFilterChange,
}) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOperation, setSelectedOperation] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFormulaUsage, setSelectedFormulaUsage] = useState("");
  const [activeLetter, setActiveLetter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Notify parent when filters change
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        location: selectedLocation,
        operation: selectedOperation,
        business: selectedBusiness,
        type: selectedType,
        formulaUsage: selectedFormulaUsage,
        alphabet: activeLetter,
      });
    }
  }, [
    selectedLocation,
    selectedOperation,
    selectedBusiness,
    selectedType,
    selectedFormulaUsage,
    activeLetter,
    onFilterChange,
  ]);

  const resetFilters = () => {
    setSelectedLocation("");
    setSelectedOperation("");
    setSelectedBusiness("");
    setSelectedType("");
    setSelectedFormulaUsage("");
    setActiveLetter("");
    setSearchTerm("");
  };

  // ✅ Filtered lists based on search term
  const filteredData = useMemo(() => {
    const match = (item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase());

    return {
      locations: locations.filter(match),
      operations: operations.filter(match),
      businesses: businesses.filter(match),
      types: types.filter(match),
      formulaUsage: formulaUsage.filter(match),
    };
  }, [searchTerm, locations, operations, businesses, types, formulaUsage]);

  return (
    <aside className="relative w-64 border-r border-gray-200 h-[calc(100vh-3.5rem)] overflow-y-auto p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-md font-semibold text-gray-900">Filters</span>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 font-semibold hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <MdOutlineSearch
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600"
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-3 py-1.5 text-gray-800 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-gray-600"
        />
      </div>

      {/* Scrollable Filters */}
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          {filteredData.locations.length > 0 && (
            <FilterSection
              title="Location"
              options={filteredData.locations}
              selected={selectedLocation}
              onSelect={setSelectedLocation}
            />
          )}

          {filteredData.operations.length > 0 && (
            <FilterSection
              title="Operations"
              options={filteredData.operations}
              selected={selectedOperation}
              onSelect={setSelectedOperation}
            />
          )}

          {filteredData.formulaUsage.length > 0 && (
            <FilterSection
              title="Formula Usage"
              options={filteredData.formulaUsage}
              selected={selectedFormulaUsage}
              onSelect={setSelectedFormulaUsage}
            />
          )}

          {filteredData.businesses.length > 0 && (
            <FilterSection
              title="Business"
              options={filteredData.businesses}
              selected={selectedBusiness}
              onSelect={setSelectedBusiness}
            />
          )}

          {filteredData.types.length > 0 && (
            <FilterSection
              title="Type"
              options={filteredData.types}
              selected={selectedType}
              onSelect={setSelectedType}
            />
          )}
        </div>

        {/* Alphabet */}
        {alphabet.length > 0 && (
          <div className="flex flex-col min-w-[25px] overflow-hidden">
            <div className="flex flex-col items-center space-y-1 text-[10px] text-gray-400">
              {alphabet.map((letter) => (
                <span
                  key={letter}
                  onClick={() => setActiveLetter(letter)}
                  className={`flex justify-center items-center w-6 h-6 rounded-md cursor-pointer transition-all duration-150 ${
                    activeLetter === letter
                      ? "bg-blue-50 text-blue-600 border border-blue-600 font-semibold"
                      : "hover:bg-blue-50 hover:text-blue-600 hover:border hover:border-blue-600"
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Apply Button */}
      <div className="pt-3">
        <button
          onClick={() =>
            onFilterChange &&
            onFilterChange({
              location: selectedLocation,
              operation: selectedOperation,
              business: selectedBusiness,
              type: selectedType,
              formulaUsage: selectedFormulaUsage,
              alphabet: activeLetter,
            })
          }
          className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Apply
        </button>
      </div>
    </aside>
  );
};

// ✅ Small reusable section
const FilterSection = ({ title, options, selected, onSelect }) => (
  <div className="mb-4">
    <span className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
      {title}
    </span>
    <ul className="ml-0 pl-0 space-y-1">
      {options.map((item) => (
        <li
          key={item}
          onClick={() => onSelect(item)}
          className={`flex justify-between text-gray-800 text-sm items-center py-2 border-b px-2 rounded-md cursor-pointer transition-colors ${
            selected === item ? "text-blue-600" : "hover:text-blue-600"
          }`}
        >
          {item}
          {selected === item && (
            <FiCheck size={18} className="font-bold text-blue-600" />
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarFilter;
