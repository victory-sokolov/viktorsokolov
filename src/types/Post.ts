import type { MDXRemoteSerializeResult } from "next-mdx-remote";

type Prettify<T> = {
    [K in keyof T]: T[K];
} & object;

type Content = {
    id?: string;
    title: string;
    content: string;
    description: string;
    date: string;
    slug: string;
    lastModified?: string;
    featureImage?: string;
};

type PostMeta = {
    excerpt: string;
    tags: string;
    published: boolean;
    readTime?: string;
};

type TipMeta = {
    tweetUrl?: string;
    tags: string;
    readTime?: string;
};

export type PostFrontmatter = Prettify<Content & PostMeta>;
export type TipFrontmatter = Prettify<Content & TipMeta>;
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
