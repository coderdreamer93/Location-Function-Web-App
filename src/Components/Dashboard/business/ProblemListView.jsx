// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaPhone } from "react-icons/fa6";
// import { FaRegMessage } from "react-icons/fa6";

// function ProblemListView({ data = [] }) {
//   const navigate = useNavigate();

//   const handleCardClick = (id) => {
//     navigate(`/dashboard/problems/${id}`, {
//       state: { business: data.find((d) => d.id === id) },
//     });
//   };

//   return (
//     <div className="space-y-4 mt-6">
//       {data.map((item) => (
//         <div
//           key={item.id}
//           onClick={() => handleCardClick(item.id)}
//           className="bg-blue-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
//         >
//           {/* Top Section */}
//           <div className="flex justify-between items-center p-3 gap-3 flex-wrap md:flex-nowrap">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className="w-14 h-14 border  rounded-full flex justify-center items-center text-white text-xl font-semibold">
//                   {/* {item.name.charAt(0)} */}
//                   <img src="/user.png" alt="userImage" />
//                 </div>
//                 {item.online && (
//                   <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
//                 )}
//               </div>

//               <div className="flex flex-col justify-center items-start">
//                 <span className="text-xs font-bold text-gray-900">
//                   {item.name}
//                 </span>
//                 <span className="text-xs text-gray-700">{item.location}</span>
//               </div>
//             </div>

//             <div className="flex justify-center items-center cursor-pointer gap-2 shrink-0">
//               <span
//                 className={`flex justify-center bg-white items-center w-7 h-7 ${
//                   item.isProblem
//                     ? "bg-white text-blue-600 border border-blue-600"
//                     : "bg-gray-200 text-gray-600"
//                 }  rounded-full`}
//               >
//                 <FaRegMessage size={14} />
//               </span>
//               <span
//                 className={`flex justify-center items-center w-7 h-7 ${
//                   item.isProblem
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-600"
//                 }  rounded-full`}
//               >
//                 <FaPhone size={14} />
//               </span>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="flex flex-col justify-start p-3 bg-white gap-3 flex-nowrap">
//             <div className="sm:w-1/4 w-full ">
//               <div className="flex flex-col gap-2">
//                 <div className="grid grid-cols-2">
//                   <span className="text-gray-700 text-xs">Date</span>
//                   <span className="text-green-600 text-xs font-bold">
//                     {item.date}
//                   </span>
//                 </div>
//                 <div className="grid grid-cols-2">
//                   <span className="text-gray-700 text-xs">Problem</span>
//                   <span className="text-red-600 text-xs font-bold">
//                     {item.problem}
//                   </span>
//                 </div>
//                 <div className="grid grid-cols-2">
//                   <span className="text-gray-700 text-xs">Problem Status</span>
//                   <span className="text-blue-600 text-xs font-bold">
//                     {item.problemStatus}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full">
//               <img
//                 src="/mechanic.jpg"
//                 alt={item.name}
//                 className="rounded-lg border-2 border-gray-100 w-full h-24 object-cover"
//               />
//             </div>
//             <div className="w-full rounded-lg">
//               <div className="flex flex-col border rounded-lg">
//                 <div className="flex justify-start rounded-t-lg items-center gap-2 border border-gray-100 py-1 px-2 bg-blue-50">
//                   <img
//                     src="/mechanic.jpg"
//                     alt=""
//                     className="rounded-full w-6 h-6"
//                   />
//                   <span className="text-black text-sm font-semibold">
//                     John Thompson
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center gap-2 border border-gray-100 py-1 px-2">
//                   <div className="md:w-1/4 sm:w-1/4 w-1/2 grid grid-cols-2">
//                     <span className="text-gray-700 text-xs">Function</span>
//                     <span className="text-green-600 text-xs font-bold">
//                       {item.date}
//                     </span>
//                   </div>
//                   <div>
//                     <img
//                       src="/mechanic.jpg"
//                       alt=""
//                       className="w-6 h-6 rounded-md"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center gap-2 border border-gray-100 py-1 px-2">
//                   <div className="md:w-1/4 sm:w-1/4 w-1/2 grid grid-cols-2">
//                     <span className="text-gray-700 text-xs">
//                       Problem Solved
//                     </span>
//                     <span className="text-red-600 text-xs font-bold">
//                       {item.date}
//                     </span>
//                   </div>
//                   <div>
//                     <img
//                       src="/mechanic.jpg"
//                       alt=""
//                       className="w-6 h-6 rounded-md"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center gap-2 border border-gray-100 py-1 px-2">
//                   <div className="md:w-1/4 sm:w-1/4 w-1/2 grid grid-cols-2">
//                     <span className="text-gray-700 text-xs">
//                       Location
//                     </span>
//                     <span className="text-black text-xs font-bold">
//                       {item.location}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center gap-2 border py-1 px-2 rounded-b-lg">
//                   <div className="md:w-1/4 sm:w-1/4 w-1/2 grid grid-cols-2 rounded-b-lg">
//                     <span className="text-gray-700 text-xs">
//                       Formula Usage
//                     </span>
//                     <span className="text-blue-600 text-xs font-bold">
//                       {item.location}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProblemListView;

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaRegMessage } from "react-icons/fa6";
import { TbDotsVertical } from "react-icons/tb";

function ProblemListView({ data = [], selectedFilter }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/dashboard/problems/${id}`, {
      state: { business: data.find((d) => d.id === id) },
    });
  };

  return (
    <div className="space-y-4 mt-6">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleCardClick(item.id)}
          className="bg-blue-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
        >
          {/* === Top Section === */}
          <div className="flex justify-between items-center p-3 gap-3 flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 border rounded-full flex justify-center items-center text-white text-xl font-semibold">
                  <img src="/user.png" alt="userImage" />
                </div>
                {item.online && (
                  <span className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>

              <div className="flex flex-col justify-center items-start">
                <span className="text-xs font-bold text-gray-900">
                  {item.name}
                </span>
                <span className="text-xs text-gray-700">{item.location}</span>
              </div>
            </div>

            <div className="flex justify-center items-center cursor-pointer gap-2 shrink-0">
              <span
                className={`flex justify-center bg-white items-center w-7 h-7 ${
                  item.isProblem
                    ? "bg-white text-blue-600 border border-blue-600"
                    : "bg-gray-200 text-gray-600"
                } rounded-full`}
              >
                <FaRegMessage size={14} />
              </span>
              <span
                className={`flex justify-center items-center w-7 h-7 ${
                  item.isProblem
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                } rounded-full`}
              >
                {selectedFilter === "allProblems" ? (
                  <FaPhone size={14} />
                ) : selectedFilter === "myProblems" ||
                  selectedFilter === "assignProblems" || selectedFilter === "sharedProblems" ? (
                  <TbDotsVertical size={16} />
                ) : (
                  <FaPhone size={14} /> // default fallback
                )}
              </span>
            </div>
          </div>

          {/* === Bottom Section === */}
          <div className="flex flex-col justify-start p-3 bg-white gap-3 flex-nowrap">
            <div className="sm:w-1/4 w-full">
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2">
                  <span className="text-gray-700 text-xs">Date</span>
                  <span className="text-green-600 text-xs font-bold">
                    {item.date}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-700 text-xs">Problem</span>
                  <span className="text-red-600 text-xs font-bold">
                    {item.problem}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-700 text-xs">Problem Status</span>
                  <span className="text-blue-600 text-xs font-bold">
                    {item.problemStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* === Big Image (show only for all/my/shared) === */}
            {selectedFilter !== "assignProblems" && (
              <div className="w-full">
                <img
                  src="/mechanic.jpg"
                  alt={item.name}
                  className="rounded-lg border-2 border-gray-100 w-full h-24 object-cover"
                />
              </div>
            )}

            {/* === John Thompson Section (only for assignProblems) === */}
            {selectedFilter === "assignProblems" && (
              <div className="w-full rounded-lg">
                <div className="flex flex-col border rounded-lg">
                  {/* Header */}
                  <div className="flex justify-start rounded-t-lg items-center gap-2 border border-gray-100 py-1 px-2 bg-blue-50">
                    <img
                      src="/mechanic.jpg"
                      alt=""
                      className="rounded-full w-6 h-6"
                    />
                    <span className="text-black text-sm font-semibold">
                      John Thompson
                    </span>
                  </div>

                  {/* Rows */}
                  {[
                    {
                      label: "Function",
                      value: item.date,
                      color: "text-green-600",
                      showImage: true,
                    },
                    {
                      label: "Problem Solved",
                      value: item.date,
                      color: "text-red-600",
                      showImage: true,
                    },
                    {
                      label: "Location",
                      value: item.location,
                      color: "text-black",
                      showImage: false,
                    },
                    {
                      label: "Formula Usage",
                      value: item.location,
                      color: "text-blue-600",
                      showImage: false,
                    },
                  ].map((row, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center gap-2 border border-gray-100 py-1 px-2 ${
                        index === 3 ? "rounded-b-lg" : ""
                      }`}
                      style={{ minHeight: "30px" }}
                    >
                      <div className="md:w-1/4 sm:w-1/4 w-1/2 grid grid-cols-2">
                        <span className="text-gray-700 text-xs">
                          {row.label}
                        </span>
                        <span
                          className={`${row.color} text-xs font-bold truncate`}
                        >
                          {row.value}
                        </span>
                      </div>

                      {/* ✅ Only show image for the first two rows */}
                      {row.showImage && (
                        <img
                          src="/mechanic.jpg"
                          alt=""
                          className="w-6 h-6 rounded-md"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 ">
                  <div className="flex gap-2 px-2">
                    <span className="text-black text-sm">
                      Unique Identifier
                    </span>
                    <span className="text-black text-sm font-semibold">
                      12345678-ASDF3ASD213SDF15-ASD3F21ASDF51
                    </span>
                  </div>
                  <div className="mt-2">
                    <button className="w-full border-2 border-blue-600 text-blue-600 bg-gray-50 p-1 rounded-lg ">
                      Rate Function
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProblemListView;
