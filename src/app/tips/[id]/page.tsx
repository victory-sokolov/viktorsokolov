import process from "node:process";
import { ArticleJsonLd } from "next-seo";
import type { Metadata } from "next/types";
import React from "react";
import Balancer from "react-wrap-balancer";
import { ContentWrapper } from "src/styles/global-styles";
import type { TipFrontmatter } from "src/types/Post";
import { POST_TYPE } from "src/types/enums";
import { getTipBySlug } from "@/common/tips";
import Categories from "@/components/Categories";
import { MdxRemote } from "@/components/Mdx";
import NewsLetterForm from "@/components/NewsLetter";
import NextNPrevious from "@/components/NextNPrevious";
import { config } from "@/src/common/appconfig";

const baseUrl = process.env.BASE_URL;

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
    const {
        currentPost: { frontmatter },
    } = await getTipBySlug(params.id);
    if (!frontmatter) {
        return;
    }

    const { title, description, featureImage, slug } = frontmatter;
    const ogImage = `${baseUrl}/${featureImage}`;

    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/tips/${slug}`,
            languages: {
                "en-US": "/en-US",
            },
        },
        openGraph: {
            title,
            description,
            type: "article",
            url: `${baseUrl}/tips/${slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

const TipPage: React.FC = async (id: string) => {
    const {
        currentPost: { frontmatter, mdxSource },
        nextPost,
        previousPost,
    } = await getTipBySlug(id);
    const tipFrontmatter = frontmatter as TipFrontmatter;

    if (!tipFrontmatter) {
        return <h1>Tip is not found!</h1>;
    }

    const date = new Date(frontmatter.date).toDateString();
    const tags = frontmatter.tags.split(" ");

    return (
        <ContentWrapper>
            <ArticleJsonLd
                useAppDir={true}
                url={`${baseUrl}/blog/${frontmatter.slug}`}
                title={frontmatter.title}
                images={[frontmatter.featureImage]}
                datePublished={date}
                dateModified={frontmatter.lastModified}
                authorName={config.author}
                description={frontmatter.description}
            />
            <h1>
                <Balancer>{tipFrontmatter.title}</Balancer>
            </h1>
            <Categories categories={tags} style={{ textAlign: "left" }} />
            <MdxRemote source={mdxSource} />
            <p>{tipFrontmatter.description}</p>
            <p style={{ paddingTop: "var(--space-md)" }}>
                Posted on&nbsp;
                <a
                    href={tipFrontmatter.tweetUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Tweet link"
                >
                    Twitter
                </a>
                {" "}
                &nbsp; on
                {" "}
                {date}
                .
            </p>
            <NextNPrevious next={nextPost} prev={previousPost} postType={POST_TYPE.TIP} />
            <NewsLetterForm />
        </ContentWrapper>
    );
};

export default TipPage;
