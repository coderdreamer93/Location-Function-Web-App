import React from "react";
import ModalWrapper from "./ModalWrapper";

export default function ShowAbilityModal({ onClose, user }) {
  return (
    <ModalWrapper title="Ability" onClose={onClose}>
      <div className="flex flex-col items-center text-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
        <p className="text-[15px] font-semibold text-gray-900">{user.name}</p>
        <p className="text-sm text-gray-500 mb-4">
          {user.designation} • {user.shopName}
        </p>

        <div className="flex flex-col gap-2 w-full">
          <div className="bg-blue-400 text-white font-medium py-2 rounded-lg">
            Ability
          </div>
          <div className="bg-blue-500 text-white font-medium py-2 rounded-lg">
            Execute
          </div>
          <div className="bg-blue-600 text-white font-medium py-2 rounded-lg">
            Function
          </div>
          <div className="bg-blue-700 text-white font-medium py-2 rounded-lg">
            Solve
          </div>
          <div className="bg-red-500 text-white font-medium py-2 rounded-lg">
            Problem
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
