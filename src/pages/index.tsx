import { getRecentPosts } from "@common/posts";
import { BuyMeACoffe } from "@components/BuyMeACoffe";
import Seo from "@components/Seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import type { PostFrontmatter } from "src/types/Post";
import styled from "styled-components";

const NewsLetterForm = dynamic(() =>
    import(
        /*webpackChunkName: 'NewsLetterForm' */
        "@components/NewsLetter"
    ).then(module => module.default)
);

const HomeStyled = styled.div`
    h1,
    h2 {
        padding-bottom: var(--space-lg);
    }

    .recentrly-published {
        margin-top: var(--space-md);
    }

    .arrow {
        width: 25px;
        height: 25px;
        position: relative;
        left: 12px;
        top: 10px;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        text-align: center;
    }
`;

const PostItem = dynamic(() => import("@components/Post").then(module => module.PostItem));

const Home: React.FC = ({ posts }: { posts: PostFrontmatter[] }) => {
    return (
        <HomeStyled>
            <Seo />
            <h2>Featured Posts</h2>
            <div className="recently-published">
                {posts.map((post: PostFrontmatter, index: number) => (
                    <PostItem key={index} post={post} type="post" />
                ))}
            </div>
            <Link href={`/blog`}>
                Read all posts
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="arrow">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    ></path>
                </svg>
            </Link>
            <NewsLetterForm />
            <BuyMeACoffe />
        </HomeStyled>
    );
};

export async function getStaticProps() {
    const posts = await getRecentPosts();
    return {
        props: {
            posts: posts
        }
    };
}

export default Home;
