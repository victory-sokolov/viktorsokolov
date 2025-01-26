"use client";

import type { PostFrontmatter } from "src/types/Post";
import { useReadTime } from "@/hooks/useReadTime";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { borderGradient } from "src/styles/global-styles";

import styled from "styled-components";
import { PostMeta } from "./PostMeta";

const PostItemStyle = styled.article`
    margin-bottom: var(--space-xl);
    max-width: 85rem;
    &:hover {
        ${borderGradient};
    }

    a:hover {
        color: unset;
    }

    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
    }

    .post-data {
        padding: 1rem var(--space-sm) 1.5rem var(--space-sm);
        max-width: 34rem;
    }

    .post-title {
        font-size: var(--text-lg);
        color: var(--text-color-secondary);
    }

    .post-description {
        margin: 0;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        position: relative;
        margin: 2rem auto;

        .flex-row {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .post-data {
            padding: var(--space-md);
            > h2 {
                text-align: center;
            }
        }
    }
`;

export const PostItem = ({ post }: { post: PostFrontmatter }) => {
    return (
        <PostItemStyle className="border-gradient">
            <Link href={`blog/${post.slug}`} aria-label={post.title} className="flex-row">
                <div className="image-wrapper">
                    <Image
                        src={post.featureImage}
                        alt={post.title}
                        title={post.title}
                        priority
                        width={400}
                        height={500}
                        sizes="(max-width: 640px) 100vw, (max-width: 760px) 50vw. 33.3vw"
                    />
                </div>
                <div className="post-data">
                    <h3 className="post-title">
                        <Balancer>{post.title}</Balancer>
                    </h3>
                    <PostMeta
                        date={post.date}
                        readTime={useReadTime(post.content)}
                        style={{ justifyContent: "center" }}
                    />
                    <p className="post-description">{post.excerpt}</p>
                </div>
            </Link>
        </PostItemStyle>
    );
};
