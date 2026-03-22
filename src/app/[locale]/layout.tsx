import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/routing";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieBanner from "@/components/ui/CookieBanner";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isEn = locale === "en";
  return {
    alternates: {
      canonical: `https://helloverona.net/${locale}`,
      languages: {
        it: "https://helloverona.net/it",
        en: "https://helloverona.net/en",
      },
    },
    openGraph: {
      siteName: "Hello Verona",
      locale: isEn ? "en_US" : "it_IT",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "it" | "en")) notFound();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <WhatsAppButton />
      <CookieBanner />
    </NextIntlClientProvider>
  );
}
