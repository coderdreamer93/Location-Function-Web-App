"use client";
import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as BoldIcon } from "../../../Assets/icons/boldIcon.svg";
import { ReactComponent as ItalicIcon } from "../../../Assets/icons/italicIcon.svg";
import { ReactComponent as UnderlineIcon } from "../../../Assets/icons/underlineIcon.svg";
import { ReactComponent as BulletIcon } from "../../../Assets/icons/bulletIcon.svg";
import { ReactComponent as ListIcon } from "../../../Assets/icons/listIcon.svg";
import { ReactComponent as DotIcon } from "../../../Assets/icons/dotIcon.svg";
import { ReactComponent as DownIcon } from "../../../Assets/icons/downIcon.svg";

export default function AddDescriptionModal({ onClose, onSave }) {
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

  // ✅ Update active button states dynamically
  const updateActiveButtons = () => {
    const newActive = [];
    if (document.queryCommandState("bold")) newActive.push("bold");
    if (document.queryCommandState("italic")) newActive.push("italic");
    if (document.queryCommandState("underline")) newActive.push("underline");
    if (document.queryCommandState("insertUnorderedList"))
      newActive.push("bullet");
    if (document.queryCommandState("insertOrderedList"))
      newActive.push("list");
    setActiveButtons(newActive);
  };

  // ✅ toggle individual buttons (multiple active allowed)
//   const toggleButton = (button) => {
//     if (button === "bold") document.execCommand("bold");
//     if (button === "italic") document.execCommand("italic");
//     if (button === "underline") document.execCommand("underline");
//     if (button === "bullet") document.execCommand("insertUnorderedList");
//     if (button === "list") document.execCommand("insertOrderedList");
//     updateActiveButtons();
//   };

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
    if (onSave && editorRef.current)
      onSave(editorRef.current.innerHTML.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-30 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-lg min-w-lg p-4"
      >
        {/* Header */}
        <h2 className="text-lg font-semibold text-black mb-3">
          Add Description
        </h2>

        {/* Toolbar */}
        <div className="border rounded-lg overflow-hidden mb-3">
          <div className="flex items-center justify-between px-3 py-2 border-b select-none">
            {/* Left controls */}
            <div className="flex items-center gap-2 pr-3 border-r">
              <div className="border-r pr-2">
                <select
                  value={textType}
                  onChange={(e) => setTextType(e.target.value)}
                  className="text-[14px] rounded py-0.5 focus:outline-none"
                >
                  <option>Normal</option>
                  <option>Heading</option>
                  <option>Subheading</option>
                </select>
              </div>

              {/* Bold */}
              <button
                onClick={() => toggleButton("bold")}
                className={`p-1.5 rounded transition ${
                  activeButtons.includes("bold")
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <BoldIcon className="newFontColor" />
              </button>

              {/* Italic */}
              <button
                onClick={() => toggleButton("italic")}
                className={`p-1.5 rounded transition ${
                  activeButtons.includes("italic")
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <ItalicIcon className="newFontColor" />
              </button>

              {/* Underline */}
              <button
                onClick={() => toggleButton("underline")}
                className={`p-1.5 rounded transition ${
                  activeButtons.includes("underline")
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <UnderlineIcon className="newFontColor" />
              </button>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Bullet list */}
              <button
                onClick={() => toggleButton("bullet")}
                className={`flex items-center gap-1 p-1.5 rounded transition ${
                  activeButtons.includes("bullet")
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <BulletIcon className="newFontColor" />
                <DownIcon className="w-3 h-3 newFontColor" />
              </button>

              {/* Numbered list */}
              <button
                onClick={() => toggleButton("list")}
                className={`flex items-center gap-1 p-1.5 rounded transition ${
                  activeButtons.includes("list")
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <ListIcon className="newFontColor" />
                <DownIcon className="w-3 h-3 newFontColor" />
              </button>

              {/* Dot icon (custom action placeholder) */}
              <button
                onClick={() => toggleButton("dot")}
                className={`p-1.5 rounded transition ${
                  activeButtons.includes("dot")
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <DotIcon className="newFontColor" />
              </button>
            </div>
          </div>

          {/* Editable content area */}
          <div
            ref={editorRef}
            contentEditable
            onInput={updateActiveButtons}
            suppressContentEditableWarning
            placeholder="Type here..."
            className="w-full h-32 p-3 text-[14px] newFontColor placeholder-gray-400 resize-none focus:outline-none overflow-y-auto"
          ></div>
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
