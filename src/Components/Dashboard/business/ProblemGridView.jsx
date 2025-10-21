// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaPhone, FaRegMessage } from "react-icons/fa6";

// export default function ProblemGridView({ data = [] }) {
//   const navigate = useNavigate();

//   const handleCardClick = (id) => {
//     navigate(`/dashboard/problems/${id}`, {
//       state: { business: data.find((d) => d.id === id) },
//     });
//   };

//   return (
//     <div className="grid gap-3 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {data.map((item) => (
//         <div
//           key={item.id}
//           onClick={() => handleCardClick(item.id)}
//           className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer overflow-hidden"
//         >
//           {/* Image Section */}
//           <div className="relative">
//             <img
//               src="/mechanic.jpg"
//               alt={item.name}
//               className="w-full h-32 object-cover"
//             />
//             {item.online && (
//               <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
//             )}
//           </div>

//           {/* Content Section */}
//           <div className="p-3 flex flex-col justify-between gap-1">
//             <div>
//               <span className="text-sm font-semibold text-gray-900 truncate">
//                 {item.name}
//               </span>
//               <p className="text-xs text-gray-600">{item.location}</p>
//             </div>

//             <div className="text-xs grid grid-cols-2 gap-y-1 mt-2">
//               <span className="text-gray-700">Date</span>
//               <span className="text-green-600 font-bold">{item.date}</span>

//               <span className="text-gray-700">Problem</span>
//               <span className="text-red-600 font-bold">{item.problem}</span>

//               <span className="text-gray-700">Status</span>
//               <span
//                 className={`font-bold ${
//                   item.problemStatus === "Pending"
//                     ? "text-yellow-600"
//                     : item.problemStatus === "Resolved"
//                     ? "text-green-600"
//                     : "text-blue-600"
//                 }`}
//               >
//                 {item.problemStatus}
//               </span>
//             </div>

//             <div className="flex justify-end items-center gap-2 mt-3">
//               <span
//                 className={`flex justify-center items-center w-7 h-7 rounded-full ${
//                   item.isProblem
//                     ? "bg-white text-blue-600 border border-blue-600"
//                     : "bg-gray-200 text-gray-600"
//                 }`}
//               >
//                 <FaRegMessage size={14} />
//               </span>
//               <span
//                 className={`flex justify-center items-center w-7 h-7 rounded-full ${
//                   item.isProblem
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-600"
//                 }`}
//               >
//                 <FaPhone size={14} />
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaRegMessage } from "react-icons/fa6";

function ProblemGridView({ data = [], selectedFilter }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/dashboard/problems/${id}`, {
      state: { business: data.find((d) => d.id === id) },
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleCardClick(item.id)}
          className="bg-blue-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-blue-400 transition-all cursor-pointer flex flex-col"
        >
          {/* === Top Section === */}
          <div className="flex justify-between items-center p-3 gap-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 border rounded-full overflow-hidden">
                  <img
                    src="/user.png"
                    alt="userImage"
                    className="object-cover w-full h-full"
                  />
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
                <FaPhone size={14} />
              </span>
            </div>
          </div>

          {/* === Bottom Section === */}
          <div className="flex flex-col justify-start p-3 bg-white gap-3 flex-grow">
            <div className="w-full">
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
                      <div className="w-full grid grid-cols-2">
                        <span className="text-gray-700 text-xs">
                          {row.label}
                        </span>
                        <span
                          className={`${row.color} text-xs font-bold truncate`}
                        >
                          {row.value}
                        </span>
                      </div>
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

                {/* Bottom Section */}
                <div className="mt-4">
                  <div className="flex gap-2 px-2">
                    <span className="text-black text-sm">Unique Identifier</span>
                    <span className="text-black text-sm font-semibold truncate">
                      12345678-ASDF3ASD213SDF15-ASD3F21ASDF51
                    </span>
                  </div>
                  <div className="mt-2">
                    <button className="w-full border-2 border-blue-600 text-blue-600 bg-gray-50 p-1 rounded-lg">
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

export default ProblemGridView;
