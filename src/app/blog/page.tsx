import { config } from "@/common/appconfig";
import { getAllPosts } from "@/common/posts";
import { PostItem } from "@/components/Post";
import type { Metadata } from "next";

import { BlogContainer, TopBlogMeta } from "./styles";

export const metadata: Metadata = {
    title: "Blog posts",
    description: `Browse through ${config.author}'s blog posts to learn more about frontend and backend development`
};

const Blog = async () => {
    const posts = await getAllPosts();
    if (!posts) return <h2>No Post found!</h2>;

    return (
        <BlogContainer>
            <TopBlogMeta>
                <h1>Blog Posts ↓</h1>
                <h4>{posts.length} Articles</h4>
            </TopBlogMeta>

            <div className="blog-posts-list">
                {posts.map((post, index) => (
                    <PostItem key={index} post={post} />
                ))}
            </div>
        </BlogContainer>
    );
};

export default Blog;
