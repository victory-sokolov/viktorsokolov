"use client";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "@/components/Mdx";

export const MdxRemote = ({ source }: { source: MDXRemoteSerializeResult }) => {
    return <MDXRemote {...source} components={MDXComponents as any} />;
};
