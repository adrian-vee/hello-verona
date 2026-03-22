"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";

const faqs = [
  { q_it: "A che ora è il check-in e check-out?",               q_en: "What are the check-in and check-out times?",        a_it: "Il check-in è dalle 15:00 alle 21:00. Il check-out deve avvenire entro le 11:00. Per orari diversi contattateci: siamo flessibili quando possibile.", a_en: "Check-in is from 3:00 PM to 9:00 PM. Check-out by 11:00 AM. For different hours, contact us — we are flexible when possible.", cat: "checkin" },
  { q_it: "C'è il parcheggio disponibile?",                      q_en: "Is parking available?",                             a_it: "Sì! Parcheggio gratuito disponibile nelle vicinanze dell'appartamento. Non è necessario prenotarlo.", a_en: "Yes! Free parking is available near the apartment. No advance reservation needed.", cat: "facility" },
  { q_it: "Come si raggiunge dall'aeroporto di Verona?",         q_en: "How to get here from Verona Airport?",              a_it: "L'aeroporto VRN dista circa 12 km. Taxi ~20 minuti (€25-30), oppure autobus 199 fino alla stazione Porta Nuova (~40 min) poi taxi o AMT.", a_en: "VRN Airport is about 12 km away. Taxi ~20 minutes (€25-30), or bus 199 to Porta Nuova station (~40 min) then taxi or AMT.", cat: "transport" },
  { q_it: "Gli animali domestici sono ammessi?",                 q_en: "Are pets allowed?",                                 a_it: "Animali di piccola taglia accettati su richiesta. Segnalarlo al momento della prenotazione.", a_en: "Small pets accepted on request. Please let us know at the time of booking.", cat: "policy" },
  { q_it: "C'è il WiFi?",                                        q_en: "Is there WiFi?",                                    a_it: "Sì, WiFi gratuito e veloce in tutto l'appartamento. Adatto anche per lo smart working.", a_en: "Yes, free fast WiFi throughout the apartment. Suitable for remote working too.", cat: "facility" },
  { q_it: "La cucina è attrezzata?",                             q_en: "Is the kitchen fully equipped?",                    a_it: "Sì! Fornelli, forno, microonde, frigorifero, lavatrice, stoviglie e utensili. Piena autonomia culinaria.", a_en: "Yes! Stove, oven, microwave, fridge, washing machine, dishes and utensils. Full cooking independence.", cat: "facility" },
  { q_it: "Qual è la politica di cancellazione?",                q_en: "What is the cancellation policy?",                 a_it: "La politica di cancellazione viene comunicata al momento della prenotazione diretta. Contattateci per i dettagli.", a_en: "The cancellation policy is communicated at the time of direct booking. Contact us for details.", cat: "policy" },
  { q_it: "Quanto dista il centro di Verona?",                   q_en: "How far is Verona city center?",                    a_it: "Il centro (Piazza Bra) dista circa 3 km: 7 minuti in auto o 15-20 minuti in bicicletta (bici gratuite incluse!).", a_en: "The center (Piazza Bra) is about 3 km: 7 minutes by car or 15-20 minutes by bicycle (free bikes included!).", cat: "location" },
  { q_it: "Quanto dista la Fiera di Verona?",                    q_en: "How far is the Verona Trade Fair?",                 a_it: "La Fiera (Veronafiere) è a soli 1 km — circa 3 minuti in auto o 5 minuti in bicicletta! Ideale per Vinitaly, Fieracavalli, Motor Bike Expo.", a_en: "The Trade Fair (Veronafiere) is only 1 km away — about 3 minutes by car or 5 minutes by bicycle! Ideal for Vinitaly, Fieracavalli, Motor Bike Expo.", cat: "location" },
  { q_it: "C'è l'aria condizionata?",                            q_en: "Is there air conditioning?",                        a_it: "Sì, aria condizionata in tutte le stanze. Il riscaldamento è anch'esso incluso.", a_en: "Yes, air conditioning in all rooms. Heating is also included.", cat: "facility" },
  { q_it: "Come funziona il check-in?",                          q_en: "How does check-in work?",                           a_it: "Il check-in è assistito: vi accoglieremo personalmente per consegnarvi le chiavi. Per check-in tardivi forniamo istruzioni per l'accesso autonomo.", a_en: "Check-in is assisted: we will personally welcome you to hand over the keys. For late arrivals we provide self-access instructions.", cat: "checkin" },
  { q_it: "È possibile richiedere un transfer dall'aeroporto?",  q_en: "Is airport transfer available?",                    a_it: "Non offriamo direttamente il servizio, ma possiamo mettere in contatto con taxi di fiducia. Contattateci.", a_en: "We don't offer the service directly, but can recommend reliable taxis. Contact us.", cat: "transport" },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${open ? "border-brand-secondary/60 shadow-card" : "border-brand-border/60 hover:border-brand-border-dark/40"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-display text-[1.05rem] font-semibold text-brand-text leading-snug">{q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-brand-secondary text-white rotate-180" : "bg-brand-bg text-brand-muted"}`}>
          <ChevronDown size={15} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}>
        <div className="px-6 pb-5">
          <div className="h-px bg-brand-border/60 mb-4" />
          <p className="font-sans text-sm text-brand-muted leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage({ params: { locale } }: { params: { locale: string } }) {
  const isIt = locale === "it";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: isIt ? f.q_it : f.q_en,
      acceptedAnswer: { "@type": "Answer", text: isIt ? f.a_it : f.a_en },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-warm">
        <div className="blob w-72 h-72 bg-brand-secondary/15 top-0 right-0" />
        <div className="container-wide relative z-10">
          <div className="mb-6" data-reveal>
            <Breadcrumb locale={locale} items={[{ label: "FAQ" }]} />
          </div>
          <div className="text-center" data-reveal data-reveal-delay="100">
            <p className="section-label mb-3">{isIt ? "Hai domande?" : "Have questions?"}</p>
            <h1 className="heading-section">{isIt ? "Domande Frequenti" : "Frequently Asked Questions"}</h1>
            <p className="body-text mt-4 max-w-xl mx-auto">
              {isIt ? "Tutto quello che vuoi sapere prima di prenotare" : "Everything you want to know before booking"}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="section-pad bg-white">
        <div className="container-narrow space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} data-reveal data-reveal-delay={String((i % 4) * 60)}>
              <FaqItem q={isIt ? faq.q_it : faq.q_en} a={isIt ? faq.a_it : faq.a_en} />
            </div>
          ))}
        </div>

        {/* Still need help */}
        <div className="container-narrow mt-16" data-reveal>
          <div className="bg-brand-bg-alt rounded-3xl p-8 md:p-10 text-center border border-brand-border/60">
            <p className="section-label mb-3">{isIt ? "Ancora dubbi?" : "Still unsure?"}</p>
            <h3 className="font-display text-2xl font-semibold text-brand-text mb-3">
              {isIt ? "Scrivici direttamente" : "Write to us directly"}
            </h3>
            <p className="body-text mb-8 max-w-sm mx-auto">
              {isIt ? "Siamo disponibili ogni giorno dalle 9:00 alle 21:00" : "We're available every day from 9:00 AM to 9:00 PM"}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://wa.me/393936278663" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={16} />WhatsApp
              </a>
              <Link href={`/${locale}/contact`} className="btn-secondary">
                {isIt ? "Modulo contatto" : "Contact form"}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
