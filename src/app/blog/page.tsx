import { getAllPosts } from "@common/posts";
import { PostItem } from "@components/Post";

import { BlogContainer, TopBlogMeta } from "./styles";

const Blog = async () => {
    const posts = await getAllPosts();
    if (!posts) return <h2>No Post found!</h2>;

    return (
        <BlogContainer>
            {/* <Seo
                title="Blog posts"
                description="Browse throught Viktor Sokolov's blog posts to learn more about frontend and backend development"
            /> */}
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
