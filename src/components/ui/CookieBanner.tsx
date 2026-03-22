"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function dispatchConsentUpdate(status: "accepted" | "rejected") {
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", { detail: { status } }),
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "it";
  const isIt = locale === "it";

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    dispatchConsentUpdate("accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    dispatchConsentUpdate("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-text text-white p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-white/90">
          {isIt
            ? <>Utilizziamo i cookie per migliorare la tua esperienza. Consulta la nostra{" "}<Link href={`/${locale}/cookie-policy`} className="underline hover:text-brand-secondary">Cookie Policy</Link>.</>
            : <>We use cookies to improve your experience. See our{" "}<Link href={`/${locale}/cookie-policy`} className="underline hover:text-brand-secondary">Cookie Policy</Link>.</>
          }
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={reject} className="text-sm text-white/70 hover:text-white underline cursor-pointer">
            {isIt ? "Rifiuta" : "Decline"}
          </button>
          <button
            onClick={accept}
            className="bg-brand-primary hover:bg-brand-primary-dark text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            {isIt ? "Accetta" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
