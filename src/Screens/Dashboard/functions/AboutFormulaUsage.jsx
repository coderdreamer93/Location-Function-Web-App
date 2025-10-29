
"use client";
import React, { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import FormNavigationButtons from "../../../Components/Dashboard/form/FormNavigationButtons";

export default function AboutFormulaUsage({
  data = {},
  updateFormData,
  activeStep,
  handleNext,
  handlePrev,
}) {


  const [selected, setSelected] = useState(data.formulaSelected || false);

useEffect(() => {
  updateFormData({
    ...data,
    formulaSelected: selected,
  });
}, [selected]);


  return (
    <div className="flex flex-col justify-between sm:h-auto min-h-[400px] items-stretch">
      <div className="p-6 flex-1">
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

   
            <FormNavigationButtons
        handlePrev={handlePrev}
        handleNext={handleNext}
        activeStep={activeStep}
        prevButton="Previous"
        rightTitle="Next"
      />
    </div>
  );
}
