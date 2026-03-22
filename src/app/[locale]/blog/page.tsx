import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogPosts";
import Breadcrumb from "@/components/ui/Breadcrumb";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = locale === "it";
  return {
    title: isIt ? "Blog – Consigli e Guide per Visitare Verona | Hello Verona" : "Blog – Tips and Guides for Visiting Verona | Hello Verona",
    description: isIt
      ? "Consigli di viaggio, guide e itinerari per Verona. Ristoranti, trasporti, weekend romantici, gite al Lago di Garda."
      : "Travel tips, guides and itineraries for Verona. Restaurants, transport, romantic weekends, trips to Lake Garda.",
    alternates: {
      canonical: `https://helloverona.net/${locale}/blog`,
      languages: { it: "https://helloverona.net/it/blog", en: "https://helloverona.net/en/blog" },
    },
  };
}

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "blog" });
  const isIt = locale === "it";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-gradient-warm">
        <div className="blob w-80 h-80 bg-brand-secondary/15 top-0 right-0" />
        <div className="container-wide relative z-10">
          <div className="mb-6" data-reveal>
            <Breadcrumb locale={locale} items={[{ label: "Blog" }]} />
          </div>
          <div className="text-center" data-reveal data-reveal-delay="100">
            <p className="section-label mb-3">{isIt ? "Ispirazioni di viaggio" : "Travel inspiration"}</p>
            <h1 className="heading-section">{t("hero.title")}</h1>
            <p className="body-text mt-4 max-w-xl mx-auto">{t("hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          {/* Featured post */}
          <div className="mb-10" data-reveal>
            <article className="card-hover grid md:grid-cols-2 overflow-hidden">
              <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden min-h-[240px]">
                <Image
                  src={blogPosts[0].image}
                  alt={isIt ? blogPosts[0].title_it : blogPosts[0].title_en}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-brand-text/30" />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="badge-gold">{isIt ? blogPosts[0].category_it : blogPosts[0].category_en}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs text-brand-subtle mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={11} />
                    {new Date(blogPosts[0].date).toLocaleDateString(isIt ? "it-IT" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5"><Clock size={11} />{blogPosts[0].readTime} min</span>
                </div>
                <h2 className="font-display text-2xl font-semibold text-brand-text mb-3 leading-snug">
                  {isIt ? blogPosts[0].title_it : blogPosts[0].title_en}
                </h2>
                <p className="body-text text-sm mb-6 line-clamp-3">
                  {isIt ? blogPosts[0].excerpt_it : blogPosts[0].excerpt_en}
                </p>
                <Link href={`/${locale}/blog/${blogPosts[0].slug}`}
                  className="btn-primary self-start text-sm">
                  {t("readMore")}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>

          {/* Other posts */}
          <div className="grid sm:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <article
                key={post.slug}
                className="card-hover"
                data-reveal
                data-reveal-delay={String(i * 100)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={isIt ? post.title_it : post.title_en}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-brand-text/20" />
                  <div className="absolute bottom-3 left-4">
                    <span className="badge-gold">{isIt ? post.category_it : post.category_en}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-brand-subtle mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={11} />
                      {new Date(post.date).toLocaleDateString(isIt ? "it-IT" : "en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5"><Clock size={11} />{post.readTime} min</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-brand-text mb-2 leading-snug">
                    {isIt ? post.title_it : post.title_en}
                  </h2>
                  <p className="font-sans text-sm text-brand-muted leading-relaxed mb-5 line-clamp-2">
                    {isIt ? post.excerpt_it : post.excerpt_en}
                  </p>
                  <Link href={`/${locale}/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors duration-200 cursor-pointer">
                    {t("readMore")} <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
