
import React, { useState } from "react";

export default function AssignFunctionModal({ onClose, users = [] }) {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[999]">
      <div className="bg-white rounded-2xl flex flex-col gap-4 shadow-xl w-full max-w-xl mx-4 md:mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-4 md:px-6 pt-3 md:pt-4">
          <h2 className="text-[14px] md:text-[17px] font-bold text-gray-900 text-nowrap">
            Assign Function to...
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg md:text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* User List */}
        <div className="px-3 md:px-4 flex flex-col gap-2 md:gap-3 max-h-[50vh] overflow-y-auto">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-2 md:p-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                <img
                  src={user.image || "/image/UserImage.png"}
                  alt={user.mechanicName}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex flex-col gap-[3px] justify-center truncate">
                  <span className="font-semibold newFontColor text-[11px] md:text-[15px] leading-tight text-nowrap">
                    {user.mechanicName}
                  </span>
                  <span className="text-[10px] md:text-[13px] newFontColor leading-tight text-nowrap">
                    {user.location || "Los Angeles, CA, USA"}
                  </span>
                  <div className="flex gap-1 text-nowrap">
                    <span className="text-[10px] md:text-[13px] newFontColor font-semibold leading-tight">
                      Problem
                    </span>
                    <span className="text-red-700 text-[10px] md:text-[13px] font-semibold leading-tight">
                      {user.problem || "Dirty Oil"}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedUser(idx)}
                className={`text-[10px] md:text-[14px] font-medium newPrimaryColor hover:underline text-nowrap`}
              >
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-4 md:px-6 pb-3 md:pb-4 bg-white">
          <button
            onClick={onClose}
            className="px-3 md:px-4 py-1.5 md:py-2 text-[11px] md:text-[14px] font-medium newPrimaryColor border newPrimaryBorder rounded-lg hover:bg-blue-50 text-nowrap"
          >
            Cancel
          </button>
          <button className="px-4 md:px-5 py-1.5 md:py-2 text-[11px] md:text-[14px] font-medium text-white newPrimaryBg shadow-lg rounded-lg hover:shadow-sm text-nowrap">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
