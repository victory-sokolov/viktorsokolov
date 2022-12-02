import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import fs from "fs";
import { toLongDate } from "./utils";

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
