/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || "https://viktorsokolov.com",
    generateRobotsTxt: true,
    sitemapSize: 7000
};

export default config;
