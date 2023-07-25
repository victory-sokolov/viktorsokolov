import { toLongDate } from "@vsokolov/utils";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import { PostType } from "src/types/Post";

export const getSerializedContent = async content => {
    const options = {
        mdxOptions: {
            rehypePlugins: [rehypeSlug]
        }
    };
    return serialize(content, options);
};

export const getPostData = async (data, slug: string) => {
    const currentIndex = data.findIndex(data => data.slug === slug);
    const currentPost = data.at(currentIndex);
    const mdxSource = await getSerializedContent(currentPost.content);

    return {
        currentPost: { frontmatter: currentPost, mdxSource },
        nextPost: data[currentIndex + 1] || null,
        previousPost: data[currentIndex - 1] || null
    };
};

export const getContent = async (filePath: string) => {
    const fileContents = fs.readFileSync(`content/${filePath}.mdx`, "utf-8");
    const { data: frontmatter, content } = matter(fileContents);
    const mdxSource = await getSerializedContent(content);
    // Serialize date field
    frontmatter.date = toLongDate(frontmatter.date);
    return { frontmatter, mdxSource, content };
};

export const sortPostByDate = (posts: PostType[]): PostType[] => {
    return posts.sort((post1: PostType, post2: PostType) => Date.parse(post2.date) - Date.parse(post1.date));
};
