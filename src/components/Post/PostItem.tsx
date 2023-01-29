import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { PostMeta } from "./PostMeta";
import { useReadTime } from "@hooks/useReadTime";
import { borderGradient } from "src/styles/global-styles";

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

    .image-wrapper {
        width: 52%;
        img {
            height: 100%;
            width: 100%;
        }
    }

    .post-description {
        margin: 0;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        position: relative;
        margin: 2rem auto;

        .image-wrapper {
            width: 100%;
        }

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

export const PostItem = ({ post, type }) => {
    return (
        <PostItemStyle className="border-gradient">
            <Link href={`${type}/${post.slug}`} aria-label={post.title} className="flex-row">
                <div className="image-wrapper">
                    <Image src={post.featureImage} alt={post.title} width={400} height={450} quality={100} priority />
                </div>
                <div className="post-data">
                    <h3 className="post-title">{post.title}</h3>
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
