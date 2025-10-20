// "use client";
// import React, { useState } from "react";
// import { IoLocation } from "react-icons/io5";
// import AddFunctionSidebar from "../../../Components/Dashboard/sidebarFilter/AddFunctionSidebar";
// import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";
// import AddFunctionMobileHeader from "../../../Components/Dashboard/sidebarFilter/AddFunctionMobileHeader";

// const AddFunction = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     jobTitle: "",
//     location: "",
//     privacy: "Public",
//   });

//   const steps = [
//     "About Me",
//     "About My Function",
//     "About Problem Solved",
//     "About Formula Usage",
//     "About Ability",
//   ];

//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     if (activeStep < steps.length - 1) {
//       setActiveStep(activeStep + 1);
//     } else {
//       alert("Form submitted!");
//     }
//   };

//   const handlePrev = () => {
//     if (activeStep > 0) setActiveStep(activeStep - 1);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="relative flex flex-col w-full ">
//       <div
//         className={
//           "fixed top-14 left-0 right-0 z-20 bg-white p-4 transition-all duration-300 ease-in-out"
//         }
//       >
//         <NestedHeaderWhite
//           title="Add Function"
//           breadcrumbs={[
//             { label: "Dashboard", path: "/dashboard" },
//             { label: "Functions", path: "/dashboard/functions" },
//             { label: "Create Function", path: "" },
//           ]}
//         />
//       </div>
//       <div className="flex bg-gray-50 mt-32 p-4">
//         {/* Sidebar Steps */}

//         <div className="flex bg-gray-50 mt-32 p-4">
//           {/* Desktop Sidebar */}
//           <div className="hidden md:block">
//             <AddFunctionSidebar steps={steps} activeStep={activeStep} />
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 bg-gray-50 ml-0 md:ml-6 p-6 md:p-8 rounded-xl shadow-sm border backdrop-blur-sm">
//             {/* Mobile Header */}
//             <AddFunctionMobileHeader steps={steps} activeStep={activeStep} />

//             {/* ...form content here... */}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 bg-gray-50 ml-6 p-8 rounded-xl shadow-sm border backdrop-blur-sm">
//           <p className="text-2xl font-semibold mb-6 text-black">
//             {steps[activeStep]}
//           </p>

//           {/* Step 1 Example */}
//           {activeStep === 0 && (
//             <div>
//               <div className="flex flex-col items-center mb-6">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/32.jpg"
//                   alt="avatar"
//                   className="w-16 h-16 rounded-full"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm font-medium text-gray-700">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter name"
//                     className="w-full mt-1 border  text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium text-gray-700">
//                     Job Title
//                   </label>
//                   <input
//                     type="text"
//                     name="jobTitle"
//                     value={formData.jobTitle}
//                     onChange={handleChange}
//                     placeholder="Enter job title"
//                     className="w-full mt-1 border text-black  rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-sm font-medium text-gray-700">
//                   Location
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     placeholder="Select location"
//                     className="w-full mt-1 border text-black  rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   />
//                   <IoLocation className="absolute right-3 top-3 text-blue-600" />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="text-sm font-medium text-gray-700">
//                   Select Privacy
//                 </label>
//                 <select
//                   name="privacy"
//                   value={formData.privacy}
//                   onChange={handleChange}
//                   className="w-full mt-1 border text-black  rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 >
//                   <option>Public</option>
//                   <option>Private</option>
//                 </select>
//               </div>
//             </div>
//           )}
//           {activeStep === 1 && (
//             <div>
//               {/* Content for Step 2: About My Function */}
//               <p className="text-gray-700">
//                 1 This is where the form for "About My Function" will go.
//               </p>
//             </div>
//           )}
//           {activeStep === 2 && (
//             <div>
//               {/* Content for Step 2: About My Function */}
//               <p className="text-gray-700">
//                 2 This is where the form for "About My Function" will go.
//               </p>
//             </div>
//           )}
//           {activeStep === 3 && (
//             <div>
//               {/* Content for Step 2: About My Function */}
//               <p className="text-gray-700">
//                 3 This is where the form for "About My Function" will go.
//               </p>
//             </div>
//           )}
//           {activeStep === 4 && (
//             <div>
//               {/* Content for Step 2: About My Function */}
//               <p className="text-gray-700">
//                 4 This is where the form for "About My Function" will go.
//               </p>
//             </div>
//           )}

//           {/* Buttons */}
//           <div className="flex justify-between items-center mt-8">
//             {/* Cancel Button */}
//             <button
//               onClick={handlePrev}
//               disabled={activeStep === 0}
//               className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
//         border-2 shadow-sm hover:shadow-md focus:outline-none
//         ${
//           activeStep === 0
//             ? "border-blue-600 text-blue-600 cursor-not-allowed bg-white"
//             : "border-blue-600 text-blue-600 bg-white hover:bg-blue-50 active:bg-blue-100"
//         }`}
//             >
//               Cancel
//             </button>

//             {/* Next / Submit Button */}
//             <button
//               onClick={handleNext}
//               className="px-5 py-2.5 rounded-lg text-sm font-medium
//         bg-blue-600 text-white shadow-sm hover:shadow-md
//         hover:bg-blue-700 active:bg-blue-800
//         transition-all duration-200 focus:outline-none"
//             >
//               {activeStep === steps.length - 1 ? "Submit" : "Next"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddFunction;

"use client";
import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import AddFunctionSidebar from "../../../Components/Dashboard/sidebarFilter/AddFunctionSidebar";
import NestedHeaderWhite from "../../../Components/Dashboard/header/nestedHeader/NestedHeaderWhite";
import AddFunctionMobileHeader from "../../../Components/Dashboard/sidebarFilter/AddFunctionMobileHeader";
import AboutMyFunctionForm from "./AboutMyFunctionForm";
import ProblemSolvedForm from "./ProblemSolvedForm";
import AboutFormulaUsage from "./AboutFormulaUsage";
import AboutAbility from "./AboutAbility";

const AddFunction = () => {
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

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Form submitted!");
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
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
      <div className="flex bg-gray-50 mt-32 p-4">
        {/* Sidebar (Desktop only) */}
        <div className="hidden md:block">
          <AddFunctionSidebar steps={steps} activeStep={activeStep} />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 ml-0 md:ml-6 p-6 md:p-8 rounded-xl shadow-sm border backdrop-blur-sm">
          {/* Mobile Header (Circle Progress) */}
          <AddFunctionMobileHeader steps={steps} activeStep={activeStep} />

          {/* Step Title */}
          <p className="text-2xl font-semibold mb-6 text-black">
            {steps[activeStep]}
          </p>

          {/* Step 1: About Me */}
          {activeStep === 0 && (
            <div>
              <div className="flex flex-col items-center mb-6">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Enter job title"
                    className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Select location"
                    className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <IoLocation className="absolute right-3 top-3 text-blue-600" />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Select Privacy
                </label>
                <select
                  name="privacy"
                  value={formData.privacy}
                  onChange={handleChange}
                  className="w-full mt-1 border text-black rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Public</option>
                  <option>Private</option>
                </select>
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
              <AboutAbility />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border-2 shadow-sm hover:shadow-md focus:outline-none ${
                activeStep === 0
                  ? "border-blue-600 text-blue-600 cursor-not-allowed bg-white"
                  : "border-blue-600 text-blue-600 bg-white hover:bg-blue-50 active:bg-blue-100"
              }`}
            >
              Cancel
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white shadow-sm hover:shadow-md hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 focus:outline-none"
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunction;
