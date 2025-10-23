// "use client";
// import React, { useState } from "react";
// import { FiUploadCloud } from "react-icons/fi";
// import { IoLocationOutline } from "react-icons/io5";
// import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";

// function AddProblem() {
//   const [fileName, setFileName] = useState("");
//   const [formData, setFormData] = useState({
//     functionName: "",
//     functionLocation: "",
//     problemDate: "",
//     problemStatus: "",
//     problemVisibility: "",
//     functionImage: "",
//     functionVideo: "",
//     problemDescription: "",
//   });

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setFileName(file.name);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="relative flex flex-col w-full">
//       {/* Fixed Header */}
//       <div className="fixed top-14 left-0 right-0 z-20 bg-white p-4 transition-all duration-300 ease-in-out">
//         <NestedHeaderWhite
//           title="Add Problem"
//           breadcrumbs={[
//             { label: "Dashboard", path: "/dashboard" },
//             { label: "Problems", path: "/dashboard/problems" },
//             { label: "Create Problem", path: "" },
//           ]}
//         />
//       </div>

//       {/* Main Layout */}
//       <div className="flex bg-gray-50 mt-32 p-4">
//         <div className="flex flex-col justify-between items-center w-full">
//           {/* Problem Name - Full Width */}
//           <div className="w-full mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Problem Name
//             </label>
//             <input
//               type="text"
//               name="functionName"
//               value={formData.functionName}
//               onChange={handleChange}
//               placeholder="ex: Fix Car"
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           {/* Location & Date - Half Width */}
//           <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
//             <div className="w-full md:w-1/2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Problem Location
//               </label>
//               <div className="relative">
//                 <select
//                   name="functionLocation"
//                   value={formData.functionLocation}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
//                 >
//                   <option value="">Select Location</option>
//                   <option value="Karachi">Karachi</option>
//                   <option value="Lahore">Lahore</option>
//                   <option value="Islamabad">Islamabad</option>
//                 </select>
//                 <IoLocationOutline className="absolute right-3 top-2.5 text-gray-500 text-lg" />
//               </div>
//             </div>

//             <div className="w-full md:w-1/2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Problem Date
//               </label>
//               <input
//                 type="date"
//                 name="problemDate"
//                 value={formData.problemDate}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
//               />
//             </div>
//           </div>

//           {/* Status & Visibility - Half Width Dropdowns */}
//           <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
//             <div className="w-full md:w-1/2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Problem Status
//               </label>
//               <select
//                 name="problemStatus"
//                 value={formData.problemStatus}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
//               >
//                 <option value="">Select Status</option>
//                 <option value="Open">✔ Open</option>
//                 <option value="In Progress">✔ In Progress</option>
//                 <option value="Resolved">✔ Resolved</option>
//               </select>
//             </div>

//             <div className="w-full md:w-1/2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Problem Visibility
//               </label>
//               <select
//                 name="problemVisibility"
//                 value={formData.problemVisibility}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
//               >
//                 <option value="">Select Visibility</option>
//                 <option value="Public">✔ Public</option>
//                 <option value="Private">✔ Private</option>
//               </select>
//             </div>
//           </div>

//           {/* Upload Image - Full Width */}
//           <div className="w-full mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Upload Problem Image
//             </label>
//             <label
//               htmlFor="fileUpload"
//               className="flex flex-col items-center bg-white justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
//             >
//               <FiUploadCloud className="text-2xl text-blue-500 mb-1" />
//               <p className="text-sm newPrimaryColor">Upload the file here</p>
//               <p className="text-xs text-gray-500 mt-1">
//                 (Only .jpg, .png, & .pdf files will be accepted)
//               </p>
//               <input
//                 type="file"
//                 id="fileUpload"
//                 className="hidden"
//                 onChange={handleFileChange}
//                 accept=".jpg,.jpeg,.png,.pdf"
//               />
//             </label>
//             <p className="text-xs text-gray-400 mt-1 text-center">
//               {fileName ? fileName : "no files uploaded yet"}
//             </p>
//           </div>

//           {/* Problem Video - Full Width + Button */}
//           <div className="w-full mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Problem Video
//             </label>
//             <input
//               type="text"
//               name="functionVideo"
//               value={formData.functionVideo}
//               onChange={handleChange}
//               placeholder="Enter YouTube Link"
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
//             />
           
//           </div>

//           {/* Add Problem - Textarea */}
//           <div className="w-full mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Add Problem Description
//             </label>
//             <textarea
//               name="problemDescription"
//               value={formData.problemDescription}
//               onChange={handleChange}
//               rows={4}
//               placeholder="Describe the problem in detail..."
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none resize-none"
//             />
//           </div>

//           {/* Final Buttons */}
//           {/* Buttons */}
//           <div className="w-full flex justify-between items-center mt-8">
//             <button
//               onClick={() => {" "}}
//               className={"px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border-2 shadow-sm hover:shadow-md focus:outline-none border-blue-600 newPrimaryColor bg-white hover:bg-blue-50 active:bg-blue-100"}
//             >
//               Cancel
//             </button>

//             <button
//               onClick={() => {""}}
//               className="px-5 py-2.5 rounded-lg text-sm font-medium border-2 bg-blue-600 text-white shadow-sm hover:shadow-md hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 focus:outline-none"
//             >
//               Save Problem
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddProblem;

"use client";
import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";

export default function AddProblem() {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    problemName: "",
    problemDate: "",
    problemStatus: "",
    problemVisibility: "",
    problemLocation: "",
    problemDescription: "",
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

  return (
    <div className="relative flex flex-col w-full">
      {/* Fixed Header */}
      <div className="fixed top-14 left-0 right-0 z-20 bg-white p-4 transition-all duration-300 ease-in-out shadow-sm">
        <NestedHeaderWhite
          title="Add Problem"
          breadcrumbs={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Problems", path: "/dashboard/problems" },
            { label: "Create Problem", path: "" },
          ]}
        />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col bg-gray-100 mt-32 p-6 rounded-lg shadow-inner">
        {/* Problem Name */}
        <div className="w-full mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Problem Name
          </label>
          <input
            type="text"
            name="problemName"
            value={formData.problemName}
            onChange={handleChange}
            placeholder="e.g., Car engine not starting"
            className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Problem Date + Status */}
        <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Problem Date
            </label>
            <input
              type="date"
              name="problemDate"
              value={formData.problemDate}
              onChange={handleChange}
              className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Problem Status
            </label>
            <select
              name="problemStatus"
              value={formData.problemStatus}
              onChange={handleChange}
              className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Problem Visibility + Location */}
        <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Problem Visibility
            </label>
            <select
              name="problemVisibility"
              value={formData.problemVisibility}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg text-black px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Visibility</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Problem Location
            </label>
            <div className="relative">
              <select
                name="problemLocation"
                value={formData.problemLocation}
                onChange={handleChange}
                className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 pr-8 text-sm focus:ring-1 focus:ring-blue-500 outline-none appearance-none"
              >
                <option value="">Select Location</option>
                <option value="losAngles">Los Angles</option>
                <option value="lasVegas">Las Vegas</option>
                <option value="dallas">Dallas</option>
                <option value="miami">Miami</option>
              </select>
              <IoLocationOutline className="absolute right-3 top-2.5 text-gray-500 text-lg" />
            </div>
          </div>
        </div>

        {/* Upload Problem Image */}
        <div className="w-full mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Problem Image
          </label>
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center w-full h-32 bg-white border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
          >
            <FiUploadCloud className="text-2xl text-blue-500 mb-1" />
            <p className="text-sm newPrimaryColor">Upload the file here</p>
            <p className="text-xs text-gray-500 mt-1">
              (Only .jpg, .png, & .pdf files will be accepted)
            </p>
            <input
              type="file"
              id="fileUpload"
              className="hidden text-black"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf"
            />
          </label>
          <p className="text-xs text-gray-400 mt-1 text-center">
            {fileName ? fileName : "No file uploaded yet"}
          </p>
        </div>

        {/* Problem Video */}
        <div className="w-full mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Problem Video (YouTube Link)
          </label>
          <input
            type="text"
            name="problemVideo"
            value={formData.problemVideo}
            onChange={handleChange}
            placeholder="Enter YouTube link"
            className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Problem Description */}
        <div className="w-full mb-8">
          <label className="block text-sm font-medium text-black mb-1">
            Add Problem Description
          </label>
          <textarea
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleChange}
            placeholder="Describe the problem in detail..."
            rows={4}
            className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none resize-none"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            className="w-1/2 md:w-1/6 border-2 border-blue-600  newPrimaryColor font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 md:w-1/6 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
          >
            Save Problem
          </button>
        </div>
      </div>
    </div>
  );
}
