import React, { useState, useMemo } from "react";
import { FiCheck } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";

const FunctionSidebarFilter = ({
  locations = [],
  operations = [],
  businesses = [],
  types = [],
  formulaUsage = [],
  alphabet = [],
  sort = [],
  onFilterChange,
}) => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedOperation, setSelectedOperation] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedSort, setSelectedSort] = useState([]);
  const [selectedFormulaUsage, setSelectedFormulaUsage] = useState([]);
  const [activeLetter, setActiveLetter] = useState("");
  
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Apply Filters manually (on button click)
  const applyFilters = () => {
    const appliedData = {
      location: selectedLocation,
      operation: selectedOperation,
      business: selectedBusiness,
      type: selectedType,
      sort: selectedSort,
      formulaUsage: selectedFormulaUsage,
      alphabet: activeLetter,
    };
    console.log("🟢 Filters Applied:", appliedData);
    onFilterChange?.(appliedData);
  };

  const resetFilters = () => {
    setSelectedLocation([]);
    setSelectedOperation("");
    setSelectedBusiness([]);
    setSelectedType([]);
    setSelectedSort([]);
    setSelectedFormulaUsage([]);
    setActiveLetter("");
    setSearchTerm("");
    onFilterChange?.({});
  };

  // 🔍 Search filter
  const filteredData = useMemo(() => {
    const match = (item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase());
    return {
      locations: locations.filter(match),
      operations: operations.filter(match),
      businesses: businesses.filter(match),
      types: types.filter(match),
      formulaUsage: formulaUsage.filter(match),
      sort: sort.filter(match),
    };
  }, [searchTerm, locations, operations, businesses, types, formulaUsage, sort]);

  // ✅ handle alphabet select
  const handleAlphabetClick = (letter) => {
    const newLetter = activeLetter === letter ? "" : letter;
    setActiveLetter(newLetter);
  };

  return (
    <aside className="relative w-full border-r border-gray-200 h-[calc(100vh-3.5rem)] overflow-y-auto p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-md font-semibold text-gray-900">Filters</span>
        <button
          onClick={resetFilters}
          className="text-sm newPrimaryColor font-semibold hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Search */}
      {/* <div className="relative mb-4">
        <MdOutlineSearch
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 newPrimaryColor"
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-3 py-1.5 text-gray-800 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-gray-600"
        />
      </div> */}

      <div className="flex w-full">
        <div className="flex flex-col w-full">
          {filteredData.locations.length > 0 && (
            <FilterSection
              title="Location"
              options={filteredData.locations}
              selected={selectedLocation}
              onSelect={setSelectedLocation}
              multiSelect
            />
          )}

          {filteredData.operations.length > 0 && (
            <FilterSection
              title="Operations"
              options={filteredData.operations}
              selected={selectedOperation}
              onSelect={setSelectedOperation}
              multiSelect={false}
            />
          )}

          {filteredData.formulaUsage.length > 0 && (
            <FilterSection
              title="Formula Usage"
              options={filteredData.formulaUsage}
              selected={selectedFormulaUsage}
              onSelect={setSelectedFormulaUsage}
              multiSelect
            />
          )}

          {filteredData.sort.length > 0 && (
            <FilterSection
              title="Sort"
              options={filteredData.sort}
              selected={selectedSort}
              onSelect={setSelectedSort}
              multiSelect
            />
          )}

          {filteredData.businesses.length > 0 && (
            <FilterSection
              title="Business"
              options={filteredData.businesses}
              selected={selectedBusiness}
              onSelect={setSelectedBusiness}
              multiSelect
            />
          )}

          {filteredData.types.length > 0 && (
            <FilterSection
              title="Type"
              options={filteredData.types}
              selected={selectedType}
              onSelect={setSelectedType}
              multiSelect
            />
          )}
        </div>

        {/* Alphabet Filter */}
        {alphabet.length > 0 && (
          <div className="flex flex-col min-w-[25px] overflow-hidden">
            <div className="flex flex-col items-center space-y-1 text-[10px] text-gray-400">
              {alphabet.map((letter) => (
                <span
                  key={letter}
                  onClick={() => handleAlphabetClick(letter)}
                  className={`flex justify-center items-center w-6 h-6 rounded-md cursor-pointer transition-all duration-150 ${
                    activeLetter === letter
                      ? "bg-blue-50 newPrimaryColor border border-blue-600 font-semibold"
                      : "hover:bg-blue-50 hover:newPrimaryColor hover:border hover:border-blue-600"
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ✅ Apply Button (restored) */}
      <div className="pt-3">
        <button
          onClick={applyFilters}
          className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Apply
        </button>
      </div>
    </aside>
  );
};

// ✅ Reusable Filter Section
const FilterSection = ({ title, options, selected, onSelect, multiSelect }) => {
  const handleSelect = (item) => {
    if (multiSelect) {
      const updated = selected.includes(item)
        ? selected.filter((i) => i !== item)
        : [...selected, item];
      onSelect(updated);
    } else {
      onSelect(item === selected ? "" : item);
    }
  };

  const isSelected = (item) =>
    multiSelect ? selected.includes(item) : selected === item;

  return (
    <div className="mb-4">
      <span className="text-[14px] text-gray-400 mb-2 tracking-wide">
        {title}
      </span>
      <ul className="ml-0 pl-0 space-y-1">
        {options.map((item) => (
          <li
            key={item}
            onClick={() => handleSelect(item)}
            className={`flex justify-between newFontColor font-medium text-[14px] items-center py-2 border-b px-2 rounded-md cursor-pointer transition-colors ${
              isSelected(item)
                ? "newFontColor"
                : "hover:newFontColor"
            }`}
          >
            {item}
            {isSelected(item) && (
              <FiCheck size={18} className="font-bold newPrimaryColor" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionSidebarFilter;
