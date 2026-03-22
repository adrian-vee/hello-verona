"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const isIt = locale === "it";
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-warm">
        <div className="blob w-80 h-80 bg-brand-secondary/15 top-0 right-0" />
        <div className="container-wide relative z-10">
          <div className="mb-6" data-reveal>
            <Breadcrumb locale={locale} items={[{ label: isIt ? "Contatti" : "Contact" }]} />
          </div>
          <div className="text-center" data-reveal data-reveal-delay="100">
            <p className="section-label mb-3">{isIt ? "Parliamoci" : "Let's talk"}</p>
            <h1 className="heading-section">{isIt ? "Contattaci" : "Contact Us"}</h1>
            <p className="body-text mt-4 max-w-xl mx-auto">
              {isIt
                ? "Siamo qui per aiutarti a pianificare il tuo soggiorno perfetto a Verona"
                : "We're here to help you plan your perfect stay in Verona"}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Form — takes 3 cols */}
            <div className="lg:col-span-3" data-reveal>
              <h2 className="font-display text-2xl font-semibold text-brand-text mb-8">
                {isIt ? "Invia un messaggio" : "Send a message"}
              </h2>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-emerald-600" size={26} />
                  </div>
                  <p className="font-display text-xl font-semibold text-emerald-800 mb-2">
                    {isIt ? "Messaggio inviato!" : "Message sent!"}
                  </p>
                  <p className="font-sans text-sm text-emerald-700">
                    {isIt ? "Ti risponderemo entro 24 ore." : "We will reply within 24 hours."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">{isIt ? "Nome *" : "Name *"}</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={isIt ? "Il tuo nome" : "Your name"} className="input" />
                    </div>
                    <div>
                      <label className="label">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={isIt ? "la-tua@email.com" : "your@email.com"} className="input" />
                    </div>
                  </div>

                  <div>
                    <label className="label">{isIt ? "Telefono (opzionale)" : "Phone (optional)"}</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+39..." className="input" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label">{isIt ? "Data Arrivo" : "Check-in Date"}</label>
                      <input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} className="input" />
                    </div>
                    <div>
                      <label className="label">{isIt ? "Data Partenza" : "Check-out Date"}</label>
                      <input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} className="input" />
                    </div>
                  </div>

                  <div>
                    <label className="label">{isIt ? "Messaggio *" : "Message *"}</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={isIt ? "Descrivi il tuo soggiorno ideale..." : "Describe your ideal stay..."}
                      className="input resize-none" />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base">
                    <Send size={16} />
                    {isIt ? "Invia Messaggio" : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar — 2 cols */}
            <div className="lg:col-span-2 space-y-5" data-reveal="right" data-reveal-delay="150">
              {/* Contact cards */}
              {[
                { icon: Mail,  label: "Email", value: "booking@helloverona.net", href: "mailto:booking@helloverona.net" },
                { icon: Phone, label: "Phone / WhatsApp", value: "+39 393 627 8663",           href: "tel:+393936278663" },
                { icon: MapPin, label: isIt ? "Indirizzo" : "Address", value: "Via Campagnol di Tombetta 65\n37134 Verona", href: undefined },
                { icon: Clock, label: isIt ? "Orari" : "Hours", value: isIt ? "Ogni giorno 9:00 – 21:00" : "Every day 9:00 AM – 9:00 PM", href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="card p-5 flex items-start gap-4 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-secondary-light flex items-center justify-center shrink-0">
                    <Icon className="text-brand-primary" size={17} />
                  </div>
                  <div>
                    <p className="font-sans text-[0.68rem] font-semibold tracking-widest uppercase text-brand-subtle mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-sans text-sm font-medium text-brand-text hover:text-brand-gold transition-colors duration-200 cursor-pointer whitespace-pre-line">{value}</a>
                    ) : (
                      <p className="font-sans text-sm text-brand-text whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/393936278663?text=Ciao!%20Vorrei%20informazioni%20su%20Hello%20Verona"
                target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-base"
              >
                <MessageCircle size={20} />
                {isIt ? "Chatta su WhatsApp" : "Chat on WhatsApp"}
              </a>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-brand-border/50 h-56 shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.123456789!2d10.9998!3d45.4178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f54567890ab%3A0x1234567890abcdef!2sVia%20Campagnol%20di%20Tombetta%2065%2C%2037134%20Verona%20VR!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Hello Verona Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
