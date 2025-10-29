"use client";
import React, { } from "react";
import FormNavigationButtons from "../../../Components/Dashboard/form/FormNavigationButtons";

export default function AboutAbilityPreview({
  users = [],
  className,
  activeStep,
  handleNext,
  handlePrev,
}) {

  return (
    <div className="flex flex-col justify-between sm:h-auto min-h-[400px] items-stretch">
      <div className="p-6 flex-1">
        <div
          className={`bg-white rounded-2xl shadow-xl w-full sm:max-w-xs border-2 border-gray-200 max-w-full overflow-hidden ${className}`}
        >

          {users.length > 0 && (
            <div className="flex flex-col items-center justify-center py-4 gap-4 rounded-xl  text-center">

              <div className="flex flex-col items-center gap-3">
                <img
                  src={users[0].image || "/image/UserImage.png"}
                  alt={users[0].mechanicName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <span className="font-semibold newFontColor text-[15px] leading-[1.1]">
                    {users[0].mechanicName}
                  </span>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-500 text-[12px] newFontColor leading-[1.1]">
                      {users[0].designation || "Designation"}
                    </span>
                    <span className="text-gray-400 text-[12px]">•</span>
                    <span className="text-gray-500 text-[12px] newFontColor leading-[1.1]">
                      {users[0].function || "Function"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 w-full mt-2">
                <button className="w-full py-2 text-[15px] font-medium border bg-[#00A3FF] newFontCOlor transition">
                  Ability
                </button>

                <button className="w-full py-2 text-[15px] font-medium text-gray-700  transition">
                  Execute
                </button>

                <button className="w-[95%] py-2 text-[15px] rounded-xl text-white newPrimaryBg font-medium transition">
                  Function
                </button>

                <button className="w-full py-2 text-[15px] font-medium text-gray-700 transition">
                  Solve
                </button>

                <button className="w-[95%] py-2 text-[15px] rounded-xl text-white bg-[#D70404] font-medium transition hover:bg-red-600">
                  Problem
                </button>
              </div>
            </div>
          )}
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
