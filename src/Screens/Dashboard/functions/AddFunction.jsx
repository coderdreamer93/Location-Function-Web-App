"use client";
import React, { useState } from "react";
import AddFunctionSidebar from "../../../Components/Dashboard/sidebarFilter/AddFunctionSidebar";
import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";
import AddFunctionMobileHeader from "../../../Components/Dashboard/sidebarFilter/AddFunctionMobileHeader";
import AboutMyFunctionForm from "./AboutMyFunctionForm";
import ProblemSolvedForm from "./ProblemSolvedForm";
import AboutFormulaUsage from "./AboutFormulaUsage";
import AboutAbility from "./AboutAbility";
import AboutAbilityPreview from "./AboutAbilityPreview";
import { ReactComponent as LocationIcon } from "../../../Assets/icons/Pin.svg";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";

const AddFunction = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    location: "",
    privacy: "Public",
  });

  const steps = [
    "About Me",
    "About My Function",
    "About Problem Solved",
    "About Formula Usage",
    "About Ability",
  ];

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleCloseAbilityPreview = () => {
    setShowPreview(false);
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Form submitted!");
    }
  };

  const handlePrev = () => {
    if (showPreview === false) {
      if (activeStep > 0) setActiveStep(activeStep - 1);
    } else {
      setShowPreview(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative flex flex-col w-full">
      {/* Fixed Header */}
      <div className="fixed top-14 left-0 right-0 z-20 bg-white p-4 transition-all duration-300 ease-in-out">
        <NestedHeaderWhite
          title="Add Function"
          breadcrumbs={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Functions", path: "/dashboard/functions" },
            { label: "Create Function", path: "" },
          ]}
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-4 bg-gray-50 mt-24 p-0 sm:p-4">
        {/* Sidebar (Desktop only) */}
        <div className="hidden md:block">
          <AddFunctionSidebar steps={steps} activeStep={activeStep} />
        </div>

        {/* Main Content */}
        <div
          className="w-full md:flex-1  mx-auto md:mx-0 p-6 rounded-xl shadow-sm border backdrop-blur-sm
 max-w-full sm:max-w-lg md:max-w-none"
        >
          {/* Mobile Header (Circle Progress) */}
          <AddFunctionMobileHeader steps={steps} activeStep={activeStep} />

          {/* Step Title */}
          <p className="text-2xl sm:flex hidden mb-6 newFontColor">
            {steps[activeStep]}
          </p>

          {/* Step 1: About Me */}
          {activeStep === 0 && (
            <div>
              <div className="flex flex-col items-center mb-6">
                <img
                  src="/aboutImage.png"
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[14px] font-medium newFontColor">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Enter job title"
                    className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-4 ">
                <label className="text-[14px] font-medium newFontColor">
                  Location
                </label>
                <div className="relative items-center">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Select location"
                    className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                  />
                  <LocationIcon className="absolute top-4 right-4 newPrimaryColor" />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-[14px] font-medium newFontColor">
                  Select Privacy
                </label>

                <div className="flex flex-col mt-1">
                  {["Public", "Private"].map((option, idx) => (
                    <div
                      key={option}
                      onClick={() =>
                        setFormData({ ...formData, privacy: option })
                      }
                      className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] cursor-pointer transition-all
          ${
            formData.privacy === option
              ? "border-blue-500 bg-white"
              : "border-gray-300 bg-white hover:bg-blue-50"
          }
          ${
            idx === 0
              ? "rounded-t-lg rounded-b-none" // top button (Public)
              : "rounded-t-none rounded-b-lg" // bottom button (Private)
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
          )}

          {/* Step 2 */}
          {activeStep === 1 && (
            <div>
              <AboutMyFunctionForm />
            </div>
          )}

          {/* Step 3 */}
          {activeStep === 2 && (
            <div>
              <ProblemSolvedForm />
            </div>
          )}

          {/* Step 4 */}
          {activeStep === 3 && (
            <div>
              <AboutFormulaUsage />
            </div>
          )}

          {/* Step 5 */}
          {activeStep === 4 && (
            <div>
              {!showPreview ? (
                <AboutAbility handlePreview={handlePreview} />
              ) : (
                <AboutAbilityPreview
                  onClose={handleCloseAbilityPreview}
                  users={[
                    {
                      mechanicName: "John Thompson",
                      designation: "Auto Engineer",
                      function: "Mechanic Function",
                      image: "/image/UserImage.png",
                    },
                  ]}
                />
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center gap-2 mt-8">
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className={`md:px-5 px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-200 border-2 shadow-sm hover:shadow-md focus:outline-none ${
                activeStep === 0
                  ? "border-blue-600 newPrimaryColor cursor-not-allowed bg-white"
                  : "border-blue-600 newPrimaryColor bg-white hover:bg-blue-100 active:bg-blue-100"
              }`}
            >
              {activeStep === 0 ? "Cancle" : "Previous"}
            </button>

            <button
              onClick={handleNext}
              className="md:px-5 px-4 py-2.5 rounded-lg text-[14px] border-2 newPrimaryBorder  newPrimaryBg text-white shadow-sm hover:shadow-md  transition-all duration-200 focus:outline-none"
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunction;
