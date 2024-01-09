/* eslint-disable react/prop-types */
"use client";

import { MDXComponents } from "@/components/Mdx";
import { MDXRemote } from "next-mdx-remote";

/* eslint-disable react/prop-types */

/* eslint-disable react/prop-types */

export const MdxRemote = ({ mdxSource }) => {
    return <MDXRemote {...mdxSource} components={MDXComponents} />;
};
