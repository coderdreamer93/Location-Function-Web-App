"use client";
import React, { useState } from "react";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";

export default function AboutFormulaUsage() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full mx-auto">
      <label className="block text-[14px] newFontColor mb-1">
        Select Formula
      </label>

      <div
        onClick={() => setSelected(!selected)}
        className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all rounded-lg
          ${
            selected
              ? "border-blue-500 bg-white"
              : "border-gray-300 bg-white hover:bg-blue-50"
          }`}
      >
        <span>The Given Set</span>

        {selected && (
          <CheckIcon className="absolute top-2 right-2 newPrimaryColor w-6 h-6" />
        )}
      </div>
    </div>
  );
}
