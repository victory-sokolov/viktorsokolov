import type { PostFrontmatter } from "src/types/Post";
import Link from "next/link";
import { getRecentPosts } from "@/common/posts";
import { PostItem } from "@/components/Post";

export default async function Main() {
    const posts = await getRecentPosts();

    return (
        <div className="max-sm:text-center">
            <h2 className="mb-12 text-3xl max-sm:mb-8 max-sm:text-2xl">Featured Posts</h2>
            <div className="post-list">
                {posts.map((post: PostFrontmatter, index: number) => (
                    <PostItem key={index} post={post} />
                ))}
            </div>
            <Link
                href="/blog"
                className="mt-12 inline-flex items-center gap-3 font-medium transition-colors hover:text-[rgb(var(--color-secondary-600))] max-sm:mt-10"
            >
                Read all posts
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="relative"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                    >
                    </path>
                </svg>
            </Link>
            {/* <NewsLetterForm /> */}
            {/* <BuyMeACoffe /> */}
        </div>
    );
}
