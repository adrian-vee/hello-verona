"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalyticsConsent() {
  useEffect(() => {
    // If user already accepted in a previous visit, upgrade consent immediately
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted") {
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
    }

    const handleConsentUpdate = (e: CustomEvent<{ status: string }>) => {
      window.gtag?.("consent", "update", {
        analytics_storage: e.detail.status === "accepted" ? "granted" : "denied",
      });
    };

    window.addEventListener("cookie-consent-updated", handleConsentUpdate as EventListener);
    return () =>
      window.removeEventListener("cookie-consent-updated", handleConsentUpdate as EventListener);
  }, []);

  return null;
}
