/** @type {import('next-sitemap').IConfig} */

const SITE_URL = "https://www.helloverona.net";

const BLOG_SLUGS = [
  "migliori-ristoranti-vicino-fiera-verona",
  "come-arrivare-verona-aeroporto",
  "weekend-romantico-verona",
];

const PRIORITIES = {
  "/it": 1.0,          "/en": 1.0,
  "/it/apartments": 0.9, "/en/apartments": 0.9,
  "/it/location": 0.8, "/en/location": 0.8,
  "/it/faq": 0.8,      "/en/faq": 0.8,
  "/it/guide": 0.8,    "/en/guide": 0.8,
  "/it/contact": 0.7,  "/en/contact": 0.7,
  "/it/blog": 0.7,     "/en/blog": 0.7,
};

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: false, // we have our own robots.txt
  sitemapSize: 5000,
  // Exclude auto-discovered paths — all paths are managed via additionalPaths
  exclude: ["/**", "/"],
  additionalPaths: async (config) => {
    const pagePaths = [
      "",
      "/apartments",
      "/location",
      "/guide",
      "/faq",
      "/contact",
      "/blog",
      "/privacy-policy",
      "/cookie-policy",
      "/terms",
      ...BLOG_SLUGS.map((slug) => `/blog/${slug}`),
    ];

    const allLocalePaths = pagePaths.flatMap((p) => [
      `/it${p}`,
      `/en${p}`,
    ]);

    return Promise.all(allLocalePaths.map((path) => config.transform(config, path)));
  },
  transform: async (config, path) => {
    // Extract the page portion without the locale prefix for hreflang calculation
    const match = path.match(/^\/(it|en)(\/.*)?$/);
    const pagePath = match ? (match[2] || "") : path;

    return {
      loc: path,
      changefreq: "weekly",
      priority: PRIORITIES[path] ?? 0.6,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: `${SITE_URL}/it${pagePath}`, hreflang: "it" },
        { href: `${SITE_URL}/en${pagePath}`, hreflang: "en" },
        { href: `${SITE_URL}/it${pagePath}`, hreflang: "x-default" },
      ],
    };
  },
};
