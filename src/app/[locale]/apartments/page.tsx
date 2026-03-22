import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Wifi, Wind, UtensilsCrossed, Car, Tv, WashingMachine, Thermometer, Bed, MessageCircle, Leaf } from "lucide-react";
import SmoobuWidget from "@/components/ui/SmoobuWidget";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = locale === "it";
  return {
    title: isIt ? "I Nostri Alloggi – Hello Verona | Prenota Online" : "Our Accommodation – Hello Verona | Book Online",
    description: isIt
      ? "Alloggio a Verona Borgo Roma: 2 camere matrimoniali, giardino privato, WiFi, parcheggio. A 1 km dalla Fiera. Prenota direttamente!"
      : "Accommodation in Verona Borgo Roma: 2 double bedrooms, private garden, WiFi, parking. 1 km from the Trade Fair. Book directly!",
    alternates: {
      canonical: `https://helloverona.net/${locale}/apartments`,
      languages: { it: "https://helloverona.net/it/apartments", en: "https://helloverona.net/en/apartments" },
    },
  };
}

const amenities = [
  { key: "wifi",     icon: Wifi,            color: "bg-sky-50 text-sky-600" },
  { key: "ac",       icon: Wind,            color: "bg-blue-50 text-blue-600" },
  { key: "kitchen",  icon: UtensilsCrossed, color: "bg-orange-50 text-orange-600" },
  { key: "parking",  icon: Car,             color: "bg-emerald-50 text-emerald-600" },
  { key: "garden",   icon: Leaf,            color: "bg-green-50 text-green-600" },
  { key: "tv",       icon: Tv,              color: "bg-purple-50 text-purple-600" },
  { key: "washing",  icon: WashingMachine,  color: "bg-cyan-50 text-cyan-600" },
  { key: "heating",  icon: Thermometer,     color: "bg-red-50 text-red-600" },
  { key: "towels",   icon: Bed,             color: "bg-amber-50 text-amber-600" },
];

export default async function ApartmentsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "apartments" });
  const isIt = locale === "it";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: "Hello Verona Apartment",
    description: isIt
      ? "Alloggio turistico a Verona Borgo Roma: 2 camere matrimoniali, giardino privato, WiFi, cucina attrezzata e parcheggio"
      : "Tourist accommodation in Verona Borgo Roma: 2 double bedrooms, private garden, WiFi, equipped kitchen and parking",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Campagnol di Tombetta 65",
      addressLocality: "Verona",
      postalCode: "37134",
      addressCountry: "IT",
    },
    numberOfRooms: 2,
    petsAllowed: true,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Garden", value: true },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-warm">
        <div className="blob w-96 h-96 bg-brand-secondary/15 -top-10 -right-10" />
        <div className="container-wide relative z-10">
          <div className="mb-6" data-reveal>
            <Breadcrumb locale={locale} items={[{ label: isIt ? "Alloggi" : "Apartments" }]} />
          </div>
          <div className="text-center" data-reveal data-reveal-delay="100">
            <p className="section-label mb-3">{isIt ? "Scopri gli spazi" : "Explore the spaces"}</p>
            <h1 className="heading-section">{t("hero.title")}</h1>
            <p className="body-text mt-4 max-w-xl mx-auto">{t("hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Direct booking widget — PROMINENTLY AT TOP */}
      <section className="section-pad bg-white">
        <div className="container-narrow">
          <div className="text-center mb-10" data-reveal>
            <p className="section-label mb-3">{isIt ? "Prenotazione Diretta" : "Direct Booking"}</p>
            <h2 className="heading-section">{t("booking.title")}</h2>
            <p className="body-text mt-3">{t("booking.subtitle")}</p>
          </div>
          <div data-reveal data-reveal-delay="100">
            <SmoobuWidget locale={locale} />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-brand-bg-alt">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-4" data-reveal>
            {/* Main image */}
            <div className="md:col-span-2 bg-gradient-warm rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              <div className="blob w-64 h-64 bg-brand-secondary/20 top-0 right-0" />
              <div className="text-center relative z-10">
                <Bed className="mx-auto text-brand-primary mb-3" size={44} />
                <p className="font-display text-xl font-semibold text-brand-text">
                  {isIt ? "2 Camere Matrimoniali" : "2 Double Bedrooms"}
                </p>
                <p className="font-sans text-sm text-brand-muted mt-1">
                  {isIt ? "Confortevoli e accoglienti" : "Comfortable & cozy"}
                </p>
              </div>
            </div>
            {/* Side images */}
            <div className="space-y-4">
              {[
                { icon: UtensilsCrossed, label_it: "Cucina attrezzata",  label_en: "Equipped kitchen" },
                { icon: Leaf,            label_it: "Giardino privato",    label_en: "Private garden" },
              ].map(({ icon: Icon, label_it, label_en }) => (
                <div key={label_it} className="bg-brand-bg rounded-3xl aspect-video flex items-center justify-center relative overflow-hidden hover:shadow-card transition-all duration-300">
                  <Icon className="text-brand-primary" size={32} />
                  <p className="absolute bottom-4 left-0 right-0 text-center font-display text-sm font-semibold text-brand-text">
                    {isIt ? label_it : label_en}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center font-sans text-xs text-brand-subtle mt-4 italic">
            {isIt ? "* Foto reali presto disponibili" : "* Real photos coming soon"}
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-12" data-reveal>
            <p className="section-label mb-3">{isIt ? "Tutto incluso" : "Everything included"}</p>
            <h2 className="heading-section">{t("amenities.title")}</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {amenities.map(({ key, icon: Icon, color }, i) => (
              <div
                key={key}
                className="card-hover p-6 text-center"
                data-reveal
                data-reveal-delay={String(i * 50)}
              >
                <div className={`w-12 h-12 rounded-2xl ${color} mx-auto mb-4 flex items-center justify-center`}>
                  <Icon size={22} />
                </div>
                <p className="font-sans text-sm font-semibold text-brand-text">
                  {t(`amenities.${key}` as "amenities.wifi")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-text">
        <div className="container-narrow text-center" data-reveal>
          <h2 className="font-display text-2xl font-semibold text-white mb-4">
            {isIt ? "Hai domande sui nostri alloggi?" : "Questions about our accommodation?"}
          </h2>
          <p className="font-sans text-white/60 mb-8">
            {isIt ? "Scrivici su WhatsApp o via email — rispondiamo in poche ore." : "Message us on WhatsApp or email — we reply within hours."}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/393936278663" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} />{isIt ? "WhatsApp" : "WhatsApp"}
            </a>
            <a href="mailto:booking@helloverona.net" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-brand-text">
              <MessageCircle size={16} />Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
