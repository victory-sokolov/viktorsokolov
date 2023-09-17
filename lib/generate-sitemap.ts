import { writeFileSync } from "fs";
import { globby } from "globby";
import path from "path";
import prettier from "prettier";
import simpleGit from "simple-git";

import { config } from "../src/common/appconfig";
import { getAllPosts } from "../src/common/posts";
import { getAllTips } from "../src/common/tips";

const getPostModTime = async (filePath: string): Promise<string> => {
    const baseDir = path.resolve(process.cwd());
    const options = {
        baseDir,
        binary: "git",
        maxConcurrentProcesses: 6,
        trimmed: false
    };
    const SimpleGit = simpleGit(options);
    const fileLog = await SimpleGit.log({
        file: filePath
    });
    return fileLog.latest?.date?.toString();
};

const getPostPath = (file: string): string => {
    let path = file;
    if (file.startsWith("/post")) {
        path = file.replace("post", "posts");
    } else if (file.startsWith("/tip")) {
        path = file.replace("tip", "tips");
    }
    return `content${path}/${file.split("/").at(-1)}.mdx`;
};

const isPost = (file: string): boolean => {
    if (file.startsWith("/post/") || file.startsWith("/tip/")) {
        return true;
    }
    return false;
};

export default (async () => {
    console.info("🗺️ Generating Sitemap");
    const prettierConfig = await prettier.resolveConfig("../.prettierrc");
    const pages = await globby([
        "content/articles/*.mdx",
        "src/pages/*.tsx",
        "!src/pages/_*.tsx",
        "!content/pages/*.mdx",
        "!src/pages/404.tsx",
        "!src/pages/[*.tsx",
        "!src/pages/api"
    ]);

    const post = await getAllPosts();
    const postPaths = post.map(item => `/post/${item.slug}`);
    const tips = await getAllTips();
    const tipsPath = tips.map(item => `/tip/${item.slug}`);
    pages.push(...postPaths, ...tipsPath);

    const sitemapItems = await Promise.all(
        pages.map(async page => {
            const path = page
                .replace("pages", "/")
                .replace("articles", "/blog")
                .replace("content/", "")
                .replace("content//", "")
                .replace("/index", "")
                .replace(".tsx", "")
                .replace(".mdx", "")
                .replace("src//", "");

            const route = path === "/" ? "" : path;
            const isPostType = isPost(page);
            let lastMod = null;
            let pathToPage = page;

            if (isPostType) {
                pathToPage = getPostPath(page);
            }
            lastMod = await getPostModTime(pathToPage);
            return `
            <url>
                <loc>${config.siteUrl}${route}</loc>
                <lastmod>${lastMod}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.7</priority>
            </url>
        `;
        })
    );

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemapItems.join("")}
        </urlset>
    `;

    const formatted = await prettier.format(sitemap, {
        ...prettierConfig,
        parser: "html"
    });

    // eslint-disable-next-line no-sync
    writeFileSync("public/sitemap.xml", formatted);
})();
