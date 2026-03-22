import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronLeft, ArrowRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blogPosts";
import Breadcrumb from "@/components/ui/Breadcrumb";
import JsonLd from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(slug);
  if (!post) return {};
  const isIt = locale === "it";
  return {
    title: `${isIt ? post.title_it : post.title_en} | Hello Verona Blog`,
    description: isIt ? post.excerpt_it : post.excerpt_en,
    alternates: {
      canonical: `https://helloverona.net/${locale}/blog/${slug}`,
      languages: { it: `https://helloverona.net/it/blog/${slug}`, en: `https://helloverona.net/en/blog/${slug}` },
    },
  };
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^# (.+)$/gm,   '<h1>$1</h1>')
    .replace(/^## (.+)$/gm,  '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/^---$/gm, '<hr />')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '\n')
    .split('\n')
    .map(line => {
      if (/^<[h1-6|li|hr]/.test(line)) return line;
      if (line.trim() === '') return '';
      return `<p>${line}</p>`;
    })
    .join('\n');
}

export default async function BlogPostPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const isIt = locale === "it";
  const t = await getTranslations({ locale, namespace: "blog" });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: isIt ? post.title_it : post.title_en,
    description: isIt ? post.excerpt_it : post.excerpt_en,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Hello Verona" },
    publisher: { "@type": "Organization", name: "Hello Verona", url: "https://helloverona.net" },
    url: `https://helloverona.net/${locale}/blog/${slug}`,
  };

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 bg-gradient-warm">
        <div className="blob w-72 h-72 bg-brand-secondary/15 top-0 right-0" />
        <div className="container-narrow relative z-10">
          <div className="mb-6" data-reveal>
            <Breadcrumb locale={locale} items={[
              { label: "Blog", href: `/${locale}/blog` },
              { label: isIt ? post.title_it : post.title_en },
            ]} />
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-5" data-reveal data-reveal-delay="100">
            <span className="badge-gold">{isIt ? post.category_it : post.category_en}</span>
            <span className="flex items-center gap-1.5 font-sans text-xs text-brand-subtle">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString(isIt ? "it-IT" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5 font-sans text-xs text-brand-subtle">
              <Clock size={12} />{post.readTime} min
            </span>
          </div>
          <h1 className="font-display text-display-lg font-semibold text-brand-text leading-tight" data-reveal data-reveal-delay="150">
            {isIt ? post.title_it : post.title_en}
          </h1>
          <p className="body-text mt-4 text-base" data-reveal data-reveal-delay="200">
            {isIt ? post.excerpt_it : post.excerpt_en}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="container-narrow">
          {/* Cover image */}
          <div className="rounded-3xl aspect-video mb-12 overflow-hidden relative" data-reveal>
            <Image
              src={post.image}
              alt={isIt ? post.title_it : post.title_en}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Article body */}
          <div
            className="prose-brand"
            data-reveal
            dangerouslySetInnerHTML={{ __html: renderMarkdown(isIt ? post.content_it : post.content_en) }}
          />

          {/* CTA box */}
          <div className="mt-14 bg-gradient-warm rounded-3xl p-8 md:p-10 text-center border border-brand-border/60" data-reveal>
            <p className="section-label mb-3">{isIt ? "Soggiorna a Verona" : "Stay in Verona"}</p>
            <h3 className="font-display text-2xl font-semibold text-brand-text mb-3">
              {isIt ? "Hello Verona — a 1 km dalla Fiera" : "Hello Verona — 1 km from the Trade Fair"}
            </h3>
            <p className="body-text mb-6 max-w-sm mx-auto">
              {isIt
                ? "Appartamento con 2 camere matrimoniali, giardino privato, biciclette gratuite a 3 km dal centro."
                : "Apartment with 2 double bedrooms, private garden, free bicycles, 3 km from the center."}
            </p>
            <Link href={`/${locale}/apartments`} className="btn-primary">
              {isIt ? "Prenota Direttamente" : "Book Directly"}
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-10" data-reveal>
            <Link href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 font-sans text-sm text-brand-muted hover:text-brand-primary transition-colors duration-200 cursor-pointer">
              <ChevronLeft size={15} />{t("backToBlog")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
