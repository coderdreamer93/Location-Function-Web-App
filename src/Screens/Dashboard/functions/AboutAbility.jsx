"use client";
import React, { useState, useEffect } from "react";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import FormNavigationButtons from "../../../Components/Dashboard/form/FormNavigationButtons";

export default function AboutAbility({
  handlePreview,
  data = {},
  updateFormData,
  activeStep,
  handleNext,
  handlePrev,
}) {
  const [selected, setSelected] = useState(data.ability || false);
  const options = ["Yes", "No"];

  const handleSelect = (option) => {
    setSelected(option);
  };


  useEffect(() => {
    updateFormData({
      ...data,
      ability: selected,
    });
  }, [selected]);

  return (
    <div className="flex flex-col justify-between sm:h-auto min-h-[400px] items-stretch">
      <div className="p-6 flex-1">
        <label className="block text-sm font-medium text-black mb-1">
          Show With Function
        </label>

        <div className="flex flex-col mt-1">
          {options.map((option, idx) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all
              ${
                selected === option
                  ? "border-blue-500 bg-white"
                  : "border-gray-300 bg-white hover:bg-blue-50"
              }
              ${
                idx === 0
                  ? "rounded-t-lg rounded-b-none"
                  : "rounded-t-none rounded-b-lg"
              }`}
            >
              <span>{option}</span>
              {selected === option && (
                <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
              )}
            </div>
          ))}
        </div>

        {/* Preview Button */}
        <div className="md:col-span-2 flex gap-4 mt-4">
          <button
            type="button"
            onClick={handlePreview}
            className="w-full border-2 border-blue-600 py-2 rounded-lg newPrimaryColor text-[14px] hover:bg-blue-50 transition-all"
          >
            Preview
          </button>
        </div>
      </div>

 
      <FormNavigationButtons
        handlePrev={handlePrev}
        handleNext={handleNext}
        activeStep={activeStep}
        prevButton="Previous"
        rightTitle="Finish"
      />
    </div>
  );
}
