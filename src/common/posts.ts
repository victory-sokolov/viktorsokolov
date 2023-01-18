import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { PostFrontmatter } from "src/types/Post";
import { toLongDate, slugify } from "@vsokolov/utils";
import { useReadTime } from "../hooks/useReadTime";
import { getPostData, sortPostByDate } from "./content-utils";

export const getAllPosts = async (): Promise<PostFrontmatter[]> => {
    const contentPath = "content/posts";
    const articlePath = path.join(process.cwd(), contentPath);
    const postData = await fs.promises.readdir(articlePath);
    const posts = postData
        .map(postSlug => {
            const file = matter.read(`${articlePath}/${postSlug}/${postSlug}.mdx`);
            const post = file.data;
            const slug = slugify(postSlug);

            if (post.published) {
                return {
                    title: post.title,
                    description: post.description,
                    tags: post.tags.replace(/\s+/g, "").trim(),
                    published: post.published,
                    content: file.content,
                    date: toLongDate(post.date),
                    slug: slug,
                    excerpt: `${file.content.substring(0, 150)}...`,
                    featureImage: `/posts/${slug}/${post.featureImage}`,
                    readTime: useReadTime(file.content)
                };
            }
        })
        .filter(Boolean);

    const sortedPosts = sortPostByDate(posts);
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
