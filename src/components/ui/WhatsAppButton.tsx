"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/393936278663?text=Ciao!%20Vorrei%20informazioni%20su%20Hello%20Verona"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-6 right-6 z-50 group
                 flex items-center gap-2
                 bg-[#25D366] hover:bg-[#128C7E]
                 text-white rounded-full
                 pl-4 pr-5 py-3
                 shadow-lg hover:shadow-xl
                 transition-all duration-300 ease-spring
                 hover:scale-105
                 cursor-pointer"
    >
      <MessageCircle size={20} strokeWidth={2.2} />
      <span className="font-sans text-sm font-semibold hidden sm:block">WhatsApp</span>
    </a>
  );
}
