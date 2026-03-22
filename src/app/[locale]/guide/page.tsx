import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { MapPin, Utensils, Calendar, Navigation, ChevronRight, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = locale === "it";
  return {
    title: isIt
      ? "Guida di Verona – Cosa vedere, Dove mangiare, Eventi | Hello Verona"
      : "Verona Guide – What to See, Where to Eat, Events | Hello Verona",
    description: isIt
      ? "Guida completa di Verona: cosa vedere (Arena, Casa di Giulietta), dove mangiare, eventi (Opera, Vinitaly), gite al Lago di Garda."
      : "Complete Verona guide: what to see (Arena, Juliet's House), where to eat, events (Opera, Vinitaly), day trips to Lake Garda.",
    alternates: {
      canonical: `https://helloverona.net/${locale}/guide`,
      languages: { it: "https://helloverona.net/it/guide", en: "https://helloverona.net/en/guide" },
    },
  };
}

const sights = [
  { name_it: "Arena di Verona",              name_en: "Verona Arena",              desc_it: "L'anfiteatro romano del I sec. d.C., tra i meglio conservati al mondo. Ospita la celebre stagione lirica estiva e concerti internazionali.", desc_en: "The 1st century AD Roman amphitheater, one of the best preserved in the world. Hosts the famous summer opera season and international concerts." },
  { name_it: "Casa di Giulietta & Balcone",  name_en: "Juliet's House & Balcony",  desc_it: "Il leggendario balcone di Giulietta in Via Cappello 23. Visita il museo e lascia il tuo messaggio d'amore sul famoso muro.", desc_en: "The legendary balcony of Juliet in Via Cappello 23. Visit the museum and leave your love message on the famous wall." },
  { name_it: "Piazza Bra & Piazza delle Erbe", name_en: "Piazza Bra & Piazza delle Erbe", desc_it: "Le due piazze simbolo di Verona: Piazza Bra con l'Arena e Piazza delle Erbe, cuore medievale della città.", desc_en: "Verona's two iconic squares: Piazza Bra with the Arena and Piazza delle Erbe, the medieval heart of the city." },
  { name_it: "Castelvecchio & Ponte Scaligero", name_en: "Castelvecchio & Ponte Scaligero", desc_it: "Il castello medievale degli Scaligeri sull'Adige, oggi importante museo d'arte. Il ponte è uno dei simboli di Verona.", desc_en: "The Scaligeri medieval castle on the Adige river, now an important art museum. The bridge is one of Verona's symbols." },
  { name_it: "Torre dei Lamberti",            name_en: "Torre dei Lamberti",         desc_it: "La torre medievale di 84 metri in Piazza delle Erbe. Salite in cima per una vista panoramica mozzafiato su Verona.", desc_en: "The 84-meter medieval tower in Piazza delle Erbe. Climb to the top for a breathtaking panoramic view of Verona." },
  { name_it: "Giardino Giusti",              name_en: "Giardino Giusti",            desc_it: "Uno dei più bei giardini rinascimentali d'Italia, con cipressi centenari e una meravigliosa vista sulla città.", desc_en: "One of Italy's most beautiful Renaissance gardens, with century-old cypress trees and a wonderful view of the city." },
];

const restaurants = [
  { name: "Osteria al Duca",       type_it: "Cucina tipica", type_en: "Traditional", desc_it: "Nel cuore del centro storico, cucina veronese tradizionale. Celebre per il risotto all'Amarone.", desc_en: "In the historic center, traditional Veronese cuisine. Famous for the Amarone risotto." },
  { name: "Trattoria al Pompiere", type_it: "Trattoria",     type_en: "Trattoria",   desc_it: "Storica trattoria attiva dal 1910. Famosa per le tagliatelle fatte in casa e il carrello dei bolliti.", desc_en: "Historic trattoria since 1910. Famous for homemade tagliatelle and the boiled meat trolley." },
  { name: "Ristorante Il Desco",   type_it: "Gourmet",       type_en: "Gourmet",     desc_it: "Cucina gourmet con prodotti locali d'eccellenza. Perfetto per una serata speciale a Verona.", desc_en: "Gourmet cuisine with excellent local products. Perfect for a special evening in Verona." },
  { name: "Osteria Sottoriva",     type_it: "Osteria",       type_en: "Osteria",     desc_it: "Sotto le storiche arcate di Via Sottoriva. Cicchetti veneti e vini locali. Ideale per l'aperitivo.", desc_en: "Under the historic arches of Via Sottoriva. Venetian cicchetti and local wines. Ideal for aperitivo." },
];

const events = [
  { name_it: "Opera all'Arena di Verona", name_en: "Opera at the Arena",     period: "Giugno – Agosto / June – August",     desc_it: "La stagione lirica estiva è uno degli spettacoli più suggestivi al mondo. Aida, Carmen, Traviata sotto le stelle.", desc_en: "The summer opera season is one of the most evocative shows in the world. Aida, Carmen, Traviata under the stars." },
  { name_it: "Vinitaly",                  name_en: "Vinitaly",               period: "Aprile / April",                      desc_it: "Il salone internazionale del vino alla Fiera di Verona, a soli 2 km da Hello Verona.", desc_en: "The international wine trade show at Verona Trade Fair, just 2 km from Hello Verona." },
  { name_it: "Fieracavalli",             name_en: "Fieracavalli",            period: "Novembre / November",                 desc_it: "La fiera internazionale del cavallo, evento unico che attira appassionati da tutto il mondo.", desc_en: "The international horse fair, a unique event attracting enthusiasts from around the world." },
  { name_it: "Natale a Verona",          name_en: "Christmas in Verona",     period: "Dicembre / December",                 desc_it: "Mercatini di Natale nel centro storico, luci e presepi artistici. Verona d'inverno è magica!", desc_en: "Christmas markets in the historic center, lights and artistic nativity scenes. Verona in winter is magical!" },
];

const dayTrips = [
  { name_it: "Lago di Garda",  name_en: "Lake Garda",  dist: "30 km", desc_it: "Il lago più grande d'Italia: Sirmione, Lazise, Bardolino, Malcesine. Gardaland è qui!", desc_en: "Italy's largest lake: Sirmione, Lazise, Bardolino, Malcesine. Gardaland is here!" },
  { name_it: "Venezia",        name_en: "Venice",       dist: "115 km",desc_it: "La Serenissima in 70 minuti di treno dalla stazione di Verona Porta Nuova.", desc_en: "The Serenissima in 70 minutes by train from Verona Porta Nuova station." },
  { name_it: "Valpolicella",   name_en: "Valpolicella", dist: "20 km", desc_it: "La patria dell'Amarone e del Valpolicella DOC. Cantine, colline verdi e borghi medievali.", desc_en: "The homeland of Amarone and Valpolicella DOC. Wineries, green hills and medieval villages." },
  { name_it: "Mantova",        name_en: "Mantua",       dist: "40 km", desc_it: "Città Patrimonio UNESCO, gioiello del Rinascimento con Palazzo Ducale e Palazzo Te.", desc_en: "UNESCO World Heritage city, Renaissance jewel with Palazzo Ducale and Palazzo Te." },
];

const sections = [
  { id: "cosa-vedere",    icon: MapPin,    label_it: "Cosa Vedere",     label_en: "What to See",    color: "bg-amber-50 text-amber-700" },
  { id: "dove-mangiare", icon: Utensils,  label_it: "Dove Mangiare",   label_en: "Where to Eat",   color: "bg-orange-50 text-orange-700" },
  { id: "eventi",        icon: Calendar,  label_it: "Eventi",          label_en: "Events",          color: "bg-purple-50 text-purple-700" },
  { id: "gite",          icon: Navigation,label_it: "Gite da Verona",  label_en: "Day Trips",       color: "bg-emerald-50 text-emerald-700" },
];

export default async function GuidePage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "guide" });
  const isIt = locale === "it";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-warm">
        <div className="blob w-96 h-96 bg-brand-secondary/15 top-0 right-0" />
        <div className="container-wide relative z-10">
          <div className="mb-6" data-reveal>
            <Breadcrumb locale={locale} items={[{ label: isIt ? "Guida Verona" : "Verona Guide" }]} />
          </div>
          <div className="text-center" data-reveal data-reveal-delay="100">
            <p className="section-label mb-3">{isIt ? "Scopri la città" : "Discover the city"}</p>
            <h1 className="heading-section">{t("hero.title")}</h1>
            <p className="body-text mt-4 max-w-xl mx-auto">{t("hero.subtitle")}</p>
          </div>

          {/* Section anchors */}
          <div className="flex flex-wrap gap-3 justify-center mt-10" data-reveal data-reveal-delay="200">
            {sections.map(({ id, icon: Icon, label_it, label_en, color }) => (
              <a key={id} href={`#${id}`}
                className={`inline-flex items-center gap-2 font-sans text-sm font-medium px-4 py-2 rounded-full ${color} hover:opacity-80 transition-opacity cursor-pointer`}>
                <Icon size={14} />
                {isIt ? label_it : label_en}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What to see */}
      <section id="cosa-vedere" className="section-pad bg-white scroll-mt-20">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-12" data-reveal>
            <div className="w-10 h-10 rounded-xl bg-brand-secondary-light flex items-center justify-center">
              <MapPin className="text-brand-primary" size={19} />
            </div>
            <h2 className="heading-section">{t("sections.seeTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sights.map((s, i) => (
              <div key={s.name_it} className="card-hover p-6" data-reveal data-reveal-delay={String((i % 3) * 80)}>
                <h3 className="font-display text-lg font-semibold text-brand-text mb-2">{isIt ? s.name_it : s.name_en}</h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">{isIt ? s.desc_it : s.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to eat */}
      <section id="dove-mangiare" className="section-pad bg-brand-bg-alt scroll-mt-20">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-12" data-reveal>
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
              <Utensils className="text-orange-600" size={19} />
            </div>
            <h2 className="heading-section">{t("sections.eatTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {restaurants.map((r, i) => (
              <div key={r.name} className="card-hover p-6" data-reveal data-reveal-delay={String((i % 2) * 100)}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-semibold text-brand-text">{r.name}</h3>
                  <span className="badge shrink-0">{isIt ? r.type_it : r.type_en}</span>
                </div>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">{isIt ? r.desc_it : r.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="eventi" className="section-pad bg-white scroll-mt-20">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-12" data-reveal>
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <Calendar className="text-purple-600" size={19} />
            </div>
            <h2 className="heading-section">{t("sections.eventsTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {events.map((e, i) => (
              <div key={e.name_it} className="card-hover p-6" data-reveal data-reveal-delay={String((i % 2) * 100)}>
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-brand-secondary mb-2">{e.period}</p>
                <h3 className="font-display text-lg font-semibold text-brand-text mb-2">{isIt ? e.name_it : e.name_en}</h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed">{isIt ? e.desc_it : e.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day trips */}
      <section id="gite" className="section-pad bg-brand-bg-alt scroll-mt-20">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-12" data-reveal>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Navigation className="text-emerald-600" size={19} />
            </div>
            <h2 className="heading-section">{t("sections.tripsTitle")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {dayTrips.map((d, i) => (
              <div key={d.name_it} className="card-hover p-6 flex gap-4" data-reveal data-reveal-delay={String((i % 2) * 100)}>
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary-light flex items-center justify-center shrink-0">
                  <span className="font-display font-bold text-brand-primary text-sm">{d.dist}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-text mb-1">{isIt ? d.name_it : d.name_en}</h3>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed">{isIt ? d.desc_it : d.desc_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-text">
        <div className="container-narrow text-center" data-reveal>
          <h2 className="font-display text-3xl font-semibold text-white mb-4">
            {isIt ? "Pronto ad esplorare Verona?" : "Ready to explore Verona?"}
          </h2>
          <p className="font-sans text-white/60 mb-8 max-w-md mx-auto">
            {isIt ? "Prenota il tuo appartamento e parti alla scoperta della città di Romeo e Giulietta" : "Book your apartment and discover the city of Romeo and Juliet"}
          </p>
          <a href={`/${locale}/apartments`} className="btn-primary">
            <ExternalLink size={16} />
            {isIt ? "Prenota Ora" : "Book Now"}
            <ChevronRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
