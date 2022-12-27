import { globby } from "globby";
import prettier from "prettier";
import { writeFileSync } from "fs";
import { config } from "../src/common/appconfig";

export default (async () => {
    console.info("🗺️ Generating Sitemap");
    const prettierConfig = await prettier.resolveConfig("../.prettierrc");
    //exclude pages below by adding ! in front of the path
    const pages = await globby([
        "content/articles/*.mdx",
        "src/pages/*.tsx",
        "!src/pages/_*.tsx",
        "!content/pages/*.mdx",
        "!src/pages/404.tsx",
        "!src/pages/[*.tsx",
        "!src/pages/api"
    ]);

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
                .map(page => {
                    const path = page
                        .replace("pages", "/")
                        .replace("articles", "/blog")
                        .replace("content/", "")
                        .replace("content//", "")
                        .replace(".tsx", "")
                        .replace(".mdx", "")
                        .replace("src//", "");

                    const route = path === "/" ? "" : path;
                    return `
                    <url>
                        <loc>${config.siteUrl}${route}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>daily</changefreq>
                        <priority>0.7</priority>
                    </url>
                    `;
                })
                .join("")}
        </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: "html"
    });

    // eslint-disable-next-line no-sync
    writeFileSync("public/sitemap.xml", formatted);
})();
