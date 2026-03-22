import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, ExternalLink, Calendar } from "lucide-react";

const navLinks = [
  { key: "home",       href: "/"           },
  { key: "apartments", href: "/apartments" },
  { key: "location",   href: "/location"   },
  { key: "guide",      href: "/guide"      },
  { key: "faq",        href: "/faq"        },
  { key: "blog",       href: "/blog"       },
  { key: "contact",    href: "/contact"    },
];

export default function Footer({ locale }: { locale: string }) {
  const t  = useTranslations("footer");
  const tn = useTranslations("nav");

  return (
    <footer className="bg-brand-text text-white">
      {/* Top wave divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent" />

      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href={`/${locale}`} className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/20 group-hover:ring-brand-secondary transition-all duration-300">
                <Image src="/images/logo.webp" alt="Hello Verona" width={36} height={36} className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-semibold text-lg text-white tracking-tight">Hello Verona</span>
            </Link>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs mb-6">{t("description")}</p>

            <div className="space-y-3">
              <a href="mailto:booking@helloverona.net"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer group">
                <div className="w-8 h-8 rounded-lg bg-white/8 group-hover:bg-brand-secondary/30 flex items-center justify-center transition-colors duration-200">
                  <Mail size={14} />
                </div>
                booking@helloverona.net
              </a>
              <a href="tel:+393936278663"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer group">
                <div className="w-8 h-8 rounded-lg bg-white/8 group-hover:bg-brand-secondary/30 flex items-center justify-center transition-colors duration-200">
                  <Phone size={14} />
                </div>
                +39 393 627 8663
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </div>
                <span>Via Campagnol di Tombetta 65<br />37134 Verona (Borgo Roma)</span>
              </div>
            </div>

          </div>

          {/* Quick links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-brand-secondary mb-5">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={`/${locale}${href === "/" ? "" : href}`}
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {tn(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct booking */}
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-brand-secondary mb-5">
              {t("bookDirect")}
            </h3>
            <div className="space-y-3">
              <a href="https://wa.me/393936278663" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer">
                <Phone size={13} /> WhatsApp
              </a>
              <a href="mailto:booking@helloverona.net"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer">
                <Mail size={13} /> Email
              </a>
              <a href="https://www.booking.com/hotel/it/hello-verona.it.html#tab-reviews" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white/60 transition-colors duration-200 cursor-pointer">
                <ExternalLink size={13} /> {t("reviewsBooking")}
              </a>
            </div>

            {/* Book direct CTA */}
            <Link href={`/${locale}/apartments`}
              className="btn-primary mt-8 text-sm py-2.5 px-5">
              <Calendar size={14} />
              {tn("bookNow")}
            </Link>
          </div>
        </div>

        {/* CIN — centered, prominent */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="font-sans text-sm font-bold text-white/60 tracking-wider">
            CIN: IT023091C2AQLUZ3EW
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">{t("rights")}</p>
          <div className="flex items-center gap-5">
            <Link href={`/${locale}/privacy-policy`} className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer">
              {t("privacy")}
            </Link>
            <Link href={`/${locale}/cookie-policy`} className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer">
              {t("cookie")}
            </Link>
            <Link href={`/${locale}/terms`} className="font-sans text-xs text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
