"use client";

import type { PostFrontmatter } from "src/types/Post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PostMeta } from "./PostMeta";

export const PostCard: React.FC<PostFrontmatter> = ({
    title,
    date,
    slug,
    excerpt,
    featureImage,
    readTime,
    id,
}) => {
    return (
        <div
            key={id}
            className="post-card"
        >
            <Link href={`/blog/${slug}`} aria-label={title}>
                <div className="flex h-full flex-col">
                    <div className="w-full overflow-hidden rounded-t-lg">
                        <Image
                            src={featureImage}
                            alt={title}
                            title={title}
                            width={380}
                            height={200}
                            className="h-auto w-full object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 380px"
                        />
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-8">
                        <h3 className="post-title text-center text-xl hover:text-[rgb(var(--color-secondary-600))] md:text-2xl">
                            {title}
                        </h3>
                        <p className="mb-4 flex-1 text-base leading-relaxed">{excerpt}</p>
                        <PostMeta
                            date={date}
                            readTime={readTime}
                            style={{ justifyContent: "center" }}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};
