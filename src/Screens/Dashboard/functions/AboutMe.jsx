import React, { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import AddressInput from "./AddressInput";
import FormNavigationButtons from "../../../Components/Dashboard/form/FormNavigationButtons";

function AboutMe({
  data,
  updateFormData,
  activeStep,
  steps,
  handleNext,
  handlePrev,
}) {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    location: "",
    privacy: "Public",
    ...data,
  });

  useEffect(() => {
    updateFormData(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="">
      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/aboutImage.png"
            alt="avatar"
            className="w-16 h-16 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] font-medium newFontColor">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-[14px] font-medium newFontColor">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              required
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Enter job title"
              className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-[14px] font-medium newFontColor">
            Location
          </label>
          <AddressInput formData={formData} setFormData={setFormData} />
        </div>

        <div className="mt-4">
          <label className="text-[14px] font-medium newFontColor">
            Select Privacy
          </label>
          <div className="flex flex-col mt-1">
            {["Public", "Private"].map((option, idx) => (
              <div
                key={option}
                onClick={() => setFormData({ ...formData, privacy: option })}
                className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all ${
                  formData.privacy === option
                    ? "border-blue-500 bg-white"
                    : "border-gray-300 bg-white hover:bg-blue-50"
                } ${
                  idx === 0
                    ? "rounded-t-lg rounded-b-none"
                    : "rounded-t-none rounded-b-lg"
                }`}
              >
                <span>{option}</span>
                {formData.privacy === option && (
                  <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Buttons */}
      {/* <div className="w-full flex justify-between items-center gap-2 p-6  border-t sm:border-none rounded-b-xl bg-[#ffffff] sm:bg-[#F9FAFB] relative z-10  max-w-full sm:max-w-lg md:max-w-none mx-auto">
        <button
          onClick={handlePrev}
          className={`md:px-5 px-4 py-2.5 rounded-lg text-[14px] font-medium border-2 ${
            activeStep === 0
              ? "border-blue-600 newPrimaryColor bg-white"
              : "border-blue-600 newPrimaryColor bg-white hover:bg-blue-100"
          }`}
        >
          Cancel
        </button>

        <button
          onClick={handleNext}
          className="md:px-5 px-4 py-2.5 rounded-lg text-[14px] border-2 newPrimaryBorder newPrimaryBg text-white shadow-sm hover:shadow-md transition-all duration-200"
        >
          Next
        </button>
      </div> */}
      <FormNavigationButtons
        handlePrev={handlePrev}
        handleNext={handleNext}
        activeStep={activeStep}
        prevButton="Cancel"
        rightTitle="Next"
      />
    </div>
  );
}

export default AboutMe;
