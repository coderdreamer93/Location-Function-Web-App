import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../../Assets/icons/xIcon.svg";

export default function ShowAbilityModal({ onClose, users = [] }) {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[999]">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-4">
          <h2 className="text-[17px] font-semibold text-gray-900">
            Ability
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            <CloseIcon />
          </button>
        </div>

        {/* User Section */}
        <div className="p-4 flex flex-col py-4 overflow-y-auto ">
          {users.length > 0 && (
            <div className="flex flex-col items-center justify-center py-4 gap-3 rounded-xl border border-gray-200 transition text-center">
              <div className="flex flex-col justify-between items-center gap-3">
                <img
                  src={users[0].image || "/image/UserImage.png"}
                  alt={users[0].mechanicName}
                  className="w-16 h-16 rounded-full object-cover "
                />
                <div>
                  <span className="font-semibold newFontColor text-[15px] leading-[1.1]">
                    {users[0].mechanicName}
                  </span>

                  <div className="flex items-center justify-center gap-2 ">
                    <span className="text-gray-500 text-[12px] newFontColor leading-[1.1]">
                      {users[0].designation || "Designation"}
                    </span>
                    <span className="text-gray-400 text-[12px]">•</span>
                    <span className="text-gray-500 text-[12px] newFontColor leading-[1.1]">
                      {users[0].function || "Function"}
                    </span>
                  </div>
                </div>
              </div>

             <div className="flex flex-col items-center justify-center gap-2 w-full">
  {/* Ability Button */}
  <button className="w-full py-1.5 text-[15px] bg-[#00A3FF] newFontColor transition">
    Ability
  </button>

  {/* Execute Button */}
  <button className="w-full py-1 text-[15px] font-semibold newFontColor transition">
    Execute
  </button>

  {/* Function Button */}
  <button className="w-[95%] py-1 text-[15px] rounded-lg text-white newPrimaryBg transition">
    Function
  </button>

  {/* Solve Button */}
  <button className="w-full py-1 text-[15px] font-semibold newFontColor transition">
    Solve
  </button>

  {/* Problem Button */}
  <button className="w-[95%] py-1 text-[15px] rounded-lg text-white bg-[#D70404] transition">
    Problem
  </button>
</div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
