import type { PostFrontmatter, TipFrontmatter } from "src/types/Post";
/* eslint no-console: 0 */
import { writeFileSync } from "node:fs";
import process from "node:process";
import { config } from "@/src/common/appconfig";
import { getAllPosts } from "@/src/common/posts";
import { getAllTips } from "@/src/common/tips";
import { Feed } from "feed";
import { remark } from "remark";
import remarkHtml from "remark-html";

async function markdownToHtml(markdown) {
    const result = await remark().use(remarkHtml).process(markdown);
    return result.toString();
}

export default (async () => {
    console.info("🐾 Generating RSS feed");
    if (process.env.NODE_ENV === "development") {
        return;
    }
    const baseUrl = config.siteUrl;
    const date = new Date();
    const author = {
        name: config.author,
        email: config.email,
        link: config.social.twitter,
    };
    const feed = new Feed({
        title: config.title,
        description: config.description,
        id: baseUrl,
        link: baseUrl,
        language: config.lang,
        image: config.siteLogo,
        favicon: config.siteLogo,
        copyright: `All rights reserved ${date.getFullYear()}, ${config.author}`,
        updated: date,
        generator: "Next.js",
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
            json: `${baseUrl}/feed.json`,
            atom: `${baseUrl}/atom.xml`,
        },
        author,
    });
    const posts = await getAllPosts();
    const tips = await getAllTips();

    const postPromise = posts.map(async (post: PostFrontmatter) => {
        const content = await markdownToHtml(post.content);
        const url = `${baseUrl}/blog/${post.slug}`;

        feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.description,
            content,
            author: [author],
            contributor: [author],
            date: new Date(post.date),
        });
    });

    const tipPromise = tips.map(async (tip: TipFrontmatter) => {
        const content = await markdownToHtml(tip.content);
        const url = `${baseUrl}/tips/${tip.slug}`;

        feed.addItem({
            title: tip.title,
            id: url,
            link: url,
            description: tip.description,
            content,
            author: [author],
            contributor: [author],
            date: new Date(tip.date),
        });
    });

    await Promise.all([postPromise, tipPromise]);

    writeFileSync("./public/rss.xml", feed.rss2());
    writeFileSync("./public/atom.xml", feed.atom1());
    writeFileSync("./public/feed.json", feed.json1());
})();
