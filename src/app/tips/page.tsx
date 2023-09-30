import { getAllTips } from "@common/tips";
import Image from "next/image";
import Link from "next/link";
import type { TipFrontmatter } from "src/types/Post";

import { DevelopmentTipsTop, TipItem, TipsContainer, TipsWrapper } from "./styles";

// import Seo from "../../components/Seo";

const Tips = async () => {
    const tips = await getAllTips();
    if (!tips) return <p className="not-found-text">No Tips found!</p>;

    return (
        <TipsWrapper>
            {/* <Seo title="Developments tips" description="Short developments tips and snippets posted on Twitter" /> */}
            <DevelopmentTipsTop>
                <h1>🔥 Hot Development Tips</h1>
                <p>
                    Development tips and snippets that i share on my&nbsp;
                    <a
                        href="https://twitter.com/VictorySokolov"
                        target="_blank"
                        rel="noreferrer"
                        arial-label="Twitter account"
                    >
                        Twitter account
                    </a>
                </p>
            </DevelopmentTipsTop>
            <TipsContainer>
                {tips.map((tip: TipFrontmatter, index: number) => (
                    <TipItem key={index}>
                        <Link href={`/tip/${tip.slug}`}>
                            <div className="image-wrapper">
                                <Image
                                    src={tip.featureImage}
                                    title={tip.title}
                                    alt={tip.title}
                                    width={500}
                                    height={360}
                                />
                            </div>
                        </Link>
                        <div className="tip-details">
                            <Link href={`/tips/${tip.slug}`}>
                                <h3>{tip.title}</h3>
                            </Link>
                            <p>{tip.date}</p>
                            <a href={tip.tweetUrl} target="_blank" rel="noreferrer" aria-label="Tweet URL">
                                <div className="tweet-link">
                                    <Image src="/static/twitter.svg" alt="Twitter logo" width={30} height={30} />
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
