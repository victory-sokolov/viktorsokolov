import type { Metadata } from "next";
import process from "node:process";
import { config } from "@/common/appconfig";
import { getAllPosts } from "@/common/posts";
import { PostItem } from "@/components/Post";
import { BlogContainer, TopBlogMeta } from "./styles";

export const metadata: Metadata = {
    title: "Blog posts",
    description: `Browse through ${config.author}'s blog posts to learn more about frontend and backend development`,
    alternates: {
        canonical: `${process.env.BASE_URL}/blog`,
        languages: {
            "en-US": "/en-US",
        },
    },
};

const Blog = async () => {
    const posts = await getAllPosts();
    if (!posts) return <h2>No Post found!</h2>;

    return (
        <BlogContainer>
            <TopBlogMeta>
                <h1>Blog Posts ↓</h1>
                <h4>
                    {posts.length}
                    {" "}
                    Articles
                </h4>
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
