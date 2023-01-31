import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Seo from "../components/Seo";
import { getAllTips } from "@common/tips";
import type { TipFrontmatter } from "src/types/Post";

const TipsWrapper = styled.div`
    height: 100%;
`;

const DevelopmentTipsTop = styled.div`
    padding-bottom: 3rem;
    text-align: center;
`;

const TipItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    border: 1px solid var(--color-secondary-700);
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 3rem;
    h3 {
        margin-top: 1rem;
    }
`;

const TipsContainer = styled.div`
    padding: 2rem;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    box-shadow: var(--tip-box-shadow-color) 0px 0px var(--box-shadow-px);
    border-radius: 4px;

    .image-wrapper {
        position: relative;
        width: 35rem;
        height: 20rem;
        img {
            border-radius: 5px;
        }
    }

    .tip-details {
        text-align: left;
        line-height: 4.5rem;
        a {
            display: flex;
            align-items: center;
        }
        .tweet-link {
            position: relative;
            width: 3rem;
            height: 3rem;
            margin-right: 1rem;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .image-wrapper {
            width: 0;
        }
    }
`;

const Tips = ({ tips }) => {
    if (!tips) return <p className="not-found-text">No Tips found!</p>;

    return (
        <TipsWrapper>
            <Seo title="Developments tips" description="Short developments tips and snippets posted on Twitter" />
            <DevelopmentTipsTop>
                <h1>🔥 Hot Development Tips</h1>
                <p>
                    Development tips and snippets that i share on my&nbsp;
                    <a href="https://twitter.com/VictorySokolov" target="_blank" rel="noreferrer">
                        Twitter account
                    </a>
                </p>
            </DevelopmentTipsTop>
            <TipsContainer>
                {tips.map((tip: TipFrontmatter, index: number) => (
                    <TipItem key={index}>
                        <Link href={`/tip/${tip.slug}`}>
                            <div className="image-wrapper">
                                <Image src={tip.featureImage} width={400} height={200} alt={tip.title} />
                            </div>
                        </Link>
                        <div className="tip-details">
                            <Link href={`/tip/${tip.slug}`}>
                                <h3>{tip.title}</h3>
                            </Link>
                            <p>{tip.date}</p>
                            <a href={tip.tweetUrl} target="_blank" rel="noreferrer">
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

export async function getStaticProps() {
    const tips = getAllTips();
    return {
        props: {
            tips: tips
        }
    };
}
