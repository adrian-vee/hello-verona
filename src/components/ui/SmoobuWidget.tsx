"use client";
import { useEffect } from "react";

interface SmoobuWidgetProps {
  locale?: string;
}

export default function SmoobuWidget({ locale = "it" }: SmoobuWidgetProps) {
  useEffect(() => {
    if (document.getElementById("smoobu-script")) return;

    const script = document.createElement("script");
    script.id = "smoobu-script";
    script.type = "text/javascript";
    script.src = "https://login.smoobu.com/js/Settings/BookingToolIframe.js";
    script.onload = () => {
      const smoobu = (window as Window & { BookingToolIframe?: { initialize: (c: object) => void } }).BookingToolIframe;
      smoobu?.initialize({
        url: "https://login.smoobu.com/it/booking-tool/iframe/1431931",
        baseUrl: "https://login.smoobu.com",
        target: "#apartmentIframeAll",
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="apartmentIframeAll" className="w-full min-h-[500px]" />;
}
