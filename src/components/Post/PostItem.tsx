"use client";

import type { PostType } from "src/types/Post";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { PostMeta } from "./PostMeta";

export const PostItem = ({ post, type = "blog" }: { post: PostType; type?: "blog" | "tips" }) => {
    const excerpt = "excerpt" in post ? post.excerpt : post.description;

    return (
        <article className="post-article mb-8 pb-8">
            <div className="flex flex-col gap-0">
                <Link href={`/${type}/${post.slug}`} aria-label={post.title}>
                    <h3 className="post-title text-[2.6rem] hover:text-[rgb(var(--color-secondary))] max-sm:text-3xl">
                        <Balancer>{post.title}</Balancer>
                    </h3>
                </Link>
                <PostMeta
                    date={post.date}
                    readTime={post.readTime || ""}
                    style={{ justifyContent: "flex-start", paddingLeft: 0 }}
                />

                <p className="m-0 mt-4 text-[1.6rem] leading-[1.7] max-sm:text-base">
                    {excerpt}
                </p>
            </div>
        </article>
    );
};
