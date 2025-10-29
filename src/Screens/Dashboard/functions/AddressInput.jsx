// import React, { useState } from "react";
// import { ReactComponent as LocationIcon } from "../../../Assets/icons/Pin.svg";
// // ✅ Major U.S. Cities List (expandable)
// const usaCities = [
//   "Albuquerque, New Mexico", "Arlington, Texas", "Atlanta, Georgia", "Austin, Texas",
//   "Baltimore, Maryland", "Boston, Massachusetts", "Buffalo, New York", "Charlotte, North Carolina",
//   "Chicago, Illinois", "Cincinnati, Ohio", "Cleveland, Ohio", "Colorado Springs, Colorado",
//   "Columbus, Ohio", "Dallas, Texas", "Denver, Colorado", "Detroit, Michigan",
//   "El Paso, Texas", "Fort Worth, Texas", "Fresno, California", "Houston, Texas",
//   "Indianapolis, Indiana", "Jacksonville, Florida", "Kansas City, Missouri", "Las Vegas, Nevada",
//   "Lexington, Kentucky", "Lincoln, Nebraska", "Long Beach, California", "Los Angeles, California",
//   "Louisville, Kentucky", "Memphis, Tennessee", "Mesa, Arizona", "Miami, Florida",
//   "Milwaukee, Wisconsin", "Minneapolis, Minnesota", "Nashville, Tennessee", "New Orleans, Louisiana",
//   "New York City, New York", "Oakland, California", "Oklahoma City, Oklahoma", "Omaha, Nebraska",
//   "Philadelphia, Pennsylvania", "Phoenix, Arizona", "Pittsburgh, Pennsylvania", "Portland, Oregon",
//   "Raleigh, North Carolina", "Sacramento, California", "San Antonio, Texas", "San Diego, California",
//   "San Francisco, California", "San Jose, California", "Seattle, Washington", "St. Louis, Missouri",
//   "Tampa, Florida", "Tucson, Arizona", "Tulsa, Oklahoma", "Virginia Beach, Virginia",
//   "Washington, D.C."
// ];

// const AddressInput = ({ formData, setFormData }) => {
//   const [suggestions, setSuggestions] = useState([]);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setFormData((prev) => ({ ...prev, location: value }));

//     if (value.length > 0) {
//       const filtered = usaCities
//         // .filter((city) => city.toLowerCase().startsWith(value.toLowerCase()))
//         .filter((city) => city.toLowerCase().includes(value.toLowerCase()))

//         .sort();
//       setSuggestions(filtered);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSelect = (city) => {
//     setFormData((prev) => ({ ...prev, location: city }));
//     setSuggestions([]);
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         name="location"
//         value={formData.location}
//         onChange={handleChange}
//         placeholder="Enter city name"
//         className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
//         autoComplete="off"
//       />
//                   <LocationIcon className="absolute top-4 right-4 newPrimaryColor" />

//       {suggestions.length > 0 && (
//         <ul className="absolute z-10 bg-white px-3 border border-t-0 rounded-b-lg shadow-md w-full max-h-56 overflow-y-auto">
//           {suggestions.map((city, index) => (
//             <li
//               key={index}
//               onClick={() => handleSelect(city)}
//               className="px-1 py-2 cursor-pointer hover:bg-gray-100 text-[13px]"
//             >
//               {city}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default AddressInput;


import React, { useState } from "react";
import { ReactComponent as LocationIcon } from "../../../Assets/icons/Pin.svg";
import { usaCities } from "../../../data/data";



const AddressInput = ({ formData, setFormData }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1); // 👈 Track selected suggestion
 
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, location: value }));

    if (value.length > 0) {
      const filtered = usaCities
        .filter((city) => city.toLowerCase().includes(value.toLowerCase()))
        .sort();
      setSuggestions(filtered);
      setActiveIndex(-1);
    } else {
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  const handleSelect = (city) => {
    setFormData((prev) => ({ ...prev, location: city }));
    setSuggestions([]);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) handleSelect(suggestions[activeIndex]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        name="location"
        required
        value={formData.location}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // 👈 Listen for keyboard events
        placeholder="Select Location"
        className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
        autoComplete="off"
      />
      <LocationIcon className="absolute top-4 right-4 newPrimaryColor" />

      {suggestions.length > 0 && (
        <ul className="absolute z-50 bg-white px-1 rounded-lg border max-h-36 border-t-0 rounded-b-lg shadow-md w-full overflow-y-auto">
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSelect(city)}
              className={`px-2 py-2 rounded-lg cursor-pointer text-[13px] ${
                index === activeIndex ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressInput;
