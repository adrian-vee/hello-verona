import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { MapPin, Car, Train, Plane, Bus, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";
import Link from "next/link";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = locale === "it";
  return {
    title: isIt ? "Posizione e Come Arrivare – Hello Verona Borgo Roma" : "Location & How to Reach Us – Hello Verona",
    description: isIt
      ? "Hello Verona si trova in Borgo Roma, a 3 km dall'Arena e a 1 km dalla Fiera. Come raggiungerci in auto, treno, autobus o dall'aeroporto."
      : "Hello Verona is located in Borgo Roma, 3 km from the Arena and 1 km from the Trade Fair. How to reach us by car, train, bus or from the airport.",
    alternates: {
      canonical: `https://helloverona.net/${locale}/location`,
      languages: { it: "https://helloverona.net/it/location", en: "https://helloverona.net/en/location" },
    },
  };
}

const distances = [
  { name_it: "Arena di Verona",             name_en: "Verona Arena",             distance: "3 km",  time_it: "7 min in auto",   time_en: "7 min by car",   type: "attraction" },
  { name_it: "Casa di Giulietta",           name_en: "Juliet's House",           distance: "3 km",  time_it: "8 min in auto",   time_en: "8 min by car",   type: "attraction" },
  { name_it: "Piazza Bra",                  name_en: "Piazza Bra",               distance: "3 km",  time_it: "7 min in auto",   time_en: "7 min by car",   type: "attraction" },
  { name_it: "Piazza delle Erbe",           name_en: "Piazza delle Erbe",        distance: "3.5 km",time_it: "9 min in auto",   time_en: "9 min by car",   type: "attraction" },
  { name_it: "Castelvecchio",               name_en: "Castelvecchio",            distance: "3 km",  time_it: "8 min in auto",   time_en: "8 min by car",   type: "attraction" },
  { name_it: "Torre dei Lamberti",          name_en: "Torre dei Lamberti",       distance: "3.5 km",time_it: "9 min in auto",   time_en: "9 min by car",   type: "attraction" },
  { name_it: "Fiera di Verona",             name_en: "Verona Trade Fair",        distance: "1 km",  time_it: "3 min in auto",   time_en: "3 min by car",   type: "business" },
  { name_it: "Fermata Bus",                 name_en: "Bus Stop",                 distance: "50 m",  time_it: "1 min a piedi",   time_en: "1 min walk",     type: "transport" },
  { name_it: "Aeroporto VRN",               name_en: "VRN Airport",              distance: "12 km", time_it: "20 min in auto",  time_en: "20 min by car",  type: "transport" },
  { name_it: "Stazione Porta Nuova",        name_en: "Porta Nuova Station",      distance: "6 km",  time_it: "12 min in auto",  time_en: "12 min by car",  type: "transport" },
  { name_it: "Lago di Garda",               name_en: "Lake Garda",               distance: "30 km", time_it: "35 min in auto",  time_en: "35 min by car",  type: "day-trip" },
  { name_it: "Valpolicella",                name_en: "Valpolicella",             distance: "20 km", time_it: "25 min in auto",  time_en: "25 min by car",  type: "day-trip" },
];

const typeConfig: Record<string, { label_it: string; label_en: string; dot: string }> = {
  attraction: { label_it: "Attrazione",  label_en: "Attraction",  dot: "bg-brand-secondary" },
  business:   { label_it: "Business",    label_en: "Business",    dot: "bg-blue-400" },
  transport:  { label_it: "Trasporti",   label_en: "Transport",   dot: "bg-emerald-400" },
  "day-trip": { label_it: "Gita",        label_en: "Day Trip",    dot: "bg-purple-400" },
};

const transportModes = [
  {
    icon: Car,
    key: "car",
    title_it: "In Auto",
    title_en: "By Car",
    desc_it: "Autostrada A4 (Milano-Venezia), uscita Verona Sud. Circa 10 minuti dall'uscita autostradale. Parcheggio gratuito disponibile.",
    desc_en: "Highway A4 (Milan-Venice), exit Verona South. About 10 minutes from the highway exit. Free parking available.",
  },
  {
    icon: Train,
    key: "train",
    title_it: "In Treno",
    title_en: "By Train",
    desc_it: "Stazione Porta Nuova a 6 km. Autobus AMT o taxi fino all'appartamento in 15-20 minuti.",
    desc_en: "Porta Nuova station 6 km away. AMT bus or taxi to the apartment in 15-20 minutes.",
  },
  {
    icon: Plane,
    key: "airport",
    title_it: "Dall'Aeroporto",
    title_en: "From the Airport",
    desc_it: "Aeroporto Catullo (VRN) a 12 km. Taxi ~20 min (€25-30), autobus 199 ~40 min fino in stazione.",
    desc_en: "Catullo Airport (VRN) 12 km away. Taxi ~20 min (€25-30), bus 199 ~40 min to the station.",
  },
  {
    icon: Bus,
    key: "bus",
    title_it: "In Autobus",
    title_en: "By Bus",
    desc_it: "Linee AMT Verona con fermate vicine. Ottimi collegamenti con il centro e la stazione.",
    desc_en: "AMT Verona lines with nearby stops. Excellent connections to the center and station.",
  },
];

export default async function LocationPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "location" });
  const isIt = locale === "it";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hello Verona",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Campagnol di Tombetta 65",
      addressLocality: "Verona",
      postalCode: "37134",
      addressCountry: "IT",
    },
    geo: { "@type": "GeoCoordinates", latitude: 45.4178, longitude: 10.9998 },
  };

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-warm">
        <div className="blob w-80 h-80 bg-brand-secondary/15 top-0 right-0" />
        <div className="container-wide relative z-10">
          <div className="mb-6" data-reveal>
            <Breadcrumb locale={locale} items={[{ label: isIt ? "Posizione" : "Location" }]} />
          </div>
          <div className="text-center" data-reveal data-reveal-delay="100">
            <p className="section-label mb-3">{isIt ? "Dove siamo" : "Where we are"}</p>
            <h1 className="heading-section">{t("hero.title")}</h1>
            <p className="body-text mt-4 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Distance grid */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-12" data-reveal>
            <p className="section-label mb-3">{isIt ? "Distanze" : "Distances"}</p>
            <h2 className="heading-section">{t("distances.title")}</h2>
            <p className="body-text mt-3 max-w-xl mx-auto">{t("distances.subtitle")}</p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 justify-center mb-8" data-reveal>
            {Object.entries(typeConfig).map(([type, cfg]) => (
              <div key={type} className="flex items-center gap-1.5 font-sans text-xs text-brand-muted bg-brand-bg rounded-full px-3 py-1.5">
                <div className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                {isIt ? cfg.label_it : cfg.label_en}
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {distances.map((d, i) => (
              <div
                key={d.name_it}
                className="card-hover p-5 flex items-start gap-4"
                data-reveal
                data-reveal-delay={String((i % 3) * 80)}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-secondary-light flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-primary" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <p className="font-display text-[1rem] font-semibold text-brand-text leading-snug truncate">
                      {isIt ? d.name_it : d.name_en}
                    </p>
                    <div className={`w-2 h-2 rounded-full shrink-0 ${typeConfig[d.type].dot}`} />
                  </div>
                  <p className="font-display font-semibold text-brand-gold">{d.distance}</p>
                  <p className="font-sans text-xs text-brand-subtle">{isIt ? d.time_it : d.time_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to reach */}
      <section className="section-pad bg-brand-bg-alt">
        <div className="container-wide">
          <div className="text-center mb-12" data-reveal>
            <p className="section-label mb-3">{isIt ? "Indicazioni" : "Directions"}</p>
            <h2 className="heading-section">{t("howToReach.title")}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {transportModes.map(({ icon: Icon, key, title_it, title_en, desc_it, desc_en }, i) => (
              <div
                key={key}
                className="card-hover p-6"
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-secondary-light flex items-center justify-center mb-5">
                  <Icon className="text-brand-primary" size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-text mb-2">
                  {isIt ? title_it : title_en}
                </h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">
                  {isIt ? desc_it : desc_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-8" data-reveal>
            <p className="section-label mb-3">{isIt ? "Trovaci" : "Find us"}</p>
            <h2 className="heading-section">{t("map.title")}</h2>
            <p className="body-text mt-2 flex items-center gap-2 justify-center">
              <MapPin size={16} className="text-brand-primary" />
              {t("map.address")}
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card-hover border border-brand-border/50 h-[420px]" data-reveal data-reveal-delay="100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.123456789!2d10.9998!3d45.4178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f54567890ab%3A0x1234567890abcdef!2sVia%20Campagnol%20di%20Tombetta%2065%2C%2037134%20Verona%20VR!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Hello Verona – Mappa"
            />
          </div>

          <div className="text-center mt-6" data-reveal>
            <a
              href="https://maps.google.com/?q=Via+Campagnol+di+Tombetta+65,+37134+Verona"
              target="_blank" rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <MapPin size={15} />
              {isIt ? "Apri in Google Maps" : "Open in Google Maps"}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
