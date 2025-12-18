"use client";

import type { PostFrontmatter } from "src/types/Post";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { useReadTime } from "@/hooks/useReadTime";

import { PostMeta } from "./PostMeta";

export const PostItem = ({ post }: { post: PostFrontmatter }) => {
    return (
        <article className="hover:border-gradient transition-all duration-300">
            <Link
                href={`blog/${post.slug}`}
                aria-label={post.title}
                className="flex flex-col gap-0 hover:text-[rgb(var(--color-text-primary))]"
            >
                <div className="image-wrapper mb-6 w-full">
                    <Image
                        src={post.featureImage}
                        alt={post.title}
                        title={post.title}
                        width={500}
                        height={300}
                        className="h-auto w-full rounded-lg object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="mb-4 text-[2.6rem] leading-[1.3] text-[rgb(var(--color-text-secondary))] max-sm:text-2xl">
                        <Balancer>{post.title}</Balancer>
                    </h3>
                    <PostMeta
                        date={post.date}
                        readTime={useReadTime(post.content)}
                        style={{ justifyContent: "flex-start", paddingLeft: 0 }}
                    />
                    <p className="m-0 mt-4 text-[1.6rem] leading-[1.7] max-sm:text-base">
                        {post.excerpt}
                    </p>
                </div>
            </Link>
        </article>
    );
};
