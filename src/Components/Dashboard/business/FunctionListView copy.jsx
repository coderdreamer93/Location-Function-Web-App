import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChatIcon } from "../../../Assets/icons/chatIcon.svg";
import { ReactComponent as ContactIcon } from "../../../Assets/icons/contactIcon.svg";
import { ReactComponent as DownIcon } from "../../../Assets/icons/downIcon.svg";
import { ReactComponent as ThreeDotIcon } from "../../../Assets/icons/threeDotIcon.svg";
import FunctionPopupMenu from "./FunctionPopupMenu";
import usePortal from "../../../hook/usePortal";
import ShareFunctionModal from "../modals/ShareFunctionModal";
import AssignFunctionModal from "../modals/AssignFunctionModal";
import ShowAbilityModal from "../modals/ShowAbilityModal";

function FunctionListView({ data = [], selectedFilter, currentUser }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [modalType, setModalType] = useState(null);
  const portalTarget = usePortal();

  // ✅ Toggle card expansion
  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  // ✅ Filter data — show only current user's functions if "myFunction"
  const filteredData = useMemo(() => {
    if (selectedFilter === "myFunction") {
      return data.filter((item) => item.mechanicName === currentUser);
    }
    return data;
  }, [selectedFilter, data, currentUser]);

  // ✅ Navigation on card click
  const handleCardClick = (id) => {
    // navigate(`/dashboard/problems/${id}`, {
    //   state: { business: data.find((d) => d.id === id) },
    // });
  };

  // ✅ Image preview modal
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

      {/* ✅ List View */}
      <div className="space-y-4 mt-6 overflow-visible">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-blue-50 rounded-lg shadow-sm overflow-visible  hover:border-blue-400 transition-all cursor-pointer"
            >
              <div className="flex flex-col justify-start bg-white gap-3 flex-nowrap">
                <div className="flex flex-col rounded-lg border">
                  {/* Header */}
                  <div className="flex justify-between items-center py-1 px-2 bg-blue-50 border-b">
                    <div
                      className="flex flex-1 items-center gap-2"
                      onClick={() => handleCardClick(item.id)}
                    >
                      <img
                        src="/image/UserImage.png"
                        alt="UserImage"
                        className={`cursor-pointer rounded-lg transition-all duration-300 ${
                          expanded === item.id
                            ? "w-[60px] h-[60px]"
                            : "w-[30px] h-[30px]"
                        }`}
                      />

                      <div className="flex flex-col flex-1 newFontColor w-full text-[14px]">
                        <span className="font-bold">{item.mechanicName}</span>

                        <span
                          className={`transition-all duration-300 ${
                            expanded === item.id
                              ? "opacity-100"
                              : "opacity-0 h-0"
                          }`}
                        >
                          {item.designation}
                        </span>

                        <span
                          className={`transition-all duration-300 ${
                            expanded === item.id
                              ? "opacity-100"
                              : "opacity-0 h-0"
                          }`}
                        >
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* ✅ Show Three-Dot Icon Only in "myFunction" Filter */}
                    {selectedFilter === "myFunctions" ? (
                      <div className="relative">
                        <ThreeDotIcon
                           className="w-[20px] h-[20px] p-1 rounded-full bg-white cursor-pointer hover:opacity-70"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuId(
                              openMenuId === item.id ? null : item.id
                            );
                          }}
                        />
                        {openMenuId === item.id && (
                          <FunctionPopupMenu
                            onClose={closeMenu}
                            onAction={handleAction}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <ChatIcon />
                        <ContactIcon />
                        <DownIcon
                          className={`cursor-pointer transform transition-transform duration-300 ${
                            expanded === item.id ? "rotate-180" : "rotate-0"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(item.id);
                          }}
                        />
                      </div>
                    )}
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
                      className={`flex ${
                        expanded === item.id
                          ? "flex-col"
                          : "flex-row items-center justify-between"
                      } gap-2 border-b py-1 px-2 min-h-[30px] sm:min-h-[36px]`}
                    >
                      <div className="flex gap-1 w-full flex-1">
                        <span className="text-gray-700 text-[14px]">
                          {row.label}:
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
                          className={`cursor-pointer ${
                            expanded === item.id
                              ? "w-full h-[120px] object-cover rounded-lg"
                              : "w-7 h-7"
                          }`}
                        />
                      )}
                    </div>
                  ))}
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
      {modalType === "share" &&
        ReactDOM.createPortal(
          <ShareFunctionModal
            onClose={closeModal}
            users={filteredData} // ✅ pass filtered data as users
          />,
          portalTarget
        )}

      {modalType === "assign" &&
        ReactDOM.createPortal(
          <AssignFunctionModal
            onClose={closeModal}
            users={filteredData} // ✅ same here
          />,
          portalTarget
        )}

      {modalType === "ability" &&
        ReactDOM.createPortal(
          <ShowAbilityModal
            onClose={closeModal}
            users={filteredData} // ✅ pass filtered data
          />,
          portalTarget
        )}
    </>
  );
}

export default FunctionListView;
