import { useState, useEffect } from "react";

export default function useMultiViewMode(key = "views") {
  // Default states: dashboard list, sidebar open
  const [views, setViews] = useState({ dashboard: "list", sidebar: "open" });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setViews(JSON.parse(saved));
  }, [key]);

  // Save to localStorage whenever views change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(views));
  }, [key, views]);

  // Update a single view state
  const setView = (viewKey, value) => {
    setViews((prev) => ({ ...prev, [viewKey]: value }));
  };

  return [views, setView];
}
