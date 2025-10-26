import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ThreeDotIcon } from "../../../Assets/icons/threeDotIcon.svg";
import FunctionPopupMenu from "./FunctionPopupMenu";
import usePortal from "../../../hook/usePortal";
import ShareFunctionModal from "../modals/ShareFunctionModal";
import AssignFunctionModal from "../modals/AssignFunctionModal";
import ShowAbilityModal from "../modals/ShowAbilityModal";

function FunctionGridView({ data = [], selectedFilter, currentUser }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [modalType, setModalType] = useState(null); // ✅ which modal to open

  const portalTarget = usePortal();

  const filteredData = useMemo(() => {
    if (selectedFilter === "myFunctions") {
      return data.filter((item) => item.mechanicName === currentUser);
    }
    return data;
  }, [selectedFilter, data, currentUser]);

  const handleCardClick = (id) => {
    // navigate(`/dashboard/problems/${id}`, {
    //   state: { business: data.find((d) => d.id === id) },
    // });
  };

  const openModal = (src, e) => {
    e.stopPropagation();
    setModalImage(src);
  };

  const closeImageModal = () => setModalImage(null);
  const closeMenu = () => setOpenMenuId(null);
  const closeModal = () => setModalType(null);

  const handleAction = (type) => {
    closeMenu();
    setModalType(type);
  };

  return (
    <>
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

      {/* ✅ Grid View */}
      <div
        className={`grid gap-4 mt-6 overflow-visible ${
          selectedFilter === "myFunction"
            ? "grid-cols-2"
            : "lg:grid-cols-4 sm:grid-cols-3 grid-cols-2"
        }`}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="relative bg-blue-50 rounded-lg shadow-sm overflow-visible border border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
            >
              <div className="flex flex-col bg-white">
                {/* Header */}
                <div className="flex justify-between items-center py-1 px-2 bg-blue-50 border-b relative">
                  <div className="flex items-center gap-2">
                    <img
                      src="/image/UserImage.png"
                      alt="User"
                      onClick={(e) => openModal("/image/UserImage.png", e)}
                      className={`cursor-pointer rounded-lg transition-all duration-300 ${
                        expanded === item.id
                          ? "w-[60px] h-[60px]"
                          : "w-[30px] h-[30px]"
                      }`}
                    />
                    <div className="flex flex-col flex-1 newFontColor text-[14px]">
                      <span className="sm:text-[14px] text-[10px] font-semibold text-nowrap truncate">
                        {item.mechanicName}
                      </span>
                      <span
                        className={`transition-all duration-300 ${
                          expanded === item.id ? "opacity-100" : "opacity-0 h-0"
                        }`}
                      >
                        {item.designation}
                      </span>
                      <span
                        className={`transition-all duration-300 ${
                          expanded === item.id ? "opacity-100" : "opacity-0 h-0"
                        }`}
                      >
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* ✅ Show Menu Only in My Functions */}
                  {selectedFilter === "myFunctions" && (
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
                          onAction={handleAction} // ✅ handle actions
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Details */}
              {[
  {
    label: "Function",
    value: item.function,
    color: "text-green-600",
    image: item.functionImage,
  },
  {
    label: "Problem Solved",
    value: item.problem,
    color: "text-red-600",
    image: item.problemImage,
  },
  {
    label: "Location",
    value: item.location,
    color: "newFontColor",
    image: null,
  },
  {
    label: "Formula Usage",
    value: item.formulaValue,
    color: "newPrimaryColor",
    image: null,
  },
].map((row, idx) => (
  <div
    key={idx}
    className={`flex flex-row items-center justify-between gap-2 border-b py-1 px-2 min-h-[30px] sm:min-h-[36px]`}
  >
    {/* ✅ Text area (truncate before image) */}
    <div className="flex gap-1 w-full flex-1 min-w-0">
      <span className="newFontColor text-[10px] sm:text-[14px] text-nowrap">
        {row.label}:
      </span>
      <span
        className={`${row.color} text-[10px] sm:text-[14px] font-bold text-nowrap truncate`}
        title={row.value}
      >
        {row.value || "—"}
      </span>
    </div>

    {/* ✅ Image always visible, square & rounded-md */}
    {row.image && (
      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7">
        <img
          src={row.image}
          alt={row.label}
          onClick={(e) => openModal(row.image, e)}
          className="cursor-pointer object-cover rounded-md w-full h-full"
        />
      </div>
    )}
  </div>
))}

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

export default FunctionGridView;
