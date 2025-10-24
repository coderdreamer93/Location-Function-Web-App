"use client";
import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../../Assets/icons/xIcon.svg";

export default function AboutAbilityPreview({ users = [], onClose, className }) {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className={`bg-white rounded-2xl shadow-xl w-full max-w-md border border-gray-200 overflow-hidden ${className}`}>
      {/* Header */}
      {/* User Section */}
      {users.length > 0 && (
        <div className="flex flex-col items-center justify-center py-4 gap-4 rounded-xl border border-gray-200 text-center">
          {/* User Info */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={users[0].image || "/image/UserImage.png"}
              alt={users[0].mechanicName}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <span className="font-semibold newFontColor text-[15px] leading-[1.1]">
                {users[0].mechanicName}
              </span>

              <div className="flex items-center justify-center gap-2">
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

          {/* Buttons Section */}
          <div className="flex flex-col items-center justify-center gap-2 w-full mt-2">
            <button className="w-full py-2 text-[15px] font-medium border bg-[#00A3FF] newFontCOlor rounded-lg  transition">
              Ability
            </button>

            <button className="w-full py-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition">
              Execute
            </button>

            <button className="w-[95%] py-2 text-[15px] rounded-lg text-white newPrimaryBg font-medium transition">
              Function
            </button>

            <button className="w-full py-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition">
              Solve
            </button>

            <button className="w-[95%] py-2 text-[15px] rounded-lg text-white bg-[#D70404] font-medium transition hover:bg-red-600">
              Problem
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
