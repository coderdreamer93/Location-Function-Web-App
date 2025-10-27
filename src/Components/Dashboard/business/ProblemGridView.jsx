// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FaPhone, FaRegMessage } from "react-icons/fa6";

// // export default function ProblemGridView({ data = [] }) {
// //   const navigate = useNavigate();

// //   const handleCardClick = (id) => {
// //     navigate(`/dashboard/problems/${id}`, {
// //       state: { business: data.find((d) => d.id === id) },
// //     });
// //   };

// //   return (
// //     <div className="grid gap-3 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
// //       {data.map((item) => (
// //         <div
// //           key={item.id}
// //           onClick={() => handleCardClick(item.id)}
// //           className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer overflow-hidden"
// //         >
// //           {/* Image Section */}
// //           <div className="relative">
// //             <img
// //               src="/mechanic.jpg"
// //               alt={item.name}
// //               className="w-full h-32 object-cover"
// //             />
// //             {item.online && (
// //               <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
// //             )}
// //           </div>

// //           {/* Content Section */}
// //           <div className="p-3 flex flex-col justify-between gap-1">
// //             <div>
// //               <span className="text-sm font-semibold text-gray-900 truncate">
// //                 {item.name}
// //               </span>
// //               <p className="text-xs text-gray-600">{item.location}</p>
// //             </div>

// //             <div className="text-xs grid grid-cols-2 gap-y-1 mt-2">
// //               <span className="text-gray-700">Date</span>
// //               <span className="text-green-600 font-bold">{item.date}</span>

// //               <span className="text-gray-700">Problem</span>
// //               <span className="text-red-600 font-bold">{item.problem}</span>

// //               <span className="text-gray-700">Status</span>
// //               <span
// //                 className={`font-bold ${
// //                   item.problemStatus === "Pending"
// //                     ? "text-yellow-600"
// //                     : item.problemStatus === "Resolved"
// //                     ? "text-green-600"
// //                     : "newPrimaryColor"
// //                 }`}
// //               >
// //                 {item.problemStatus}
// //               </span>
// //             </div>

// //             <div className="flex justify-end items-center gap-2 mt-3">
// //               <span
// //                 className={`flex justify-center items-center w-7 h-7 rounded-full ${
// //                   item.isProblem
// //                     ? "bg-white newPrimaryColor border border-blue-600"
// //                     : "bg-gray-200 text-gray-600"
// //                 }`}
// //               >
// //                 <FaRegMessage size={14} />
// //               </span>
// //               <span
// //                 className={`flex justify-center items-center w-7 h-7 rounded-full ${
// //                   item.isProblem
// //                     ? "bg-blue-600 text-white"
// //                     : "bg-gray-200 text-gray-600"
// //                 }`}
// //               >
// //                 <FaPhone size={14} />
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaPhone, FaRegMessage } from "react-icons/fa6";

// function ProblemGridView({ data = [], selectedFilter }) {
//   const navigate = useNavigate();

//   const handleCardClick = (id) => {
//     // navigate(`/dashboard/problems/${id}`, {
//     //   state: { business: data.find((d) => d.id === id) },
//     // });
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//       {data.map((item) => (
//         <div
//           key={item.id}
//           onClick={() => handleCardClick(item.id)}
//           className="bg-blue-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-blue-400 transition-all cursor-pointer flex flex-col"
//         >
//           {/* === Top Section === */}
//           <div className="flex justify-between items-center p-3 gap-3">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className="w-12 h-12 border rounded-full overflow-hidden">
//                   <img
//                     src="/user.png"
//                     alt="userImage"
//                     className="object-cover w-full h-full"
//                   />
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
//                     ? "bg-white newPrimaryColor border border-blue-600"
//                     : "bg-gray-200 text-gray-600"
//                 } rounded-full`}
//               >
//                 <FaRegMessage size={14} />
//               </span>
//               <span
//                 className={`flex justify-center items-center w-7 h-7 ${
//                   item.isProblem
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-600"
//                 } rounded-full`}
//               >
//                 <FaPhone size={14} />
//               </span>
//             </div>
//           </div>

//           {/* === Bottom Section === */}
//           <div className="flex flex-col justify-start p-3 bg-white gap-3 flex-grow">
//             <div className="w-full">
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
//                   <span className="newPrimaryColor text-xs font-bold">
//                     {item.problemStatus}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* === Big Image (show only for all/my/shared) === */}
//             {selectedFilter !== "assignProblems" && (
//               <div className="w-full">
//                 <img
//                   src="/mechanic.jpg"
//                   alt={item.name}
//                   className="rounded-lg border-2 border-gray-100 w-full h-24 object-cover"
//                 />
//               </div>
//             )}

//             {/* === John Thompson Section (only for assignProblems) === */}
//             {selectedFilter === "assignProblems" && (
//               <div className="w-full rounded-lg">
//                 <div className="flex flex-col border rounded-lg">
//                   {/* Header */}
//                   <div className="flex justify-start rounded-t-lg items-center gap-2 border border-gray-100 py-1 px-2 bg-blue-50">
//                     <img
//                       src="/mechanic.jpg"
//                       alt=""
//                       className="rounded-full w-6 h-6"
//                     />
//                     <span className="text-black text-sm font-semibold">
//                       John Thompson
//                     </span>
//                   </div>

//                   {/* Rows */}
//                   {[
//                     {
//                       label: "Function",
//                       value: item.date,
//                       color: "text-green-600",
//                       showImage: true,
//                     },
//                     {
//                       label: "Problem Solved",
//                       value: item.date,
//                       color: "text-red-600",
//                       showImage: true,
//                     },
//                     {
//                       label: "Location",
//                       value: item.location,
//                       color: "text-black",
//                       showImage: false,
//                     },
//                     {
//                       label: "Formula Usage",
//                       value: item.location,
//                       color: "newPrimaryColor",
//                       showImage: false,
//                     },
//                   ].map((row, index) => (
//                     <div
//                       key={index}
//                       className={`flex justify-between items-center gap-2 border border-gray-100 py-1 px-2 ${
//                         index === 3 ? "rounded-b-lg" : ""
//                       }`}
//                       style={{ minHeight: "30px" }}
//                     >
//                       <div className="w-full grid grid-cols-2">
//                         <span className="text-gray-700 text-xs">
//                           {row.label}
//                         </span>
//                         <span
//                           className={`${row.color} text-xs font-bold truncate`}
//                         >
//                           {row.value}
//                         </span>
//                       </div>
//                       {row.showImage && (
//                         <img
//                           src="/mechanic.jpg"
//                           alt=""
//                           className="w-6 h-6 rounded-md"
//                         />
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="mt-4">
//                   <div className="flex gap-2 px-2">
//                     <span className="text-black text-sm">Unique Identifier</span>
//                     <span className="text-black text-sm font-semibold truncate">
//                       12345678-ASDF3ASD213SDF15-ASD3F21ASDF51
//                     </span>
//                   </div>
//                   <div className="mt-2">
//                     <button className="w-full border-2 border-blue-600 newPrimaryColor bg-gray-50 p-1 rounded-lg">
//                       Rate Function
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProblemGridView;


import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";
import usePortal from "../../../hook/usePortal";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChatProblemIcon } from "../../../Assets/icons/chatProblem.svg";
import { ReactComponent as PhoneIcon } from "../../../Assets/icons/phone.svg";
import { ReactComponent as ThreeDotIcon } from "../../../Assets/icons/threeDotIcon.svg";
import ProblemPopupMenu from "./ProblemPopupMenu";
import AssignProblemModal from "../modals/AssignProblemModal";
import StopProblemModal from "../modals/StopProblemModal";

function ProblemGridView({ data = [], selectedFilter, currentUser }) {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const portalTarget = usePortal();

  // ✅ Filter data (same as list view)
  const filteredData = useMemo(() => {
    if (selectedFilter === "myFunction") {
      return data.filter((item) => item.mechanicName === currentUser);
    }
    return data;
  }, [selectedFilter, data, currentUser]);

  const openModal = (src, e) => {
    e.stopPropagation();
    setModalImage(src);
  };

  const closeImageModal = () => setModalImage(null);
  const closeModal = () => setModalType(null);
  const closeMenu = () => setOpenMenuId(null);

  const handleAction = (type) => {
    closeMenu();
    setModalType(type);
  };

  const handleCardClick = (id) => {
    // navigate(`/dashboard/problems/${id}`, {
    //   state: { business: data.find((d) => d.id === id) },
    // });
  };

  return (
    <>
      {/* ✅ Fullscreen Image Preview Modal */}
      {modalImage && (
        <div
          onClick={closeImageModal}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={modalImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}

      {/* ✅ Grid Layout (UI same) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="bg-blue-50 rounded-lg shadow-sm overflow-visible border border-gray-200 hover:border-blue-400 transition-all cursor-pointer flex flex-col"
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
                    <span className="text-xs text-gray-700">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* === Right side icons === */}
                <div className="flex justify-center items-center cursor-pointer gap-2 shrink-0">
                  {/* Chat Icon (same SVG as list view) */}
                  <span
                    className={`flex justify-center items-center w-7 h-7 rounded-full border ${
                      item.isProblem
                        ? "bg-transparent text-blue-600 border-blue-600"
                        : "bg-transparent text-gray-600 border-gray-400"
                    }`}
                  >
                    <ChatProblemIcon size={14} />
                  </span>

                  {/* Second Icon (Phone / 3-dots) */}
                  <span
                    className={`flex justify-center items-center w-7 h-7 rounded-full border text-[16px] ${
                      item.isProblem
                        ? selectedFilter === "allProblems"
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-transparent newFontColor border-gray-400"
                        : "bg-transparent text-gray-600 border-gray-400"
                    }`}
                  >
                    {selectedFilter === "allProblems" ? (
                      <PhoneIcon className="w-3.5 h-3.5 text-white fill-current" />
                    ) : (
                      <div className="relative">
                        <ThreeDotIcon
                          className="w-[20px] h-[20px] p-1 rounded-full bg-transparent
                           cursor-pointer hover:opacity-70"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuId(
                              openMenuId === item.id ? null : item.id
                            );
                          }}
                        />
                        {openMenuId === item.id && (
                          <ProblemPopupMenu
                            onClose={closeMenu}
                            onAction={handleAction}
                          />
                        )}
                      </div>
                    )}
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
                        {new Date(item.date).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-700 text-xs">Problem</span>
                      <span className="text-red-600 text-xs font-bold">
                        {item.problem}
                      </span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-gray-700 text-xs">
                        Problem Status
                      </span>
                      <span className="newPrimaryColor text-xs font-bold">
                        {item.problemStatus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* === Big Image (same logic as list) */}
                {selectedFilter !== "assignProblems" && (
                  <div className="w-full">
                    <img
                      src="/mechanic.jpg"
                      alt={item.name}
                      className="rounded-lg border-2 border-gray-100 w-full h-24 object-cover"
                    />
                  </div>
                )}

                {/* === Assign Problems Section === */}
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
                          {item.mechanicName}
                        </span>
                      </div>

                      {/* Rows */}
                      {[
                        {
                          label: "Function",
                          value: "Fix Car",
                          color: "text-green-600",
                          image: "/FixIcon.png",
                        },
                        {
                          label: "Problem Solved",
                          value: "Dirty Oil",
                          color: "text-red-600",
                          image: "/OilIcon.png",
                        },
                        {
                          label: "Location",
                          value: item.location,
                          color: "text-black",
                          image: null,
                        },
                        {
                          label: "Formula Usage",
                          value: "The Given Set",
                          color: "newPrimaryColor",
                          image: null,
                        },
                      ].map((row, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center gap-2 border-b py-1 px-2"
                        >
                          <div className="flex gap-1 flex-1">
                            <span className="text-gray-700 text-[13px]">
                              {row.label}:
                            </span>
                            <span
                              className={`${row.color} text-[13px] font-bold truncate`}
                            >
                              {row.value}
                            </span>
                          </div>
                          {row.image && (
                            <img
                              src={row.image}
                              alt={row.label}
                              onClick={(e) => openModal(row.image, e)}
                              className="cursor-pointer w-6 h-6"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-4">
                      <div className="flex gap-2 px-2">
                        <span className="text-black text-sm">
                          Unique Identifier
                        </span>
                        <span className="text-black text-sm font-semibold truncate">
                          12345678-ASDF3ASD213SDF15-ASD3F21ASDF51
                        </span>
                      </div>
                      <div className="mt-2">
                        <button className="w-full border-2 border-blue-600 newPrimaryColor bg-gray-50 p-1 rounded-lg">
                          Rate Function
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No functions found.
          </div>
        )}
      </div>

      {/* ✅ PORTAL MODALS */}
      {modalType === "assignProblem" &&
        ReactDOM.createPortal(
          <AssignProblemModal onClose={closeModal} users={filteredData} />,
          portalTarget
        )}

      {modalType === "stopProblem" &&
        ReactDOM.createPortal(
          <StopProblemModal onClose={closeModal} users={filteredData} />,
          portalTarget
        )}
    </>
  );
}

export default ProblemGridView;
