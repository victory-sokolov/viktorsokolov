"use client";

import { MDXComponents } from "@components/Mdx";
import { MDXRemote } from "next-mdx-remote";

export const MdxRemote = ({ mdxSource }) => {
    return <MDXRemote {...mdxSource} components={MDXComponents} />;
};
