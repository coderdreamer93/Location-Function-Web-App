"use client";
import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function ProblemSolvedForm() {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    problemSolved: "",
    instantBroadcast: "",
    businessName: "",
    solvedImage: "",
    solvedVideo: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Problem Solved by Function */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Problem Solved by Function
          </label>
          <input
            type="text"
            name="problemSolved"
            value={formData.problemSolved}
            onChange={handleChange}
            placeholder="ex: Engine repair completed"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Instant Problem Broadcast */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instant Problem Broadcast
          </label>
          <select
            name="instantBroadcast"
            value={formData.instantBroadcast}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Connections Only">Connections Only</option>
          </select>
        </div>

        {/* Business Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="ex: IBM"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Upload Problem Solved Image */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Problem Solved Image
          </label>
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center bg-white justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
          >
            <FiUploadCloud className="text-2xl text-blue-500 mb-1" />
            <p className="text-sm newPrimaryColor">Upload the file here</p>
            <p className="text-xs text-gray-500 mt-1">
              (Only .jpg, .png, & .pdf files will be accepted)
            </p>
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf"
            />
          </label>
          <p className="text-xs text-gray-400 mt-1 text-center">
            {fileName ? fileName : "no files uploaded yet"}
          </p>
        </div>

        {/* Problem Solved Video */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Problem Solved Video
          </label>
          <input
            type="text"
            name="solvedVideo"
            value={formData.solvedVideo}
            onChange={handleChange}
            placeholder="Enter YouTube Link"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Buttons Row */}
        <div className="md:col-span-2 flex gap-4 mt-4">
          <button
            type="button"
            className="w-1/2  border-2 border-blue-600 py-2 rounded-lg  newPrimaryColor text-sm font-medium hover:bg-blue-700 transition-all"
          >
            + Add Problem
          </button>
          <button
            type="button"
            className="w-1/2 border-2 border-blue-600  bg-blue-50 newPrimaryColor py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-all"
          >
            Add Descriptions
          </button>
        </div>
      </div>
    </div>
  );
}
