import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ChatIcon } from "../../../Assets/icons/chatIcon.svg";
import { ReactComponent as ContactIcon } from "../../../Assets/icons/contactIcon.svg";
import { ReactComponent as DownIcon } from "../../../Assets/icons/downIcon.svg";

function FunctionGridView({ data = [], selectedFilter }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleCardClick = (id) => {
    navigate(`/dashboard/problems/${id}`, {
      state: { business: data.find((d) => d.id === id) },
    });
  };

  const toggleExpand = (id, e) => {
    e.stopPropagation();
    setExpanded((prev) => (prev === id ? null : id));
  };

  const openModal = (src, e) => {
    e.stopPropagation();
    setModalImage(src);
  };

  const closeModal = () => setModalImage(null);

  return (
    <>
      {/* ✅ Modal */}
      {modalImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
        >
          <img src={modalImage} alt="Preview" className="max-w-[90%] max-h-[90%] rounded-lg" />
        </div>
      )}

      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-4 mt-6">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="bg-blue-50 rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-blue-400 transition-all cursor-pointer"
          >
            <div className="flex flex-col bg-white">
              
              {/* Header */}
              <div className="flex justify-between items-center py-1 px-2 bg-blue-50 border-b">
                <div className="flex items-center gap-2">
                  <img
                    src="/image/UserImage.png"
                    alt="UserImage"
                    onClick={(e) => openModal("/image/UserImage.png", e)}
                    className={`cursor-pointer rounded-lg transition-all duration-300 ${
                      expanded === item.id ? "w-[60px] h-[60px]" : "w-[30px] h-[30px]"
                    }`}
                  />
                  <div className="flex flex-col text-black text-[14px]">
                    <span className="font-semibold text-nowrap truncate">John Thompson</span>

                    <span className={`${expanded === item.id ? "opacity-100" : "opacity-0 h-0"} transition-all duration-300`}>
                      Designation
                    </span>

                    <span className={`${expanded === item.id ? "opacity-100" : "opacity-0 h-0"} transition-all duration-300`}>
                      Location
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <ChatIcon />
                  <ContactIcon />
                  <DownIcon
                    className={`cursor-pointer transform transition-transform duration-300 ${
                      expanded === item.id ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={(e) => toggleExpand(item.id, e)}
                  />
                </div>
              </div>

              {/* Rows — Same Layout as ListView ✅ */}
              {[
                {
                  label: "Function",
                  value: "Fix Car",
                  color: "text-green-600",
                  image: "/fixIcon.png",
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
                  } gap-2 border-b py-1 px-2`}
                >
                  <div className="flex gap-1 w-full flex-1">
                    <span className="text-gray-700 text-[14px] text-nowrap">{row.label}:</span>
                    <span className={`${row.color} text-[14px] font-bold text-nowrap truncate`}>{row.value}</span>
                  </div>

                  {row.image && (
                    <div
                      className={`${
                        expanded === item.id
                          ? "w-full h-[120px] flex items-center justify-center"
                          : "w-7 h-7"
                      }`}
                    >
                      <img
                        src={row.image}
                        alt={row.label}
                        onClick={(e) => openModal(row.image, e)}
                        className={`cursor-pointer object-cover rounded-lg w-full h-full`}
                      />
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FunctionGridView;
