import process from "node:process";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import type { TipFrontmatter } from "src/types/Post";
import { DevelopmentTipsTop, TipItem, TipsContainer, TipsWrapper } from "./styles";
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
        <TipsWrapper>
            <DevelopmentTipsTop>
                <h1>🔥 Hot Development Tips</h1>
                <p>
                    Development tips and snippets that i share on my&nbsp;
                    <a
                        href="https://twitter.com/VictorySokolov"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter account"
                    >
                        Twitter account
                    </a>
                </p>
            </DevelopmentTipsTop>
            <TipsContainer>
                {tips.map((tip: TipFrontmatter, index: number) => (
                    <TipItem key={index}>
                        <Link href={`/tips/${tip.slug}`}>
                            <div className="image-wrapper">
                                <Image
                                    src={tip.featureImage}
                                    title={tip.title}
                                    alt={tip.title}
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 100vw, (max-width: 760px) 50vw. 33.3vw"
                                />
                            </div>
                        </Link>
                        <div className="tip-details">
                            <Link href={`/tips/${tip.slug}`}>
                                <h3>
                                    <Balancer>{tip.title}</Balancer>
                                </h3>
                            </Link>
                            <p>{tip.date}</p>
                            <a
                                href={tip.tweetUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Tweet URL"
                            >
                                <div className="tweet-link">
                                    <Image
                                        src="/static/twitter.svg"
                                        alt="Twitter logo"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <p>Tweet Url</p>
                            </a>
                        </div>
                    </TipItem>
                ))}
            </TipsContainer>
        </TipsWrapper>
    );
};

export default Tips;
