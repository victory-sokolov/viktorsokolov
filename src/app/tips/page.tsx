import type { Metadata } from "next";
import type { TipFrontmatter } from "src/types/Post";
import process from "node:process";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { getAllTips } from "@/common/tips";

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
            <div className="pb-12 md:pb-16 max-md:text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">🔥 Hot Development Tips</h1>
                <p className="text-lg md:text-xl opacity-80">
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
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 md:gap-10 max-md:grid-cols-1">
                {tips.map((tip: TipFrontmatter, index: number) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-[0_5px_15px_rgba(154,160,185,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_20px_rgba(154,160,185,0.45)] hover:scale-[1.02]"
                    >
                        <Link href={`/tips/${tip.slug}`}>
                            <div className="image-wrapper w-full h-[200px] relative">
                                <Image
                                    src={tip.featureImage}
                                    title={tip.title}
                                    alt={tip.title}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
                                />
                            </div>
                        </Link>
                        <div className="p-6">
                            <Link href={`/tips/${tip.slug}`}>
                                <h3 className="text-xl md:text-2xl mb-3 text-[rgb(var(--color-text-primary))] hover:text-[rgb(var(--color-secondary))] transition-colors">
                                    <Balancer>{tip.title}</Balancer>
                                </h3>
                            </Link>
                            <p className="text-sm md:text-base opacity-70 mb-4">{tip.date}</p>
                            {tip.tweetUrl && (
                                <a
                                    href={tip.tweetUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Tweet URL"
                                    className="flex items-center gap-2 text-[rgb(var(--color-secondary))] hover:underline transition-colors"
                                >
                                    <div className="flex items-center">
                                        <Image
                                            src="/static/twitter.svg"
                                            alt="Twitter logo"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <span className="text-sm md:text-base">View Tweet</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tips;
