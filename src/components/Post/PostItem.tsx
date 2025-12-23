"use client";

import { useReadTime } from "@/hooks/useReadTime";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import type { PostFrontmatter } from "src/types/Post";

import { PostMeta } from "./PostMeta";

export const PostItem = ({ post }: { post: PostFrontmatter }) => {
    return (
        <article className="mb-8 border-b border-[rgb(var(--color-border))] pb-8 last:mb-0 last:border-b-0 last:pb-0">
            <div className="flex flex-col gap-0">
                <Link href={`blog/${post.slug}`} aria-label={post.title}>
                    <h3 className="mb-4 text-[2.6rem] leading-[1.3] text-[rgb(var(--color-text-primary))] transition-colors duration-300 max-sm:text-3xl">
                        <Balancer>{post.title}</Balancer>
                    </h3>
                </Link>
                <PostMeta
                    date={post.date}
                    readTime={useReadTime(post.content)}
                    style={{ justifyContent: "flex-start", paddingLeft: 0 }}
                />
                <p className="m-0 mt-4 text-[1.6rem] leading-[1.7] max-sm:text-base">
                    {post.excerpt}
                </p>
            </div>
        </article>
    );
};
