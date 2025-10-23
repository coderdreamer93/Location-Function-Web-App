import React, { useState } from "react";

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
            ×
          </button>
        </div>

        {/* User List */}
        <div className="p-6 flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.image || "/image/UserImage.png"}
                  alt={user.mechanicName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-[15px] leading-tight">
                    {user.mechanicName}
                  </p>
                  <p className="text-gray-500 text-[13px] leading-tight">
                    {user.location || "Los Angeles, CA, USA"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedUser(idx)}
                className={`text-[14px] font-medium ${
                  selectedUser === idx ? "text-blue-600" : "text-blue-600"
                } hover:underline`}
              >
                Select
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center border-t px-6 py-4 bg-white">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[14px] font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
          >
            Cancel
          </button>
          <button className="px-5 py-2 text-[14px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
