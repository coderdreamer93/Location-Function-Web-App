
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
