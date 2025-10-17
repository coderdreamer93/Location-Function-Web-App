import { useState, useEffect } from "react";

export default function useCardView(key = "cardView") {
  const [view, setView] = useState("list"); // default view

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setView(saved);
  }, [key]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(key, view);
  }, [key, view]);

  return [view, setView];
}
