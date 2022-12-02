import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Card } from "./Post.styled";

import { PostMeta } from "./PostMeta";
import { PostFrontmatter } from "src/types/Post";

export const PostCard: React.FC<PostFrontmatter> = ({ title, date, slug, excerpt, image, readTime, id }) => {
    return (
        <Card key={id}>
            <Link href={`${slug}`} aria-label={title}>
                <div className="post-meta-data">
                    <Image src={image} alt={title} width={500} height={500} />
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
