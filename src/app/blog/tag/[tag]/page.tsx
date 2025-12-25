import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { tagToSlug } from "@/common/content-utils";
import { getAllPostTags, getPostsByTag } from "@/common/posts";
import { getAllTipTags, getTipsByTag } from "@/common/tips";
import { PostItem } from "@/components/Post";
import TagList from "@/components/Tags";

const formatTagLabel = (tagSlug: string): string => tagSlug.replace(/-/g, " ").toLowerCase();

type TagPageProps = {
    params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
    const [postTags, tipTags] = await Promise.all([getAllPostTags(), getAllTipTags()]);
    const allTags = Array.from(new Set([...postTags, ...tipTags]));

    return allTags.map(tag => ({ tag: tagToSlug(tag) }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const tagLabel = formatTagLabel(resolvedParams.tag);

    return {
        title: `Posts tagged #${tagLabel}`,
        description: `Browse all blog posts tagged with #${tagLabel}.`,
    };
}

export default async function TagPage({ params }: TagPageProps) {
    const resolvedParams = await params;
    const tagSlug = resolvedParams.tag;
    const [posts, tips] = await Promise.all([getPostsByTag(tagSlug), getTipsByTag(tagSlug)]);
    const tagLabel = formatTagLabel(tagSlug);
    const articleCount = posts.length + tips.length;
    const articleLabel = articleCount === 1 ? "Entry" : "Entries";

    return (
        <div className="w-full">
            <div className="section-header">
                <h1 className="section-title mb-4">
                    <Balancer>
                        Posts tagged
                        {" "}
                        #
                        {tagLabel}
                    </Balancer>
                </h1>
                <h4 className="text-xl md:text-2xl">
                    {articleCount}
                    {" "}
                    {articleLabel}
                </h4>
                <TagList tags={[tagLabel]} linkBase={undefined} className="mt-3" />
            </div>

            {articleCount === 0
                ? (
                        <p className="text-lg">No content found for this tag yet.</p>
                    )
                : (
                        <div className="flex w-full flex-col gap-10">
                            {posts.length > 0 && (
                                <div>
                                    <h2 className="mb-4 text-2xl font-semibold">Blog posts</h2>
                                    <div className="blog-posts-list w-full">
                                        {posts.map(post => (
                                            <PostItem key={post.slug} post={post} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {tips.length > 0 && (
                                <div>
                                    <h2 className="mb-4 text-2xl font-semibold">Tips</h2>
                                    <div className="blog-posts-list w-full">
                                        {tips.map(tip => (
                                            <PostItem key={tip.slug} post={tip} type="tips" />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
        </div>
    );
}
