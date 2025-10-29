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
//                 <span className="text-[14px] font-bold text-gray-900">
//                   {item.name}
//                 </span>
//                 <span className="text-[14px] newFontColor">{item.location}</span>
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
//                   <span className="newFontColor text-[14px]">Date</span>
//                   <span className="text-green-600 text-[14px] font-bold">
//                     {item.date}
//                   </span>
//                 </div>
//                 <div className="grid grid-cols-2">
//                   <span className="newFontColor text-[14px]">Problem</span>
//                   <span className="text-red-600 text-[14px] font-bold">
//                     {item.problem}
//                   </span>
//                 </div>
//                 <div className="grid grid-cols-2">
//                   <span className="newFontColor text-[14px]">Problem Status</span>
//                   <span className="text-blue-600 text-[14px] font-bold">
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
//                     <span className="newFontColor text-[14px]">Function</span>
//                     <span className="text-green-600 text-[14px] font-bold">
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
//                     <span className="newFontColor text-[14px]">
//                       Problem Solved
//                     </span>
//                     <span className="text-red-600 text-[14px] font-bold">
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
//                     <span className="newFontColor text-[14px]">
//                       Location
//                     </span>
//                     <span className="text-black text-[14px] font-bold">
//                       {item.location}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center gap-2 border py-1 px-2 rounded-b-lg">
//                   <div className="md:w-1/4 sm:w-1/4 w-1/2 grid grid-cols-2 rounded-b-lg">
//                     <span className="newFontColor text-[14px]">
//                       Formula Usage
//                     </span>
//                     <span className="text-blue-600 text-[14px] font-bold">
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


function ProblemListView({ data = [], selectedFilter, currentUser }) {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const portalTarget = usePortal();

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

  // ✅ Three-dot menu logic
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

      <div className="space-y-4 mt-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="bg-blue-50 rounded-lg shadow-sm overflow-visible border border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
            >
              {/* === Top Section === */}
              <div className="flex justify-between items-center p-3 gap-3 flex-wrap md:flex-nowrap">
                <div
                  className="flex flex-1 items-center gap-2"
                  onClick={() => handleCardClick(item.id)}
                >
                  <img
                    src="/image/UserImage.png"
                    alt="UserImage"
                    className={
                      "cursor-pointer rounded-lg w-[60px] h-[60px] transition-all duration-300"
                    }
                  />

                  <div className="flex flex-col flex-1 newFontColor w-full text-[14px]">
                    <span className="font-bold">{item.mechanicName}</span>
                    <span className={"transition-all opacity-100 duration-300"}>
                      {item.location}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center cursor-pointer gap-2 shrink-0">
                  {/* Chat Icon — always visible */}
                  <span
                    className={`flex justify-center items-center w-7 h-7 rounded-full border ${
                      item.isProblem
                        ? "bg-transparent text-blue-600 border-blue-600"
                        : "bg-transparent text-gray-600 border-gray-400"
                    }`}
                  >
                    <ChatProblemIcon size={14} />
                  </span>

                  {/* Second Icon — conditional */}
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
              <div className="flex flex-col justify-start p-3 bg-white gap-3 flex-nowrap">
                <div className="w-fit">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1">
                      <span className="newFontColor text-[14px] font-semibold mr-2">
                        Date
                      </span>
                      <span className="newFontColor text-[14px] font-bold">
                        {new Date(item.date).toLocaleDateString("en-GB")}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="newFontColor text-[14px] font-semibold mr-2">
                        Problem
                      </span>
                      <span className="text-red-600 text-[14px] font-bold">
                        {item.problem}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="newFontColor text-[14px] font-semibold mr-2">
                        Problem Status
                      </span>
                      <span className="text-blue-600 text-[14px] font-bold">
                        {item.problemStatus}
                      </span>
                    </div>
                    {selectedFilter === "assignProblems" && (
                      <div className="flex gap-1">
                        <span className="newFontColor text-[14px] font-semibold mr-2">
                          Function
                        </span>
                        <span className="text-green-600 text-[14px] font-bold">
                          {item.function}
                        </span>
                      </div>
                    )}
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
                          {item.mechanicName}
                        </span>
                      </div>

                      {/* Rows */}
                      {[
                        {
                          label: "Function",
                          value: item.function,
                          color: "text-green-600",
                          image: "/FixIcon.png",
                        },
                        {
                          label: "Problem Solved",
                          value: item.problem,
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
                          value: item.formulaUsage,
                          color: "newPrimaryColor",
                          image: null,
                        },
                      ].map((row, idx) => (
                        <div
                          key={idx}
                          className={
                            "flex flex-row items-center justify-between gap-2 border-b py-1 px-2 min-h-[30px] sm:min-h-[36px]"
                          }
                        >
                          <div className="flex gap-1 w-full flex-1">
                            <span className="text-gray-700 text-[14px]">
                              {row.label}
                            </span>
                            <span
                              className={`${row.color} text-[14px] font-bold truncate`}
                            >
                              {row.value}
                            </span>
                          </div>

                          {row.image && (
                            <img
                              src={row.image}
                              alt={row.label}
                              onClick={(e) => openModal(row.image, e)}
                              className={"cursor-pointer w-7 h-7 "}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3 bg-gray-50">
                <div className="flex gap-2 px-2 pt-3">
                  <span className="text-black font-normal text-[14px]">
                    Unique Identifier
                  </span>
                  <span className="text-black text-[14px] font-semibold">
                    12345678-ASDF3ASD213SDF15-ASD3F21ASDF51
                  </span>
                </div>
                <div className="mt-2">
                  <button className="w-full border-2 text-[16px] newPrimaryBorder newPrimaryColor bg-transparent p-1 rounded-lg ">
                    Rate Function
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No functions found.
          </div>
        )}
      </div>
      {/* ✅ PORTAL MODALS — placed at the end */}

      {modalType === "assignProblem" &&
        ReactDOM.createPortal(
          <AssignProblemModal
            onClose={closeModal}
            users={filteredData} // ✅ same here
          />,
          portalTarget
        )}

      {modalType === "stopProblem" &&
        ReactDOM.createPortal(
          <StopProblemModal
            onClose={closeModal}
            users={filteredData} // ✅ pass filtered data
          />,
          portalTarget
        )}
    </>
  );
}

export default ProblemListView;
