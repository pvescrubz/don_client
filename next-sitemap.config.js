/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `${process.env.NEXT_PUBLIC_FRONT_URL || "https://vigames.com"}`,
  generateRobotsTxt: true,
  sitemapSize: 7000,


  exclude: [
    "/i",
    "/i/*",
    "/checkout",
    "/checkout/*",
    "/activate",
    "/activate/*",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/*?*",
          "/*&*",
          "/*=*",
          "/*utm_source*",
          "/*utm_medium*",
          "/*utm_campaign*",
          "/*utm_term*",
          "/*utm_content*",
          "/*ref*",
          "/*source*",
          "/*type*",
          "/*id*",
        ],
      },
    ],
  },

  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = "daily";

    if (path === "/") {
      priority = 1.0;
    } else if (path.split("/").length === 2) {
      priority = 0.9;
    } else if (path.split("/").length === 3) {
      priority = 0.8;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
