import type { Metadata } from "next";
import process from "node:process";
import { config } from "@/common/appconfig";
import { getAllPosts } from "@/common/posts";
import { PostItem } from "@/components/Post";

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
        <div className="w-full">
            <div className="pb-12 max-md:text-center md:pb-16">
                <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">Blog Posts ↓</h1>
                <h4 className="text-xl text-[rgb(var(--color-text-primary))] md:text-2xl">
                    {posts.length}
                    {" "}
                    Article
                    {posts.length !== 1 ? "s" : ""}
                </h4>
            </div>

            <div className="blog-posts-list w-full">
                {posts.map((post, index) => (
                    <PostItem key={index} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
