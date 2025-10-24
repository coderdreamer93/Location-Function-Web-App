import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../../Assets/icons/xIcon.svg";

export default function ShareFunctionModal({ onClose, users = [] }) {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[999]">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 pt-4">
          <h2 className="text-[17px] font-semibold text-gray-900">
            Share Function with...
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            <CloseIcon />
          </button>
        </div>

        {/* User List */}
        <div className="p-4 flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.image || "/image/UserImage.png"}
                  alt={user.mechanicName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1 justify-center">
                  <span className="font-semibold newFontColor text-[15px] leading-[1.1]">
                    {user.mechanicName}
                  </span>
                  <span className="text-gray-500 text-[14px] newFontColor leading-[1.1] mt-[1px]">
                    {user.location || "Los Angeles, CA, USA"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedUser(idx)}
                className={`text-[14px] font-medium ${
                  selectedUser === idx ? "newPrimaryColor" : "newPrimaryColor"
                } hover:underline`}
              >
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center  px-6 pb-4 bg-white">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[14px] font-medium newPrimaryColor border newPrimaryBorder rounded-lg hover:bg-blue-50"
          >
            Cancel
          </button>
          <button className="px-5 py-2 text-[14px] font-medium text-white newPrimaryBg shadow-lg rounded-lg hover:shadow-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
