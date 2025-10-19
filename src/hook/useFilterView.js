import { useState, useEffect } from "react";

export default function useFilterView(key = "filterView") {
  const [isOpen, setOpen] = useState("open"); // default closed

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setOpen(saved);
  }, [key]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(key, isOpen);
  }, [key, isOpen]);

  return [isOpen, setOpen];
}
