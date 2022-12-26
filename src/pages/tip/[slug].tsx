import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { getTipBySlug } from "@common/tips";
import Categories from "@components/Categories";
import { getAllTips } from "../../common/tips";
import { POST_TYPE } from "src/types/enums";
import NextNPrevious from "@components/NextNPrevious";
import { Tip } from "../../types/Post";
import Seo from "@components/Seo";
import MDXComponents from "@components/Mdx/MDXComponent";
import NewsLetterForm from "@components/NewsLetter";
import { ContentWrapper } from "src/styles/global-styles";

const TipPage: React.FC<Tip> = ({ frontmatter, mdxSource, next, previous }) => {
    if (!frontmatter) {
        return <h1>Tip is not found!</h1>;
    }

    const date = new Date(frontmatter.date).toDateString();
    const tags = frontmatter.tags.split(" ");

    return (
        <ContentWrapper>
            <Seo title={frontmatter.title} image={frontmatter.featureImage} date={date} />
            <h1>{frontmatter.title}</h1>
            <Categories categories={tags} style={{ textAlign: "left" }} />
            <MDXRemote {...mdxSource} components={MDXComponents} />
            <p>{frontmatter.description}</p>
            <p style={{ paddingTop: "var(--space-md)" }}>
                Posted on&nbsp;
                <a href={frontmatter.tweetUrl} target="_blank" rel="noreferrer">
                    Twitter
                </a>{" "}
                &nbsp; on {date}.
            </p>
            <NextNPrevious next={next} prev={previous} postType={POST_TYPE.TIP} />
            <NewsLetterForm />
        </ContentWrapper>
    );
};

export default TipPage;

export async function getStaticPaths() {
    const tips = getAllTips();

    const paths = tips.map(tip => {
        return {
            params: {
                slug: tip.slug
            }
        };
    });

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params: { slug } }) {
    const {
        currentPost: { frontmatter, mdxSource },
        nextPost,
        previousPost
    } = await getTipBySlug(slug);

    return {
        props: {
            frontmatter,
            mdxSource,
            next: nextPost,
            previous: previousPost
        }
    };
}
