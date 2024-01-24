"use client";

import { MDXComponents } from "@/components/Mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export const MdxRemote = ({ source }: { source: MDXRemoteSerializeResult }) => {
    return <MDXRemote {...source} components={MDXComponents} />;
};
