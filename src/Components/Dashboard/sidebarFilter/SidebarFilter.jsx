// import React, { useState } from "react";
// import { FiSearch, FiCheck } from "react-icons/fi";
// import { MdOutlineSearch } from "react-icons/md";

// const SidebarFilter = () => {
//   const [selectedLocation, setSelectedLocation] = useState("All (2000)");
//   const [selectedOperation, setSelectedOperation] = useState("Exact Phrase");
//   const [activeLetter, setActiveLetter] = useState("A");

//   const locations = ["All (2000)", "Los Angeles, CA", "Las Vegas", "Dallas"];
//   const operations = ["Exact Phrase", "AND", "OR"];
//   const alphabet = Array.from({ length: 26 }, (_, i) =>
//     String.fromCharCode(65 + i)
//   );

//   return (
//     <aside className="relative w-64 bg-white border-r border-gray-200 h-[calc(100vh-3.5rem)] p-4 overflow-y-auto">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4">
//         <span className="text-md font-semibold text-gray-900">Filters</span>
//         <button className="text-sm text-blue-600 font-semibold hover:underline">
//           Reset Filters
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="relative mb-5">
//         <MdOutlineSearch
//           size={20}
//           className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 font-semibold"
//         />
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full pl-9  pr-3 py-1.5 text-gray-800 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-gray-600"
//         />
//       </div>

//       {/* Location Filter */}
//       <div className="mb-6">
//         <span className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
//           Location
//         </span>
//         <ul className="  ml-0 pl-0 space-y-1">
//           {locations.map((loc) => (
//             <li
//               key={loc}
//               onClick={() => setSelectedLocation(loc)}
//               className={`flex justify-between text-gray-800 text-sm items-center py-2 border-b px-2 rounded-md cursor-pointer transition-colors ${
//                 selectedLocation === loc
//                   ? " text-blue-600"
//                   : "hover:text-blue-600"
//               }`}
//             >
//               {loc}
//               {selectedLocation === loc && (
//                 <FiCheck size={20} className="font-bold text-blue-600" />
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Operations Filter */}
//       <div className="mb-6">
//         <span className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
//           Operations
//         </span>
//         <ul className="  ml-0 pl-0 space-y-1">
//           {operations.map((op) => (
//             <li
//               key={op}
//               onClick={() => setSelectedOperation(op)}
//               className={`flex justify-between items-center text-gray-800 py-1 px-2 rounded-md cursor-pointer text-sm transition-colors ${
//                 selectedOperation === op
//                   ? "bg-blue-50 text-blue-600"
//                   : "hover:bg-gray-50 text-gray-700"
//               }`}
//             >
//               {op}
//               {selectedOperation === op && <FiCheck size={14} />}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* The Given Set */}
//       <div className="pb-4 border-b border-gray-200 mb-4">
//         <span className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
//           The Given Set
//         </span>
//         <p className="text-sm text-gray-700">The Given Set</p>
//       </div>

//       {/* Apply Button */}
//       <div className="pt-2">
//         <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg font-medium hover:bg-blue-700 transition">
//           Apply
//         </button>
//       </div>

//       {/* Alphabet Index (Right Edge) */}
//       <div className="absolute top-20 right-0 flex flex-col items-center space-y-1 text-[10px] text-gray-400">
//         {alphabet.map((letter) => (
//           <span
//             key={letter}
//             onClick={() => setActiveLetter(letter)}
//             className={`flex justify-center items-center w-6 h-6 rounded-lg cursor-pointer transition-all duration-150
//         ${
//           activeLetter === letter
//             ? "bg-blue-600 text-white font-bold"
//             : "hover:bg-blue-50 hover:text-blue-600 hover:font-semibold"
//         }`}
//           >
//             {letter}
//           </span>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default SidebarFilter;

import React, { useState } from "react";
import {  FiCheck } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";

const SidebarFilter = () => {
  const [selectedLocation, setSelectedLocation] = useState("All (2000)");
  const [selectedOperation, setSelectedOperation] = useState("Exact Phrase");
  const [activeLetter, setActiveLetter] = useState("A");

  const locations = ["All (2000)", "Los Angeles, CA", "Las Vegas", "Dallas"];
  const operations = ["Exact Phrase", "AND", "OR"];
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <aside className="relative w-64  border-r border-gray-200 h-[calc(100vh-3.5rem)] overflow-y-auto p-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-md font-semibold text-gray-900">Filters</span>
        <button className="text-sm text-blue-600 font-semibold hover:underline">
          Reset Filters
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4 ">
        <MdOutlineSearch
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 font-semibold"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-9 pr-3 py-1.5 text-gray-800 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-gray-600"
        />
      </div>
      <div className="flex w-full ">
        <div className="flex flex-col w-full">
          {/* Location Filter */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              Location
            </span>
            <ul className="ml-0 pl-0 space-y-1">
              {locations.map((loc) => (
                <li
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`flex justify-between text-gray-800 text-sm items-center py-2 border-b px-2 rounded-md cursor-pointer transition-colors ${
                    selectedLocation === loc
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {loc}
                  {selectedLocation === loc && (
                    <FiCheck size={20} className="font-bold text-blue-600" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Filter */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              Operations
            </span>
            <ul className="ml-0 pl-0 space-y-1">
              {operations.map((op) => (
                 <li
                  key={op}
                  onClick={() => setSelectedOperation(op)}
                  className={`flex justify-between text-gray-800 text-sm items-center py-2 border-b px-2 rounded-md cursor-pointer transition-colors ${
                    selectedOperation === op
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {op}
                  {selectedOperation === op && (
                    <FiCheck size={20} className="font-bold text-blue-600" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* The Given Set */}
          <div className="pb-4 border-b border-gray-200 mb-4">
            <span className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              The Given Set
            </span>
            <p className="text-sm text-gray-700">The Given Set</p>
          </div>
        </div>

        <div className="flex flex-col min-w-[25px] overflow-hidden">
          {/* Alphabet Index (Right Edge) */}
          <div className=" flex flex-col items-center space-y-1 text-[10px] text-gray-400">
            {alphabet.map((letter) => (
              <span
                key={letter}
                onClick={() => setActiveLetter(letter)}
                className={`flex justify-center items-center w-6 h-6 rounded-md cursor-pointer transition-all duration-150 
        ${
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
      </div>
      {/* Apply Button */}
      <div className="pt-2">
        <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg font-medium hover:bg-blue-700 transition">
          Apply
        </button>
      </div>
    </aside>
  );
};

export default SidebarFilter;
