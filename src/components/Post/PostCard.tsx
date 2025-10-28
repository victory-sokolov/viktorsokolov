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
            className="shadow-[0_5px_15px_rgba(154,160,185,0.3)] bg-white rounded-lg text-[rgb(var(--color-text-primary))] w-full max-w-[38rem] mb-12 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(154,160,185,0.45)] hover:scale-[1.02] max-sm:max-w-full"
        >
            <Link href={`${slug}`} aria-label={title}>
                <div className="flex flex-col h-full">
                    <div className="w-full overflow-hidden rounded-t-lg">
                        <Image
                            src={featureImage}
                            alt={title}
                            title={title}
                            priority
                            width={380}
                            height={200}
                            className="w-full h-auto object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 380px"
                        />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                        <h3 className="text-center text-xl md:text-2xl mb-4 hover:text-[rgb(var(--color-secondary-600))] transition-colors">
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
