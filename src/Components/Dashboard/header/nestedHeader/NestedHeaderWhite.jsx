// import React from "react";
// import { IoChevronForwardOutline } from "react-icons/io5";

// function NestedHeaderWhite({ title, breadcrumbs = ["Dashboard", "Create Functions"] }) {
//   return (
//     <div className="flex flex-col gap-2">
//       {/* Breadcrumbs */}
//       <div className="flex items-center text-sm text-gray-500">
//         {breadcrumbs.map((crumb, index) => (
//           <div key={index} className="flex items-center">
//             <span
//               className={`uppercase${
//                 index === breadcrumbs.length - 1
//                   ? "text-blue-600 cursor-pointer "
//                   : "hover:text-gray-700 cursor-pointer"
//               }`}
//             >
//               {crumb}
//             </span>
//             {index < breadcrumbs.length - 1 && (
//               <IoChevronForwardOutline className="mx-2 text-gray-400" size={14} />
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Title */}
//       <p className="text-3xl font-semibold text-gray-800">{title}</p>
//     </div>
//   );
// }

// export default NestedHeaderWhite;


import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function NestedHeaderWhite({
  title,
  breadcrumbs = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Functions", path: "/dashboard/functions" },
    { label: "Create Function", path: "" }, // current page (no path)
  ],
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center">
            <span
              onClick={() => crumb.path && navigate(crumb.path)}
              className={`uppercase transition-all duration-200 ${
                index === breadcrumbs.length - 1
                  ? "text-blue-600 font-medium cursor-default"
                  : "text-gray-500 hover:text-blue-600 cursor-pointer"
              }`}
            >
              {crumb.label}
            </span>
            {index < breadcrumbs.length - 1 && (
              <IoChevronForwardOutline className="mx-2 text-gray-400" size={14} />
            )}
          </div>
        ))}
      </div>

      {/* Title */}
      <p className="text-3xl font-semibold text-gray-800">{title}</p>
    </div>
  );
}

export default NestedHeaderWhite;
