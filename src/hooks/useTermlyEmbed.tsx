"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    Termly?: { loadEmbeds?: () => void };
  }
}

export function useTermlyEmbed() {
  const pathname = usePathname();

  useEffect(() => {
    const scriptId = "termly-jssdk";
    const embedSelector = "[name='termly-embed']";

    // Remove all previously injected iframes by Termly
    document
      .querySelectorAll("iframe[src*='termly.io'], script[src*='termly.io']")
      .forEach((el) => el.remove());

    // Clear old embed content
    const embedContainer = document.querySelector(embedSelector);
    if (embedContainer) embedContainer.innerHTML = "";

    // Remove old script (Termly caches internally otherwise)
    const oldScript = document.getElementById(scriptId);
    if (oldScript) oldScript.remove();

    const ensureLoaded = () => {
      if (window.Termly && typeof window.Termly.loadEmbeds === "function") {
        window.Termly.loadEmbeds();
        return true;
      }
      return false;
    };

    // Create fresh script every time route changes
    const js = document.createElement("script");
    js.id = scriptId;
    js.src = "https://app.termly.io/embed-policy.min.js";
    js.async = true;
    js.onload = () => {
      let tries = 0;
      const interval = setInterval(() => {
        if (ensureLoaded() || tries > 10) clearInterval(interval);
        tries++;
      }, 500);
    };
    document.body.appendChild(js);
  }, [pathname]);
}
