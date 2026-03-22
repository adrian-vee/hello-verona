"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { key: "apartments", href: "/apartments" },
  { key: "location",   href: "/location"   },
  { key: "guide",      href: "/guide"      },
  { key: "faq",        href: "/faq"        },
  { key: "blog",       href: "/blog"       },
  { key: "contact",    href: "/contact"    },
];

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const otherLocale = locale === "it" ? "en" : "it";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-navbar border-b border-brand-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-brand-border group-hover:ring-brand-secondary transition-all duration-300">
                <Image src="/images/logo.webp" alt="Hello Verona" width={36} height={36} className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-semibold text-[1.15rem] text-brand-text hidden sm:block tracking-tight">
                Hello Verona
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
              {navLinks.map(({ key, href }) => (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className="font-sans text-sm font-medium text-brand-muted hover:text-brand-text px-3.5 py-2 rounded-full hover:bg-brand-secondary-light/40 transition-all duration-200 cursor-pointer"
                >
                  {t(key)}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Language */}
              <Link
                href={`/${otherLocale}`}
                className="font-sans text-xs font-semibold text-brand-muted hover:text-brand-primary px-2.5 py-1.5 rounded-full border border-brand-border hover:border-brand-primary hover:bg-brand-secondary-light/30 transition-all duration-200 cursor-pointer"
                aria-label={`Switch to ${otherLocale === "it" ? "Italian" : "English"}`}
              >
                {otherLocale.toUpperCase()}
              </Link>

              {/* Book CTA */}
              <Link
                href={`/${locale}/apartments`}
                className="hidden sm:inline-flex btn-primary py-2 px-5 text-sm"
              >
                <Calendar size={14} />
                {t("bookNow")}
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 rounded-full text-brand-text hover:bg-brand-secondary-light/40 transition-colors cursor-pointer"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-text/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-spring flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-brand-border/60">
            <span className="font-display font-semibold text-brand-text">Menu</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-brand-bg cursor-pointer" aria-label="Close menu">
              <X size={20} className="text-brand-muted" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-1" role="navigation">
            <Link href={`/${locale}`} onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl font-sans font-medium text-brand-text hover:bg-brand-bg hover:text-brand-primary transition-colors cursor-pointer">
              {t("home")}
            </Link>
            {navLinks.map(({ key, href }) => (
              <Link key={key} href={`/${locale}${href}`} onClick={() => setOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl font-sans font-medium text-brand-text hover:bg-brand-bg hover:text-brand-primary transition-colors cursor-pointer">
                {t(key)}
              </Link>
            ))}
          </nav>
          <div className="px-5 pb-8 space-y-3 border-t border-brand-border/60 pt-5">
            <Link href={`/${locale}/apartments`}
              className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
              <Calendar size={15} />
              {t("bookNow")}
            </Link>
            <Link href={`/${otherLocale}`} onClick={() => setOpen(false)}
              className="btn-secondary w-full justify-center text-sm">
              {otherLocale === "it" ? "Versione Italiana" : "English Version"}
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
