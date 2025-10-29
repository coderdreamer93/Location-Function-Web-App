import React from "react";

const FormNavigationButtons = ({ handlePrev, handleNext, activeStep, prevButton, rightTitle }) => {
  return (
    <div className="w-full flex justify-between items-center gap-2 p-6 border-t sm:border-none rounded-b-xl bg-[#ffffff] sm:bg-[#F9FAFB] relative z-10 max-w-full sm:max-w-lg md:max-w-none mx-auto">
      <button
        onClick={handlePrev}
        className={`md:px-4 px-3 py-2 rounded-lg text-[16px] font-semibold border-2 ${
          activeStep === 0
            ? "border-blue-600 newPrimaryColor bg-white"
            : "border-blue-600 newPrimaryColor bg-white hover:bg-blue-100"
        }`}
      >
        {prevButton}
      </button>

      <button
        onClick={handleNext}
        className="md:px-4 px-3 py-2 rounded-lg text-[16px] border-2 font-semibold newPrimaryBorder newPrimaryBg text-white shadow-sm hover:shadow-md transition-all duration-200"
      >
        {rightTitle}
      </button>
    </div>
  );
};

export default FormNavigationButtons;
