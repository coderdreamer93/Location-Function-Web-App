
"use client";
import React, { useState } from "react";
import { ReactComponent as UploadIcon } from "../../../Assets/icons/uploadIcon.svg";
import { ReactComponent as LocationIcon } from "../../../Assets/icons/Pin.svg";
import { ReactComponent as CheckIcon } from "../../../Assets/icons/check.svg";
import { ReactComponent as CalenderIcon } from "../../../Assets/icons/Calander.svg";
import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";
import AddDescriptionModal from "../../../Components/Dashboard/modals/AddDescriptionModal";

export default function AddProblem() {
  const [fileName, setFileName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    problemName: "",
    problemDate: "",
    problemStatus: "",
    problemVisibility: "",
    problemLocation: "",
    problemVideo: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveDescription = (content) => {
    setDescription(content);
  };

  return (
    <div className="relative flex flex-col w-full bg-gray-50">
      <div className="flex flex-col w-full mx-auto">
        {/* Fixed Header */}
        <div className="fixed top-14 left-0 right-0 z-20 bg-white p-4 shadow-sm">
          <NestedHeaderWhite
            title="Add Problem"
            breadcrumbs={[
              { label: "Dashboard", path: "/dashboard" },
              { label: "Problems", path: "/dashboard/problems" },
              { label: "Create Problem", path: "" },
            ]}
          />
        </div>

        {/* Form */}
        <div className="flex flex-col bg-gray-50 max-w-4xl w-full mx-auto mt-32 p-6 rounded-lg shadow-inner border border-gray-200">
          <div className="grid grid-cols-1 gap-4">
            {/* Problem Name */}
            <div className="flex flex-col">
              <label className="text-[14px] newFontColor mb-1">
                Problem Name
              </label>
              <input
                type="text"
                name="problemName"
                value={formData.problemName}
                onChange={handleChange}
                placeholder="e.g., Car engine not starting"
                className="border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
            </div>

            {/* Problem Location */}
            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Problem Location
              </label>
              <input
                type="text"
                name="problemLocation"
                value={formData.problemLocation}
                onChange={handleChange}
                placeholder="Select location"
                className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
              <LocationIcon className="absolute right-3 top-9 w-4 h-4 text-blue-500" />
            </div>

            {/* Problem Date */}
            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Problem Date
              </label>
              <input
                type="date"
                name="problemDate"
                value={formData.problemDate}
                onChange={handleChange}
                className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] pr-10 focus:ring-1 focus:ring-blue-500 outline-none appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-clear-button]:appearance-none"
              />
              <CalenderIcon className="absolute right-3 top-9 w-4 h-4 text-blue-500 pointer-events-none" />
            </div>

            {/* Problem Status */}
            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Problem Status
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

            {/* Problem Visibility */}
            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Problem Visibility
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

            {/* Upload Image */}
            <div className="flex flex-col relative">
              <label className="text-[14px] newFontColor mb-1">
                Upload Problem Image
              </label>
              <label
                htmlFor="fileUpload"
                className="flex flex-col items-center bg-white justify-center w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-all"
              >
                <div className="flex flex-col gap-2 justify-center items-center">
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
              <p className="text-[14px] text-gray-400 mt-1 p-0 m-0 w-full text-center">
                {fileName ? fileName : "no files uploaded yet"}
              </p>
            </div>

            {/* YouTube Link */}
            <div className="flex flex-col">
              <label className="text-[14px] newFontColor mb-1">
                Video Link
              </label>
              <input
                type="text"
                name="problemVideo"
                value={formData.problemVideo}
                onChange={handleChange}
                placeholder="YouTube link"
                className="border border-gray-300 text-black rounded-lg px-3 py-2 text-[14px] focus:ring-1 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Add Description Button */}
          <div className="w-full flex mt-6">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:PrimaryBorder text-blue-600 w-full py-2 px-5 rounded-lg hover:bg-blue-50 transition-all"
            >
              <span>
                {description
                  ? "Edit Problem Description"
                  : "Add Problem Description"}
              </span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              type="button"
              className="w-1/3 md:w-1/6 border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="newPrimaryBg text-white text-nowrap text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
            >
              Save Problem
            </button>
          </div>
        </div>
      </div>

      {/* Description Modal */}
      {showModal && (
        <AddDescriptionModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveDescription}
        />
      )}
    </div>
  );
}
