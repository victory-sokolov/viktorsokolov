"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { PostFrontmatter } from "src/types/Post";

import { Card } from "./Post.styled";
import { PostMeta } from "./PostMeta";

export const PostCard: React.FC<PostFrontmatter> = ({
    title,
    date,
    slug,
    excerpt,
    featureImage,
    readTime,
    id
}) => {
    return (
        <Card key={id}>
            <Link href={`${slug}`} aria-label={title}>
                <div className="post-meta-data">
                    <Image
                        src={featureImage}
                        alt={title}
                        title={title}
                        priority
                        fill
                        width="0"
                        height="0"
                        style={{ width: "100%", height: "auto" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 760px) 50vw. 33.3vw"
                    />
                    <div className="post-data">
                        <h3 className="post-title">{title}</h3>
                        <p className="post-description">{excerpt}</p>
                    </div>
                    <PostMeta date={date} readTime={readTime}></PostMeta>
                </div>
            </Link>
        </Card>
    );
};
