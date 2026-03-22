import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Wifi, Star, Heart, Users, Clock,
  ExternalLink, MessageCircle, ChevronRight,
  Plane, ArrowRight,
} from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = locale === "it";
  return {
    title: isIt
      ? "Hello Verona – Appartamento Turistico Verona | Vicino Fiera e Arena"
      : "Hello Verona – Tourist Apartment Verona | Near Arena & Trade Fair",
    description: isIt
      ? "Alloggio a Verona Borgo Roma. 3 km dall'Arena, 1 km dalla Fiera di Verona. WiFi gratuito, 2 camere matrimoniali, giardino privato. Prenota ora!"
      : "Accommodation in Verona Borgo Roma. 3 km from the Arena, 1 km from Verona Trade Fair. Free WiFi, 2 double bedrooms, private garden. Book now!",
    alternates: {
      canonical: `https://helloverona.net/${locale}`,
      languages: { it: "https://helloverona.net/it", en: "https://helloverona.net/en" },
    },
    openGraph: {
      title: isIt ? "Hello Verona – La tua casa a Verona" : "Hello Verona – Your home in Verona",
      description: isIt
        ? "Appartamento turistico accogliente a Verona, vicino alla Fiera e all'Arena."
        : "Welcoming tourist apartment in Verona, close to the Trade Fair and Arena.",
      url: `https://helloverona.net/${locale}`,
      images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Hello Verona Apartment" }],
    },
  };
}

const attractions = [
  { key: "arena",   label_it: "Arena di Verona",     label_en: "Verona Arena",      distance: "3 km",  icon: Star    },
  { key: "juliet",  label_it: "Casa di Giulietta",   label_en: "Juliet's House",    distance: "3 km",  icon: Heart   },
  { key: "piazza",  label_it: "Piazza Bra",           label_en: "Piazza Bra",        distance: "3 km",  icon: MapPin  },
  { key: "fiera",   label_it: "Fiera di Verona",      label_en: "Verona Trade Fair", distance: "1 km",  icon: Users   },
  { key: "garda",   label_it: "Lago di Garda",        label_en: "Lake Garda",        distance: "30 km", icon: MapPin  },
  { key: "airport", label_it: "Aeroporto VRN",        label_en: "VRN Airport",       distance: "12 km", icon: Plane   },
];

const features = [
  {
    icon: MapPin,
    title_it: "Posizione Strategica",
    title_en: "Strategic Location",
    desc_it:  "A 3 km dal centro, 1 km dalla Fiera e vicino a tutti i principali punti di interesse di Verona.",
    desc_en:  "3 km from the center, 1 km from the Trade Fair and close to all major Verona attractions.",
  },
  {
    icon: Wifi,
    title_it: "Comfort Completo",
    title_en: "Full Comfort",
    desc_it:  "WiFi gratuito, 2 camere matrimoniali, giardino privato e parcheggio.",
    desc_en:  "Free WiFi, 2 double bedrooms, private garden and parking.",
  },
  {
    icon: Heart,
    title_it: "Città dell'Amore",
    title_en: "City of Love",
    desc_it:  "Romeo e Giulietta, l'Arena, il vino Amarone. Verona è la meta romantica per eccellenza.",
    desc_en:  "Romeo and Juliet, the Arena, Amarone wine. Verona is the ultimate romantic destination.",
  },
  {
    icon: Star,
    title_it: "Ospiti Soddisfatti",
    title_en: "Happy Guests",
    desc_it:  "Valutazioni eccellenti su Booking.com. Ogni ospite è trattato come a casa propria.",
    desc_en:  "Excellent ratings on Booking.com. Every guest is treated like at home.",
  },
];

const testimonials = [
  { name: "Marco R.", origin_it: "Milano, Italia",     origin_en: "Milan, Italy",    rating: 5, text_it: "Appartamento perfetto, pulitissimo e ben attrezzato. Posizione ottima per la Fiera. Torneremo sicuramente!", text_en: "Perfect apartment, very clean and well equipped. Great location for the Trade Fair. We will definitely return!" },
  { name: "Sarah K.", origin_it: "Londra, UK",         origin_en: "London, UK",      rating: 5, text_it: "Lovely apartment, very clean and well equipped. Great location, close to the city center. Highly recommend!", text_en: "Lovely apartment, very clean and well equipped. Great location, close to the city center. Highly recommend!" },
  { name: "Thomas B.", origin_it: "Monaco, Germania",  origin_en: "Munich, Germany", rating: 5, text_it: "Wunderschöne Wohnung. Ideale Lage, sehr sauber. Absolute Empfehlung für jeden Verona-Besucher!", text_en: "Wonderful apartment. Ideal location, very clean. Absolute recommendation for every Verona visitor!" },
];

const faqPreview = [
  { q_it: "A che ora è il check-in e il check-out?",     q_en: "What are the check-in and check-out times?",     a_it: "Check-in dalle 15:00 alle 21:00. Check-out entro le 11:00. Orari flessibili su richiesta.", a_en: "Check-in from 3:00 PM to 9:00 PM. Check-out by 11:00 AM. Flexible hours on request." },
  { q_it: "C'è il parcheggio?",                           q_en: "Is parking available?",                          a_it: "Sì, parcheggio gratuito disponibile nelle vicinanze dell'appartamento.",             a_en: "Yes, free parking available near the apartment." },
  { q_it: "Quanto dista la Fiera di Verona?",             q_en: "How far is the Verona Trade Fair?",              a_it: "Solo 1 km — ci vogliono circa 3 minuti in auto!",                                   a_en: "Only 1 km — about 3 minutes by car!" },
];

const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Hello Verona",
  url: "https://helloverona.net",
  telephone: "+393936278663",
  email: "booking@helloverona.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Campagnol di Tombetta 65",
    addressLocality: "Verona",
    postalCode: "37134",
    addressCountry: "IT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.4178, longitude: 10.9998 },
  priceRange: "€€",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
  ],
  sameAs: ["https://www.booking.com/hotel/it/hello-verona.it.html"],
};

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t   = await getTranslations({ locale, namespace: "home" });
  const isIt = locale === "it";

  return (
    <>
      <JsonLd data={lodgingSchema} />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-bg">

        {/* Ambient blobs */}
        <div className="blob w-[600px] h-[600px] bg-brand-secondary/20 top-[-10%] right-[-5%] animate-pulse-soft" />
        <div className="blob w-[400px] h-[400px] bg-brand-accent/30 bottom-[10%] left-[-5%] animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

        <div className="container-wide relative z-10 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Label */}
            <div className="ornament mb-6 w-fit gap-3" data-reveal>
              <Heart size={12} className="text-brand-secondary fill-brand-secondary shrink-0" />
              <span className="section-label">{t("hero.badge")}</span>
            </div>

            {/* H1 */}
            <h1
              className="heading-display text-display-xl mb-6"
              data-reveal
              data-reveal-delay="100"
            >
              {isIt ? (
                <>Vivi Verona<br /><span className="text-brand-secondary italic">come un locale</span></>
              ) : (
                <>Experience Verona<br /><span className="text-brand-secondary italic">like a local</span></>
              )}
            </h1>

            <p className="body-text text-[1.05rem] max-w-md mb-10" data-reveal data-reveal-delay="200">
              {t("hero.subtitle")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10" data-reveal data-reveal-delay="300">
              <Link
                href={`/${locale}/apartments`}
                className="btn-primary text-[0.95rem]"
              >
                <ExternalLink size={16} />
                {t("hero.cta1")}
              </Link>
              <a
                href="https://wa.me/393936278663"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[0.95rem]"
              >
                <MessageCircle size={16} />
                {t("hero.cta2")}
              </a>
            </div>

            {/* Social proof stars */}
            <div className="flex items-center gap-3" data-reveal data-reveal-delay="400">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="font-sans text-sm text-brand-muted">
                {isIt ? "Eccellente su Booking.com" : "Excellent on Booking.com"}
              </span>
            </div>
          </div>

          {/* Right: Floating card */}
          <div className="hidden lg:flex justify-center items-center" data-reveal="scale" data-reveal-delay="200">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 bg-white rounded-3xl shadow-card-hover p-5 pb-12 border border-brand-border/60">
                {/* Image placeholder */}
                <div className="bg-gradient-warm rounded-2xl aspect-[4/3] mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="blob w-48 h-48 bg-brand-secondary/25 top-0 right-0" />
                  <div className="text-center relative z-10">
                    <Image src="/images/logo.webp" alt="Hello Verona" width={56} height={56} className="mx-auto rounded-xl mb-2 ring-2 ring-brand-border" />
                    <p className="font-display font-semibold text-brand-text">Hello Verona</p>
                    <p className="font-sans text-sm text-brand-muted">Borgo Roma, Verona</p>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { icon: Wifi,    label: "WiFi" },
                    { icon: MapPin,  label: isIt ? "3km centro" : "3km center" },
                    { icon: Star,    label: isIt ? "Top rated" : "Top rated" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-brand-bg rounded-xl p-2.5 text-center">
                      <Icon className="mx-auto text-brand-primary mb-0.5" size={15} />
                      <p className="font-sans text-[0.62rem] text-brand-muted leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Price indicator */}
                <div className="mt-3 pt-3 border-t border-brand-border/60 flex items-baseline gap-2">
                  <span className="font-sans text-xs text-brand-muted">{isIt ? "a partire da" : "from"}</span>
                  <span className="font-display font-semibold text-brand-gold text-xl">€65</span>
                  <span className="font-sans text-xs text-brand-subtle">{isIt ? "/ notte" : "/ night"}</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-white rounded-2xl px-4 py-2 shadow-glow animate-float">
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="fill-white" />
                  <span className="font-sans text-sm font-bold">9.2</span>
                </div>
                <p className="font-sans text-[0.6rem] text-white/80">{isIt ? "Booking.com" : "Booking.com"}</p>
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2.5 shadow-card border border-brand-border/50">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-brand-primary shrink-0" />
                  <div>
                    <p className="font-sans text-xs font-semibold text-brand-text leading-tight">Verona</p>
                    <p className="font-sans text-[0.62rem] text-brand-muted">Borgo Roma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
          <div className="w-px h-8 bg-brand-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14" data-reveal>
            <p className="section-label mb-3">{isIt ? "Perché Hello Verona" : "Why Hello Verona"}</p>
            <h2 className="heading-section">{t("features.title")}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title_it}
                className="card-hover p-7"
                data-reveal
                data-reveal-delay={String(i * 100)}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-secondary-light flex items-center justify-center mb-5">
                  <f.icon className="text-brand-primary" size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-text mb-2 leading-snug">
                  {isIt ? f.title_it : f.title_en}
                </h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">
                  {isIt ? f.desc_it : f.desc_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ATTRACTIONS — distances strip
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-bg-alt">
        <div className="container-wide">
          <div className="text-center mb-14" data-reveal>
            <p className="section-label mb-3">{isIt ? "A portata di mano" : "Within reach"}</p>
            <h2 className="heading-section">{t("attractions.title")}</h2>
            <p className="body-text mt-3 max-w-lg mx-auto">{t("attractions.subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {attractions.map(({ label_it, label_en, distance, icon: Icon }, i) => (
              <div
                key={label_it}
                className="bg-white rounded-2xl border border-brand-border/60 p-5 text-center hover:border-brand-secondary hover:shadow-card transition-all duration-300 cursor-default"
                data-reveal
                data-reveal-delay={String(i * 60)}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-secondary-light mx-auto mb-3 flex items-center justify-center">
                  <Icon className="text-brand-primary" size={17} />
                </div>
                <p className="font-sans text-xs font-semibold text-brand-text leading-tight mb-1">
                  {isIt ? label_it : label_en}
                </p>
                <p className="font-display font-semibold text-brand-gold text-sm">{distance}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-reveal>
            <Link href={`/${locale}/location`} className="btn-ghost inline-flex gap-1.5 text-sm font-medium">
              {isIt ? "Tutte le distanze" : "All distances"}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="text-center mb-14" data-reveal>
            <p className="section-label mb-3">{isIt ? "Recensioni" : "Reviews"}</p>
            <h2 className="heading-section">{t("testimonials.title")}</h2>
            <p className="body-text mt-3">{t("testimonials.subtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((r, i) => (
              <div
                key={r.name}
                className="card-hover p-7 flex flex-col"
                data-reveal
                data-reveal-delay={String(i * 120)}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote mark */}
                <div className="font-display text-5xl text-brand-accent leading-none mb-3 select-none">"</div>

                <p className="font-sans text-sm text-brand-muted leading-relaxed flex-1 mb-5 italic">
                  {isIt ? r.text_it : r.text_en}
                </p>

                <div className="pt-4 border-t border-brand-border/60">
                  <p className="font-sans text-sm font-semibold text-brand-text">{r.name}</p>
                  <p className="font-sans text-xs text-brand-subtle mt-0.5">{isIt ? r.origin_it : r.origin_en}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-reveal>
            <a
              href="https://www.booking.com/hotel/it/hello-verona.it.html#tab-reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <ExternalLink size={14} />
              {t("testimonials.viewAll")}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ PREVIEW
      ══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-bg-alt">
        <div className="container-narrow">
          <div className="text-center mb-12" data-reveal>
            <p className="section-label mb-3">FAQ</p>
            <h2 className="heading-section">{t("faqPreview.title")}</h2>
          </div>

          <div className="space-y-3">
            {faqPreview.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-brand-border/60 p-6 hover:border-brand-secondary/60 hover:shadow-card transition-all duration-300"
                data-reveal
                data-reveal-delay={String(i * 100)}
              >
                <h3 className="font-display text-[1.05rem] font-semibold text-brand-text mb-2">
                  {isIt ? item.q_it : item.q_en}
                </h3>
                <p className="font-sans text-sm text-brand-muted">{isIt ? item.a_it : item.a_en}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-reveal>
            <Link href={`/${locale}/faq`} className="btn-ghost inline-flex gap-1.5 text-sm">
              {t("faqPreview.viewAll")}
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA BAND
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-brand-text">
        {/* Decorative blobs */}
        <div className="blob w-[500px] h-[500px] bg-brand-secondary/10 -top-20 -left-20" />
        <div className="blob w-[400px] h-[400px] bg-brand-gold/8 bottom-0 right-0" />

        <div className="container-narrow relative z-10 text-center" data-reveal>
          <Heart size={28} className="text-brand-secondary fill-brand-secondary mx-auto mb-6 animate-pulse-soft" />
          <h2 className="font-display font-semibold text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            {t("cta.title")}
          </h2>
          <p className="font-sans text-white/60 text-lg max-w-md mx-auto mb-10">{t("cta.subtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/apartments`}
              className="btn-primary"
            >
              <ExternalLink size={16} />
              {t("cta.booking")}
            </Link>
            <a
              href="https://wa.me/393936278663"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={16} />
              {t("cta.whatsapp")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
