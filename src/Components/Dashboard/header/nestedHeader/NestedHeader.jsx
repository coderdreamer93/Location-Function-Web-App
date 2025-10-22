// import React from "react";
// import { ReactComponent as GridIcon } from "../../../../Assets/icons/gridView.svg";
// import { ReactComponent as ListIcon } from "../../../../Assets/icons/listView.svg";

// function NestedHeader({ title, view, setView }) {
//   return (
//     <div className="flex justify-between items-center mb-2 z-999">
//       <p className="text-[24px] font-semibold text-gray-800">{title}</p>

//       <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
//         {view && (
//           <>
//             <button
//               type="button"
//               onClick={() => setView("list")}
//               className={`flex items-center justify-center w-6 h-8 transition-colors ${
//                 view === "list"
//                   ? "bg-blue-100 text-blue-600"
//                   : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
//               }`}
//             >
//               <ListIcon className="w-[40px]" />
//             </button>
//             <button
//               type="button"
//               onClick={() => setView("grid")}
//               className={`flex items-center justify-center w-6 h-8 transition-colors ${
//                 view === "grid"
//                   ? "bg-blue-100 text-blue-600"
//                   : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
//               }`}
//             >
//               <GridIcon className="w-[40px]"/>
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NestedHeader;

import React from "react";
import { ReactComponent as ListIcon } from "../../../../Assets/icons/listIcon.svg";
import { ReactComponent as GridIcon } from "../../../../Assets/icons/gridIcon.svg";

function NestedHeader({ title, view, setView }) {
  return (
    <div className="flex justify-between items-center mb-2 z-50">
      <h1 className="text-[24px] font-bold text-black">{title}</h1>

      <div className="flex items-center border border-gray-200 rounded-md overflow-hidden bg-white">
        {/* List View Button */}
        <button
          type="button"
          onClick={() => setView("list")}
          className={`flex items-center justify-center px-1 py-2 transition-colors duration-200
    ${
      view === "list"
        ? "bg-blue-50 text-blue-600"
        : "bg-white text-gray-400 hover:bg-blue-50 hover:text-blue-600"
    }`}
        >
          <ListIcon
            className={`w-[18px] h-[18px] fill-current ${
              view === "list" ? "text-blue-600" : "text-gray-400"
            }`}
          />
        </button>

        {/* Grid View Button */}
        <button
          type="button"
          onClick={() => setView("grid")}
          className={`flex items-center justify-center px-1.5 py-2 transition-colors duration-200
            ${
              view === "grid"
                ? "bg-blue-50 text-blue-600"
                : "bg-white text-gray-400 hover:bg-blue-50 hover:text-blue-600"
            }`}
        >
          <GridIcon
            color=""
            className="w-[12px] h-[18px] text-black fill-current"
          />
        </button>
      </div>
    </div>
  );
}

export default NestedHeader;
