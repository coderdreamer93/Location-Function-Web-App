"use client";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

export default function AboutAbility({handlePreview}) {
  const [selected, setSelected] = useState("");

  const options = ["Yes", "No"];

  return (
    <div className="w-full mx-auto">
      <label className="block text-sm font-medium text-black mb-1">
        Show With Function
      </label>

      <div className="relative">
        <select
          name="formula"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full border border-blue-600 rounded-lg px-3 py-2 pr-10 text-sm text-black focus:ring-1 focus:ring-blue-600 focus:text-white outline-none appearance-none"
        >
          <option value="">The Given Set</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Dropdown arrow */}
        <span className="absolute right-3 top-2.5 text-blue-600 text-sm pointer-events-none">
          ▼
        </span>

        {/* Checkmark icon if selected */}
        {selected && (
          <IoCheckmark className="absolute right-8 top-2.5 text-blue-600 text-lg" />
        )}
      </div>
      <div className="md:col-span-2 flex gap-4 mt-4">
        <button
          type="button"
          onClick={handlePreview}
          className="w-full  border-2 border-blue-600 py-2 rounded-lg  text-blue-600 hover:text-white focus:text-white text-sm font-medium hover:bg-blue-700 transition-all"
        >
          Preview
        </button>
       
      </div>
    </div>
  );
}
