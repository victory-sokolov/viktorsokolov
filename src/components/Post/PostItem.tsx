"use client";

import type { PostFrontmatter } from "src/types/Post";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { useReadTime } from "@/hooks/useReadTime";

import { PostMeta } from "./PostMeta";

export const PostItem = ({ post }: { post: PostFrontmatter }) => {
    return (
        <article className="post-article mb-8 pb-8">
            <div className="flex flex-col gap-0">
                <Link href={`blog/${post.slug}`} aria-label={post.title}>
                    <h3 className="post-title text-[2.6rem] max-sm:text-3xl">
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
