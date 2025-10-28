import type { PostFrontmatter } from "src/types/Post";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { slugify, toLongDate } from "@vsokolov/utils";
import matter from "gray-matter";
import { calculateReadTime } from "@/common/readTime";

import { getPostData, sortPostByDate } from "./content-utils";

export const getAllPosts = async (): Promise<PostFrontmatter[]> => {
    const contentPath = "content/posts";
    const articlePath = path.join(process.cwd(), contentPath);
    const postData = await fs.promises.readdir(articlePath);
    const filteredPostData = postData.filter(file => !file.startsWith("."));

    const posts = filteredPostData
        .map(async postSlug => {
            const filePath = `${articlePath}/${postSlug}/${postSlug}.mdx`;
            const file = matter.read(filePath);
            const post = file.data as PostFrontmatter;
            const slug = slugify(postSlug);
            const imgPath = `/posts/${slug}/${post.featureImage}`;
            const lastModified = fs.statSync(filePath).mtime.toString();

            if (post.published) {
                return {
                    title: post.title,
                    description: post.description,
                    tags: post.tags.replace(/\s+/g, "").trim(),
                    published: post.published,
                    content: file.content,
                    date: toLongDate(post.date),
                    lastModified,
                    slug,
                    excerpt: `${file.content.substring(0, 150)}...`,
                    featureImage: imgPath,
                    readTime: calculateReadTime(file.content),
                };
            }
        })
        .filter(Boolean);

    const allPosts = await Promise.all(posts);
    const sortedPosts = sortPostByDate(allPosts);
    return JSON.parse(JSON.stringify(sortedPosts));
};

export const getRecentPosts = async (amount = 3): Promise<PostFrontmatter[]> => {
    const posts = await getAllPosts();
    return posts.splice(0, amount);
};

export const getPostBySlug = async (slug: string) => {
    const posts = await getAllPosts();
    return getPostData(posts, slug);
};
