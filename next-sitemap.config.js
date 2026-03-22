/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.helloverona.net",
  generateRobotsTxt: false, // we have our own robots.txt
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  alternateRefs: [
    { href: "https://www.helloverona.net/it", hreflang: "it" },
    { href: "https://www.helloverona.net/en", hreflang: "en" },
  ],
  transform: async (config, path) => {
    const priorities = {
      "/it": 1.0,
      "/en": 1.0,
      "/it/apartments": 0.9,
      "/en/apartments": 0.9,
      "/it/location": 0.8,
      "/en/location": 0.8,
      "/it/faq": 0.8,
      "/en/faq": 0.8,
      "/it/guide": 0.8,
      "/en/guide": 0.8,
      "/it/contact": 0.7,
      "/en/contact": 0.7,
      "/it/blog": 0.7,
      "/en/blog": 0.7,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || 0.6,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
