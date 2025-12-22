import { getAllTips } from "@/common/tips";
import type { Metadata } from "next";
import Link from "next/link";
import process from "node:process";
import Balancer from "react-wrap-balancer";
import type { TipFrontmatter } from "src/types/Post";

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
            <div className="pb-12 max-md:text-center md:pb-16">
                <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl">🔥 Hot Development Tips</h1>
                <p className="text-lg opacity-80 md:text-xl">
                    Development tips and snippets that i share on my&nbsp;
                    <a
                        href="https://twitter.com/VictorySokolov"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter account"
                        className="text-secondary hover:underline"
                    >
                        Twitter account
                    </a>
                </p>
            </div>
            <div className="grid grid-cols-1 gap-12 max-sm:gap-10">
                {tips.map((tip: TipFrontmatter) => (
                    <article
                        className="border-b border-[rgb(var(--color-border))] pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0"
                        key={tips.slug}
                    >
                        <div className="flex flex-col gap-0">
                            <Link href={`/tips/${tip.slug}`} aria-label={tip.title}>
                                <h3 className="mb-4 text-[2.6rem] leading-[1.3] text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-secondary-600))] transition-colors duration-300 max-sm:text-2xl">
                                    <Balancer>{tip.title}</Balancer>
                                </h3>
                            </Link>
                            <p className="mb-4 text-sm opacity-70 md:text-base">{tip.date}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Tips;
