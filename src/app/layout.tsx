import type { Metadata } from "next";
import { Cormorant, Karla } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GoogleAnalyticsConsent from "@/components/ui/GoogleAnalyticsConsent";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const GA_ID = "G-554592L7XW";

export const metadata: Metadata = {
  title: "Hello Verona – Appartamento Turistico a Verona",
  description:
    "Locazione turistica con 2 camere matrimoniali a Verona, vicino alla Fiera e all'Arena. Prenota il tuo soggiorno nella città di Romeo e Giulietta.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${cormorant.variable} ${karla.variable}`}>
      <head>
        {/* GA4 Consent Mode v2 — must run synchronously before gtag.js loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer=window.dataLayer||[];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('consent','default',{
                analytics_storage:'denied',
                ad_storage:'denied',
                ad_user_data:'denied',
                ad_personalization:'denied',
                wait_for_update:500
              });
            `,
          }}
        />
      </head>
      <body className="font-sans bg-brand-bg text-brand-text antialiased overflow-x-hidden">
        {children}
        <ScrollReveal />
        <GoogleAnalyticsConsent />
        {/* GA4 script — loads after page is interactive, consent already defaulted above */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true});`}
        </Script>
      </body>
    </html>
  );
}
