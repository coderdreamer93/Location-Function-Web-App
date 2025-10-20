"use client";
import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function AboutMyFunctionForm() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        About My Function
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Function Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Function Name
          </label>
          <input
            type="text"
            placeholder="ex: fix car"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Function Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Function Location
          </label>
          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 appearance-none focus:ring-1 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Location</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <IoLocationOutline className="absolute right-3 top-2.5 text-gray-500 text-lg" />
          </div>
        </div>

        {/* Business Name */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            placeholder="ex: IBM"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Upload Function Image */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Function Image
          </label>
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
          >
            <FiUploadCloud className="text-2xl text-blue-500 mb-1" />
            <p className="text-sm text-blue-600">Upload the file here</p>
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

        {/* Function Video */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Function Video
          </label>
          <input
            type="text"
            placeholder="Enter YouTube Link"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100">
          Previous
        </button>
        <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
}
