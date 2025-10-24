
// import React, { useEffect, useRef } from "react";
// import { ReactComponent as PencilIcon } from "../../../Assets/icons/pencilIcon.svg";
// import { ReactComponent as LeftRightIcon } from "../../../Assets/icons/leftRightIcon.svg";
// import { ReactComponent as ShareIcon } from "../../../Assets/icons/shareIcon.svg";
// import { ReactComponent as ShaowIcon } from "../../../Assets/icons/showIcon.svg";
// import { ReactComponent as StopIcon } from "../../../Assets/icons/stopIcon.svg";

// export default function FunctionPopupMenu({ onClose }) {
//   const menuRef = useRef(null);

//   const menuItems = [
//     { label: "Edit Function", icon: <PencilIcon /> },
//     { label: "Assign Function", icon: <LeftRightIcon /> },
//     { label: "Share Function", icon: <ShareIcon /> },
//     { label: "Show Ability", icon: <ShaowIcon /> },
//     { label: "Stop Sharing", icon: <StopIcon className="text-red-500" /> },
//   ];

//   // ✅ Close on outside click
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         onClose?.();
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   return (
//     <div
//       ref={menuRef}
//       className="absolute right-3 top-3 mt-2 z-[9999] w-56 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
//       onClick={(e) => e.stopPropagation()}
//     >
//       {menuItems.map((item, index) => (
//         <div
//           key={index}
//           onClick={onClose}
//           className="flex justify-between items-center px-3 py-2 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer transition-colors"
//         >
//           <span className="text-gray-800 text-sm font-medium">{item.label}</span>
//           {item.icon}
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useRef } from "react";
import { ReactComponent as PencilIcon } from "../../../Assets/icons/pencilIcon.svg";
import { ReactComponent as LeftRightIcon } from "../../../Assets/icons/leftRightIcon.svg";
import { ReactComponent as ShareIcon } from "../../../Assets/icons/shareIcon.svg";
import { ReactComponent as ShowIcon } from "../../../Assets/icons/showIcon.svg";
import { ReactComponent as StopIcon } from "../../../Assets/icons/stopIcon.svg";

export default function FunctionPopupMenu({ onClose, onAction }) {
  const menuRef = useRef(null);

  const menuItems = [
    { label: "Edit Function", icon: <PencilIcon />, action: "edit" },
    { label: "Assign Function", icon: <LeftRightIcon />, action: "assign" },
    { label: "Share Function", icon: <ShareIcon />, action: "share" },
    { label: "Show Ability", icon: <ShowIcon />, action: "ability" },
    { label: "Stop Sharing", icon: <StopIcon className="text-red-500" />, action: "stop" },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose?.();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="absolute right-3 top-3 mt-2 z-[9999] sm:w-56 w-48 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
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
          <span className="text-gray-800 text-sm font-medium">{item.label}</span>
          {item.icon}
        </div>
      ))}
    </div>
  );
}
