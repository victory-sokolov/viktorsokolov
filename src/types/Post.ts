import { MDXRemoteSerializeResult } from "next-mdx-remote";

type Content = {
    id?: string;
    title: string;
    content: string;
    description: string;
    date: string;
    slug: string;
    featureImage: string;
    image?: string;
};

type PostMeta = {
    excerpt: string;
    tags: string;
    published: boolean;
    readTime?: string;
    lastModified?: Date;
};

type TipMeta = {
    tweetUrl: string;
    tags: string;
};

export type PostFrontmatter = Content & PostMeta;
export type TipFrontmatter = Content & TipMeta;
export type PostType = TipFrontmatter | PostFrontmatter;

export type Post = {
    frontmatter: PostFrontmatter;
    next: PostFrontmatter;
    previous: PostFrontmatter;
    mdxSource: MDXRemoteSerializeResult;
};

export type Tip = {
    frontmatter: TipFrontmatter;
    next: TipFrontmatter;
    previous: TipFrontmatter;
    mdxSource: MDXRemoteSerializeResult;
};

type MDXFrontmatter = {
    title: string;
    description: string;
    date: string;
};

export type MDXProps = {
    mdxSource: MDXRemoteSerializeResult;
    frontmatter: MDXFrontmatter;
};
