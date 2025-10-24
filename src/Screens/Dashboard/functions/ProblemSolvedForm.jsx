"use client";
import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import { ReactComponent as UploadIcon } from "../../../Assets/icons/uploadIcon.svg";

export default function ProblemSolvedForm() {
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    problemSolved: "",
    instantBroadcast: "",
    businessName: "",
    solvedImage: "",
    solvedVideo: "",
  });

  const dropdownRef = useRef(null);
  const options = ["Yes", "No", "Connections Only"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (option) => {
    setFormData((prev) => ({ ...prev, instantBroadcast: option }));
    setOpen(false);
  };

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Problem Solved by Function */}
        <div>
          <label className="block text-[14px] newFontColor mb-1">
            Problem Solved by Function
          </label>
          <input
            type="text"
            name="problemSolved"
            value={formData.problemSolved}
            onChange={handleChange}
            placeholder="ex: Engine repair completed"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Instant Problem Broadcast */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-[14px] newFontColor mb-1">
            Instant Problem Broadcast
          </label>

          {/* Main field */}
          <div
            onClick={() => setOpen(!open)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] bg-white cursor-pointer flex justify-between items-center"
          >
            <span className="text-gray-800">
              {formData.instantBroadcast || "Select Option"}
            </span>

            {/* Conditional Icon */}
            {formData.instantBroadcast ? (
              <CheckIcon className="text-blue-600 w-5 h-5" />
            ) : (
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>

          {/* Dropdown List */}
          {open && (
            <div className="absolute z-10 mt-1 top-5  w-full bg-white border border-gray-200 rounded-lg shadow-md">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`flex items-center justify-between px-3 py-2 text-[14px] cursor-pointer hover:bg-gray-50 ${
                    formData.instantBroadcast === option ? "bg-blue-50" : ""
                  }`}
                >
                  <span className="text-gray-800">{option}</span>
                  {formData.instantBroadcast === option && (
                    <CheckIcon className="text-blue-600 w-5 h-5" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Business Name */}
        <div className="md:col-span-2">
          <label className="block text-[14px] newFontColor mb-1">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="ex: IBM"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Upload Problem Solved Image */}
        <div className="md:col-span-2">
          <label className="block text-[14px] newFontColor mb-2">
            Upload Problem Solved Image
          </label>
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center w-full h-28 bg-white border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
          >
            <div className="flex flex-col gap-2 items-center">
              <UploadIcon className="text-[18px] newPrimaryColor" />
              <span className="text-[14px] newPrimaryColor">
                Upload the file here
              </span>
              <span className="text-[14px] text-gray-500">
                (Only .jpg, .png, & .pdf files will be accepted)
              </span>
            </div>
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf"
            />
          </label>
          <p className="text-[13px] text-gray-500 mt-1 text-center">
            {fileName ? fileName : "No files uploaded yet"}
          </p>
        </div>

        {/* Problem Solved Video */}
        <div className="md:col-span-2">
          <label className="block text-[14px] newFontColor mb-1">
            Problem Solved Video
          </label>
          <input
            type="text"
            name="solvedVideo"
            value={formData.solvedVideo}
            onChange={handleChange}
            placeholder="Enter YouTube Link"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Buttons Row */}
        <div className="md:col-span-2 flex gap-4 mt-4">
          <button
            type="button"
            className="w-1/2 border-2 border-blue-600 py-2 rounded-lg newPrimaryColor text-[14px] hover:bg-blue-50  hover:text-white transition-all"
          >
            + Add Problem
          </button>
          <button
            type="button"
            className="w-1/2 border-2 border-blue-600  newPrimaryColor py-2 rounded-lg text-[14px] hover:bg-blue-50 transition-all"
          >
            Add Descriptions
          </button>
        </div>
      </div>
    </div>
  );
}
