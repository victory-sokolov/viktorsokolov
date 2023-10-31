import { HomeStyled } from "@/styles/Home";
import { getRecentPosts } from "@common/posts";
import { PostItem } from "@components/Post";
import Link from "next/link";
import type { PostFrontmatter } from "src/types/Post";

// const PostItem = dynamic(() => import("@components/Post").then(module => module.PostItem));

export default async function Main() {
    const posts = await getRecentPosts();

    return (
        <HomeStyled>
            <h2>Featured Posts</h2>
            <div className="recently-published">
                {posts.map((post: PostFrontmatter, index: number) => (
                    <PostItem key={index} post={post} />
                ))}
            </div>
            <Link href={`/blog`}>
                Read all posts
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25px"
                    style={{ position: "relative", top: "6px", left: "5px" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="arrow"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    ></path>
                </svg>
            </Link>
            {/* <NewsLetterForm /> */}
            {/* <BuyMeACoffe /> */}
        </HomeStyled>
    );
}
