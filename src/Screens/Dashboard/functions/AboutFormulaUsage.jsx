"use client";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

export default function AboutFormulaUsage() {
  const [selected, setSelected] = useState("");

  const options = [
    "Addition Formula",
    "Subtraction Formula",
    "Multiplication Formula",
    "Division Formula",
    "Square Root Formula",
  ];

  return (
    <div className="w-full mx-auto">
      <label className="block text-sm font-medium text-black mb-1">
        Select Formula
      </label>

      <div className="relative">
        <select
          name="formula"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full border border-blue-600 rounded-lg px-3 py-2 pr-10 text-sm text-black focus:ring-1 focus:ring-blue-600 outline-none appearance-none"
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

     
    </div>
  );
}
