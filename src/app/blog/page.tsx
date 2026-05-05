import type { Metadata } from "next";
import { config } from "@/common/appconfig";
import { buildCanonicalAlternates } from "@/common/metadata";
import { getAllPosts } from "@/common/posts";
import { PostItem } from "@/components/Post";

export const metadata: Metadata = {
    title: "Blog posts",
    description: `Browse through ${config.author}'s blog posts to learn more about frontend and backend development`,
    alternates: buildCanonicalAlternates("/blog"),
};

const Blog = async () => {
    const posts = await getAllPosts();
    if (!posts) return <h2>No Post found!</h2>;

    return (
        <div className="w-full">
            <div className="section-header">
                <h1 className="section-title mb-4">Blog Posts ↓</h1>
                <h4 className="text-xl md:text-2xl">
                    {posts.length}
                    {" "}
                    Article
                    {posts.length !== 1 ? "s" : ""}
                </h4>
            </div>

            <div className="blog-posts-list w-full">
                {posts.map((post) => (
                    <PostItem key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
