"use client";
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import { ReactComponent as WhitePencilIcon } from "../../../Assets/icons/whitePencilIcon.svg";
import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";
import { useNavigate } from "react-router-dom";
import FormNavigationButtons from "../../../Components/Dashboard/form/FormNavigationButtons";
import BusinessAddressInput from "./BusinessAddressInput";

export default function AddBusinessDetail() {
  const suppressSaveRef = useRef(false);
  // const [isFocused, setIsFocused] = useState(false);
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    problemName: "",
    problemDate: "",
    problemStatus: "",
    problemVisibility: "",
    problemLocation: "",
    problemVideo: "",
    privacy: "",
  });

  // ✅ Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem("addProblemFormData");
    const savedDescription = localStorage.getItem("addProblemDescription");
    const savedFile = localStorage.getItem("addProblemFileName");

    if (savedData) setFormData(JSON.parse(savedData));
    if (savedDescription) setDescription(savedDescription);
    if (savedFile) setFileName(savedFile);
  }, []);

  // ✅ Save to localStorage whenever formData, description, or file changes
  useEffect(() => {
    if (suppressSaveRef.current) return;
    localStorage.setItem("addProblemFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (suppressSaveRef.current) return;
    localStorage.setItem("addProblemDescription", description);
  }, [description]);

  useEffect(() => {
    if (suppressSaveRef.current) return;
    if (fileName) localStorage.setItem("addProblemFileName", fileName);
  }, [fileName]);


  useEffect(() => {
    const savedPreview = localStorage.getItem("addProblemFilePreview");
    if (savedPreview) setFilePreview(savedPreview);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    suppressSaveRef.current = true;

    setFormData({
      problemName: "",
      problemDate: "",
      problemStatus: "",
      problemVisibility: "",
      problemLocation: "",
      problemVideo: "",
      privacy: "",
    });
    setDescription("");
    setFileName("");
    setFilePreview(null);

    localStorage.removeItem("addProblemFormData");
    localStorage.removeItem("addProblemDescription");
    localStorage.removeItem("addProblemFileName");
    localStorage.removeItem("addProblemFilePreview");

    setTimeout(() => {
      suppressSaveRef.current = false;
    }, 0);

    const addFrom = localStorage.getItem("addFrom");
    if (addFrom === "function") {
      localStorage.removeItem("addFrom");
      navigate("/dashboard/functions/addFunction");
    } else {
      navigate("/dashboard/problems");
    }
  };

  const handleSaveProblem = () => {
    ""
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("addFunctionFormData"));
    if (saved?.linkedProblem) {
      console.log("Linked Problem Data:", saved.linkedProblem);
    }
  }, []);

  return (
    <div className="relative flex flex-col w-full bg-gray-50">
      <div className="flex flex-col w-full mx-auto">
        {/* Fixed Header */}
        <div className="fixed top-14 left-0 right-0 z-20 bg-white p-4 shadow-sm">
          <NestedHeaderWhite
            title="Business Details"
            breadcrumbs={[
              // { label: "Dashboard", path: "/dashboard" },
              { label: "Business", path: "/dashboard/business" },
              { label: "Business Details", path: "" },
            ]}
          />
        </div>

        {/* Form */}
        <div className="flex flex-col bg-gray-50 max-w-2xl w-full mx-auto mt-32 rounded-lg shadow-inner border border-gray-200">
          <div className="relative mx-auto flex justify-center items-center p-2 mt-4">
            <img
              src="/PImage.png"
              alt="ProfileImage"
              className="w-[60px] h-[60px] rounded-full "
            />
            <WhitePencilIcon
              className="absolute right-0 bottom-0"
              onClick={() => {
                alert("upload image");
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-4  p-6">
            {/* Problem Name */}
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold newFontColor mb-1">
                Business Name
              </label>
              <input
                type="text"
                name="BusinessName"
                value={formData.problemName}
                onChange={handleChange}
                placeholder="Enter Business Name..."
                className="border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
            </div>

            <div className="">
              <label className="text-[14px] font-semibold newFontColor">
                Address
              </label>
              
              <BusinessAddressInput formData={formData} setFormData={setFormData} />
            </div>

            <div className="flex flex-col">
              <label className="text-[14px] font-semibold newFontColor mb-1">
                Contact Person Title
              </label>
              <input
                type="text"
                name="BusinessName"
                value={formData.problemName}
                onChange={handleChange}
                placeholder="Enter Business Name..."
                className="border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold newFontColor mb-1">
                Contact/Phone Number
              </label>
              <input
                type="text"
                name="BusinessName"
                value={formData.problemName}
                onChange={handleChange}
                placeholder="Enter Business Name..."
                className="border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
            </div>

            {/* <div className="flex flex-col relative">
              <label className="text-[14px] font-semibold newFontColor mb-1">
                Contact Person Title
              </label>

              <input
                type="text"
                name="problemDate"
                value={formData.problemDate}
                onChange={handleChange}
                placeholder="Select Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] pr-10
      focus:ring-1 focus:ring-blue-500 outline-none appearance-none
      [&::-webkit-calendar-picker-indicator]:opacity-0
      [&::-webkit-inner-spin-button]:appearance-none
      [&::-webkit-clear-button]:appearance-none"
              />

              <DateGrayIcon className="absolute right-3 top-9 w-4 h-4 text-blue-500 pointer-events-none" />
            </div> */}

            <div className="flex flex-col relative">
              <label className="text-[14px] font-semibold newFontColor mb-1">
                Stats Privacy
              </label>

              <div className="flex flex-col mt-1">
                {["Public", "Private"].map((option, idx) => (
                  <div
                    key={option}
                    onClick={() =>
                      setFormData({ ...formData, problemStatus: option })
                    }
                    className={`relative w-full border newFontColor px-3 bg-white py-2 text-[14px] font-semibold cursor-pointer transition-all
                     ${
                       formData.problemStatus === option
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
                    {formData.problemStatus === option && (
                      <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="text-[14px] font-semibold newFontColor mb-1">
                Instant problem broadcast
              </label>

              <div className="flex flex-col mt-1">
                {["Enabled", "Disabled"].map((option, idx) => (
                  <div
                    key={option}
                    onClick={() =>
                      setFormData({ ...formData, problemVisibility: option })
                    }
                    className={`relative w-full border newFontColor font-semibold px-3 bg-white py-2 text-[14px] cursor-pointer transition-all
                     ${
                       formData.problemVisibility === option
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
                    {formData.problemVisibility === option && (
                      <CheckIcon className="absolute top-2 right-2 text-blue-600 text-lg" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <FormNavigationButtons
            handlePrev={handleCancel}
            handleNext={handleSaveProblem}
            // activeStep={activeStep}
            prevButton="Cancel"
            rightTitle="Save"
          />
        </div>
      </div>
    </div>
  );
}
