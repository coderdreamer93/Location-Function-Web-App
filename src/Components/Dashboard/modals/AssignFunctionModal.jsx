import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";

export default function AssignFunctionModal({ onClose, users = [] }) {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <ModalWrapper title="Assign Function to..." onClose={onClose}>
      <div className="flex flex-col gap-3">
        {users.map((user, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border rounded-xl p-3 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.location}</p>
                <p className="text-xs text-red-500">
                  Problem <span className="font-semibold">{user.problem}</span>
                </p>
              </div>
            </div>
            <button
              className={`text-sm font-medium ${
                selectedUser === idx ? "text-blue-600" : "text-gray-400"
              } hover:text-blue-600`}
              onClick={() => setSelectedUser(idx)}
            >
              Select
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 mt-5">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          Save
        </button>
      </div>
    </ModalWrapper>
  );
}
