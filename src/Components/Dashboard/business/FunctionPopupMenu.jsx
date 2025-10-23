
import React from "react";
import { ReactComponent as PencilIcon } from "../../../Assets/icons/pencilIcon.svg"
import { ReactComponent as LeftRightIcon } from "../../../Assets/icons/leftRightIcon.svg"
import { ReactComponent as ShareIcon } from "../../../Assets/icons/shareIcon.svg"
import { ReactComponent as ShaowIcon } from "../../../Assets/icons/showIcon.svg"
import { ReactComponent as StopIcon } from "../../../Assets/icons/stopIcon.svg"

export default function FunctionPopupMenu() {
  const menuItems = [
    { label: "Edit Function", labelMobile: "Edit", icon: <PencilIcon size={16} /> },
    { label: "Assign Function", labelMobile: "Assign", icon: <LeftRightIcon size={16} /> },
    { label: "Share Function", labelMobile: "Share", icon: <ShareIcon size={16} /> },
    { label: "Show Ability", labelMobile: "Show Ability", icon: <ShaowIcon size={16} /> },
    { label: "Stop Sharing", labelMobile: "Stop Sharing", icon: <StopIcon size={14} className="text-red-500" /> },
  ];

  return (
    <div className="flex items-center justify-center gap-8 bg-gray-800 min-h-screen p-6">
      {/* 🖥️ Desktop Menu */}
      <div className="hidden md:flex flex-col bg-white rounded-xl shadow-md w-60 overflow-hidden">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-3 py-2 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <span className="text-gray-800 text-sm font-medium">{item.label}</span>
            {item.icon}
          </div>
        ))}
      </div>

      {/* 📱 Mobile Menu */}
      <div className="flex md:hidden flex-col bg-white rounded-2xl shadow-md w-36 overflow-hidden">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-3 py-2 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <span className="text-gray-800 text-sm font-medium">{item.labelMobile}</span>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
