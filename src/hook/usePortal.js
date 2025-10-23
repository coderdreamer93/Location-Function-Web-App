import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function usePortal() {
  const elRef = useRef(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    const portalRoot = document.getElementById("portal-root") || createRoot();
    portalRoot.appendChild(elRef.current);
    return () => portalRoot.removeChild(elRef.current);
  }, []);

  function createRoot() {
    const div = document.createElement("div");
    div.id = "portal-root";
    document.body.appendChild(div);
    return div;
  }

  return elRef.current;
}
