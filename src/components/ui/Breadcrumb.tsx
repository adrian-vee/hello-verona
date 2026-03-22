import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items, locale }: { items: BreadcrumbItem[]; locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://helloverona.net/${locale}` },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: item.href ? `https://helloverona.net${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-brand-muted">
        <Link href={`/${locale}`} className="hover:text-brand-primary transition-colors">Home</Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            <ChevronRight size={14} />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-primary transition-colors">{item.label}</Link>
            ) : (
              <span className="text-brand-text font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
