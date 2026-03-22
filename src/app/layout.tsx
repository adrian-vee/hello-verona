import type { Metadata } from "next";
import { Cormorant, Karla } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";

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

export const metadata: Metadata = {
  title: "Hello Verona – Appartamento Turistico a Verona",
  description:
    "Appartamento turistico accogliente a Verona, vicino alla Fiera e all'Arena. Prenota il tuo soggiorno nella città di Romeo e Giulietta.",
  icons: {
    icon: [{ url: "/images/logo.webp", type: "image/webp" }],
    apple: [{ url: "/images/logo.webp", type: "image/webp" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${cormorant.variable} ${karla.variable}`}>
      <body className="font-sans bg-brand-bg text-brand-text antialiased overflow-x-hidden">
        {children}
        <ScrollReveal />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
