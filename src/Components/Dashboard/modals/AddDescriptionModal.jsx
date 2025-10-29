"use client";
import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as BoldIcon } from "../../../Assets/icons/boldIcon.svg";
import { ReactComponent as ItalicIcon } from "../../../Assets/icons/italicIcon.svg";
import { ReactComponent as UnderlineIcon } from "../../../Assets/icons/underlineIcon.svg";
import { ReactComponent as BulletIcon } from "../../../Assets/icons/bulletIcon.svg";
import { ReactComponent as ListIcon } from "../../../Assets/icons/listIcon.svg";
import { ReactComponent as DotIcon } from "../../../Assets/icons/dotIcon.svg";
import { ReactComponent as DownIcon } from "../../../Assets/icons/descDownIcon.svg";

export default function AddDescriptionModal({ onClose, onSave, initialValue = "" }) {
  const [textType, setTextType] = useState("Normal");
  const [activeButtons, setActiveButtons] = useState([]);
  const modalRef = useRef(null);
  const editorRef = useRef(null);

  // ✅ Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

useEffect(() => {
  if (editorRef.current && initialValue) {
    editorRef.current.innerHTML = initialValue;
  }
}, []);

  // ✅ Update active button states dynamically
  const updateActiveButtons = () => {
    const newActive = [];
    if (document.queryCommandState("bold")) newActive.push("bold");
    if (document.queryCommandState("italic")) newActive.push("italic");
    if (document.queryCommandState("underline")) newActive.push("underline");
    if (document.queryCommandState("insertUnorderedList"))
      newActive.push("bullet");
    if (document.queryCommandState("insertOrderedList")) newActive.push("list");
    setActiveButtons(newActive);
  };

  const toggleButton = (button) => {
    // Ensure editor is focused before executing commands
    editorRef.current?.focus();

    if (button === "bold") document.execCommand("bold");
    if (button === "italic") document.execCommand("italic");
    if (button === "underline") document.execCommand("underline");
    if (button === "bullet") document.execCommand("insertUnorderedList");
    if (button === "list") document.execCommand("insertOrderedList");

    updateActiveButtons();
  };

  const handleSave = () => {
    if (onSave && editorRef.current) onSave(editorRef.current.innerHTML.trim());
    onClose();
  };

  return (
<div className="fixed inset-0 bg-transparent bg-opacity-30 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-lg sm:min-w-md sm:max-w-md md:w-md w-[90%] p-4 mx-auto"
      >
        {/* Header */}
        <h2 className="sm:text-[18px] text-[16px] font-semibold text-black mb-3">
          Add Description
        </h2>

        {/* Toolbar */}
        <div className="border rounded-lg overflow-hidden mb-3">
          <div className="flex items-center justify-between px-2 py-1 sm:py-2 select-none flex-nowrap sm:flex-wrap gap-1">
            {/* Left controls */}
            <div className="flex items-center gap-1 sm:gap-2 pr-2">
              <div className="w-16 sm:w-auto border-r-2 border-gray-200 pr-1 sm:pr-2">
                <select
                  value={textType}
                  onChange={(e) => setTextType(e.target.value)}
                  className="text-[10px] sm:text-[14px] rounded py-0 m-0 sm:py-0.5 focus:outline-none w-full"
                >
                  <option>Normal</option>
                  <option>Heading</option>
                  <option>Subheading</option>
                </select>
              </div>

              <div className="flex items-center gap-1">
                {/* Bold */}
                <button
                  onClick={() => toggleButton("bold")}
                  className={`p-0 w-6 sm:w-auto sm:p-1.5 transition ${
                    activeButtons.includes("bold")
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <BoldIcon className="newFontColor" />
                </button>

                {/* Italic */}
                <button
                  onClick={() => toggleButton("italic")}
                  className={`p-0 w-6 sm:w-auto sm:p-1.5  transition ${
                    activeButtons.includes("italic")
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <ItalicIcon className="newFontColor" />
                </button>

                {/* Underline */}
                <button
                  onClick={() => toggleButton("underline")}
                  className={`p-0 w-6 sm:w-auto sm:p-1.5  transition ${
                    activeButtons.includes("underline")
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <UnderlineIcon className="newFontColor" />
                </button>
              </div>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2 border-r-2 border-gray-200 pr-1">
              {/* Bullet list */}
              <button
                onClick={() => toggleButton("bullet")}
                className={`flex items-center gap-0 sm:gap-1 w-10 sm:w-auto p-0 sm:p-1.5 transition ${
                  activeButtons.includes("bullet")
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <BulletIcon className="newFontColor" />
                <DownIcon className="w-3 h-3 sm:w-4 sm:h-4 newFontColor" />
              </button>

              {/* Numbered list */}
              <button
                onClick={() => toggleButton("list")}
                className={`flex items-center gap-0 sm:gap-1 w-10 sm:w-auto p-0 sm:p-1.5 transition ${
                  activeButtons.includes("list")
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <ListIcon className="newFontColor" />
                <DownIcon className="w-3 h-3 sm:w-4 sm:h-4 newFontColor" />
              </button>
            </div>
            {/* <div className="flex items-center gap-1 sm:gap-2 border-r"> */}
            {/* Dot icon */}
            <button
              onClick={() => toggleButton("dot")}
              className={`p-1 pl-none sm:p-1.5 transition ${
                activeButtons.includes("dot")
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <DotIcon className="newFontColor" />
            </button>
            {/* </div> */}
          </div>

          {/* Editable content area */}
          <div
            ref={editorRef}
            contentEditable
            onInput={updateActiveButtons}
            suppressContentEditableWarning
            className="relative w-full h-28 sm:h-32 p-2 sm:p-3 text-[12px] sm:text-[14px] border-t border-gray-200 newFontColor resize-none focus:outline-none overflow-y-auto editor-content"
          >
            {/* Custom Placeholder */}
            {(!editorRef.current ||
              editorRef.current.textContent.trim() === "") && (
              <span className="absolute top-2 left-3 text-gray-400 pointer-events-none select-none">
                Type here...
              </span>
            )}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full newPrimaryBg text-white py-2.5 rounded-lg transition-all"
        >
          Save
        </button>
      </div>
    </div>
  );
}
