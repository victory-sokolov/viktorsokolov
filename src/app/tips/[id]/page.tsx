import { getTipBySlug } from "@common/tips";
import Categories from "@components/Categories";
import { MdxRemote } from "@components/Mdx";
import NewsLetterForm from "@components/NewsLetter";
import NextNPrevious from "@components/NextNPrevious";
import React from "react";
import { ContentWrapper } from "src/styles/global-styles";
import { POST_TYPE } from "src/types/enums";
import type { Tip } from "src/types/Post";

const TipPage: React.FC<Tip> = async ({ params }) => {
    const {
        currentPost: { frontmatter, mdxSource },
        nextPost,
        previousPost
    } = await getTipBySlug(params.id);

    if (!frontmatter) {
        return <h1>Tip is not found!</h1>;
    }

    const date = new Date(frontmatter.date).toDateString();
    const tags = frontmatter.tags.split(" ");

    return (
        <ContentWrapper>
            {/* <Seo title={frontmatter.title} image={frontmatter.featureImage} date={date} /> */}
            <h1>{frontmatter.title}</h1>
            <Categories categories={tags} style={{ textAlign: "left" }} />
            <MdxRemote mdxSource={mdxSource} />
            <p>{frontmatter.description}</p>
            <p style={{ paddingTop: "var(--space-md)" }}>
                Posted on&nbsp;
                <a href={frontmatter.tweetUrl} target="_blank" rel="noreferrer" aria-label="Tweet link">
                    Twitter
                </a>{" "}
                &nbsp; on {date}.
            </p>
            <NextNPrevious next={nextPost} prev={previousPost} postType={POST_TYPE.TIP} />
            <NewsLetterForm />
        </ContentWrapper>
    );
};

export default TipPage;
