import type { MetadataRoute } from "next/types";
import fs from "node:fs";
import { getAllPosts } from "@/common/posts";
import { getAllTips } from "@/common/tips";
import { config } from "@/src/common/appconfig";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allPosts = await getAllPosts();
    const allTips = await getAllTips();
    const posts = allPosts.map(post => {
        const filePath = `content/posts/${post.slug}/${post.slug}.mdx`;
        const lastModified = fs.statSync(filePath).mtime;

        return {
            url: `${config.siteUrl}/blog/${post.slug}`,
            lastModified
        };
    });

    const tips = allTips.map(tip => {
        const filePath = `content/tips/${tip.slug}/${tip.slug}.mdx`;
        const lastModified = fs.statSync(filePath).mtime;

        return {
            url: `${config.siteUrl}/tips/${tip.slug}`,
            lastModified
        };
    });

    const routes = ["", "/tips", "/blog", "/about", "/uses"].map(route => ({
        url: `${config.siteUrl}${route}`,
        lastModified: new Date().toISOString()
    }));

    return [...routes, ...posts, ...tips];
}
