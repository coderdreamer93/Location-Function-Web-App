import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as PencilIcon } from "../../../Assets/icons/pencilIcon.svg";
import { ReactComponent as LeftRightIcon } from "../../../Assets/icons/leftRightIcon.svg";
import { ReactComponent as ShareIcon } from "../../../Assets/icons/shareIcon.svg";
import { ReactComponent as ShowIcon } from "../../../Assets/icons/showIcon.svg";
import { ReactComponent as StopIcon } from "../../../Assets/icons/stopIcon.svg";

export default function FunctionPopupMenu({ onClose, onAction }) {
  const menuRef = useRef(null);
  const [position, setPosition] = useState("right"); // default position

  const menuItems = [
    { label: "Edit Function", icon: <PencilIcon />, action: "edit" },
    { label: "Assign Function", icon: <LeftRightIcon />, action: "assign" },
    { label: "Share Function", icon: <ShareIcon />, action: "share" },
    { label: "Show Ability", icon: <ShowIcon />, action: "ability" },
    { label: "Stop Sharing", icon: <StopIcon className="text-red-500" />, action: "stop" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose?.();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (screenWidth <= 640) {
        const isLeftColumn = rect.left < screenWidth / 2;
        setPosition(isLeftColumn ? "right" : "left");
      } else {
        const overflowRight = rect.right > screenWidth - 20;
        const overflowLeft = rect.left < 20;

        if (overflowRight) setPosition("left");
        else if (overflowLeft) setPosition("right");
      }
    }
  }, []);

  return (
    <div
      ref={menuRef}
      className={`absolute z-[9999] sm:w-56 w-40 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden transition-all duration-200
        ${
          position === "right"
            ? "left-full top-0" // ✅ Touches the trigger button
            : "right-full top-0" // ✅ Same for left side
        }`}
      onClick={(e) => e.stopPropagation()}
    >
      {menuItems.map((item, i) => (
        <div
          key={i}
          onClick={() => {
            onAction(item.action);
            onClose();
          }}
          className="flex justify-between items-center px-3 py-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
        >
          {/* ✅ Smaller font on mobile, normal on desktop */}
          <span className="text-gray-800 text-[12px] sm:text-[14px]">
            {item.label}
          </span>
          <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
