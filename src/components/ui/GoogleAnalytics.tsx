"use client";
import Script from "next/script";
import { useEffect } from "react";

const GA_ID = "G-554592L7XW";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args) {
      window.dataLayer.push(args);
    };

    // Consent Mode v2 — default to denied until user accepts (GDPR)
    const consent = typeof localStorage !== "undefined"
      ? localStorage.getItem("cookie-consent")
      : null;
    const analyticsGranted = consent === "accepted" ? "granted" : "denied";

    window.gtag("consent", "default", {
      analytics_storage: analyticsGranted,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: true });

    // Listen for real-time consent updates from the cookie banner
    const handleConsentUpdate = (e: CustomEvent<{ status: string }>) => {
      if (e.detail.status === "accepted") {
        window.gtag("consent", "update", { analytics_storage: "granted" });
      } else {
        window.gtag("consent", "update", { analytics_storage: "denied" });
      }
    };

    window.addEventListener(
      "cookie-consent-updated",
      handleConsentUpdate as EventListener,
    );
    return () =>
      window.removeEventListener(
        "cookie-consent-updated",
        handleConsentUpdate as EventListener,
      );
  }, []);

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
  );
}
