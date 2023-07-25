import { getAllPosts } from "@common/posts";
import { PostItem } from "@components/Post";
import Seo from "@components/Seo";
import React from "react";
import styled from "styled-components";

const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopBlogMeta = styled.div`
    padding-bottom: var(--space-md);

    @media ${props => props.theme.breakpoints.tablet} {
        text-align: center;
    }
`;

const Blog = ({ posts }) => {
    if (!posts) return <h2>No Post found!</h2>;

    return (
        <BlogContainer>
            <Seo
                title="Blog posts"
                description="Browse throught Viktor Sokolov's blog posts to learn more about frontend and backend development"
            />
            <TopBlogMeta>
                <h1>Blog Posts ↓</h1>
                <h4>{posts.length} Articles</h4>
            </TopBlogMeta>

            <div className="blog-posts-list">
                {posts.map((post, index) => (
                    <PostItem key={index} post={post} type="post" />
                ))}
            </div>
        </BlogContainer>
    );
};

export default Blog;

export async function getStaticProps() {
    const posts = await getAllPosts();

    return {
        props: {
            posts: posts
        }
    };
}
