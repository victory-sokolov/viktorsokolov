import type { Metadata } from "next";
import type { TipFrontmatter } from "src/types/Post";
import process from "node:process";
import { getAllTips } from "@/common/tips";
import { PostItem } from "@/components/Post";

export const metadata: Metadata = {
    title: "Developments tips",
    description: "Developments tips and snippets.",
    alternates: {
        canonical: `${process.env.BASE_URL}/tips`,
        languages: {
            "en-US": "/en-US",
        },
    },
};

const Tips = async () => {
    const tips = await getAllTips();
    if (!tips) return <p className="not-found-text">No Tips found!</p>;

    return (
        <div className="w-full">
            <div className="section-header">
                <h1 className="section-title mb-6">🔥 Hot Development Tips</h1>
                <p className="text-lg text-[rgb(var(--color-text-primary))] md:text-xl">
                    Development tips and snippets that i share on my&nbsp;
                    <a
                        href="https://twitter.com/VictorySokolov"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter account"
                        className="text-[rgb(var(--color-secondary))] hover:underline"
                    >
                        Twitter account
                    </a>
                </p>
            </div>
            <div className="post-list">
                {tips.map((tip: TipFrontmatter) => (
                    <PostItem key={tip.slug} post={tip} type="tips" />
                ))}
            </div>
        </div>
    );
};

export default Tips;
