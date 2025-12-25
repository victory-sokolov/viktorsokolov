import type { Metadata } from "next/types";
import type { TipFrontmatter } from "src/types/Post";
import type { PageParams } from "@/src/types/types";
import process from "node:process";
import { ArticleJsonLd } from "next-seo";
import React from "react";
import Balancer from "react-wrap-balancer";
import { POST_TYPE } from "src/types/enums";
import { generatePostMetadata } from "@/common/metadata";
import { getTipBySlug } from "@/common/tips";
import { MdxRemote } from "@/components/Mdx";
import NewsLetterForm from "@/components/NewsLetter";
import NextNPrevious from "@/components/NextNPrevious";
import TagList from "@/components/Tags";
import { config } from "@/src/common/appconfig";

const baseUrl = process.env.BASE_URL;

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata | undefined> {
    const resolvedParams = await params;
    return generatePostMetadata(resolvedParams, getTipBySlug, "tips");
}

export default async function TipPage({ params }: { params: Promise<PageParams> }) {
    const resolvedParams = await params;
    const {
        currentPost: { frontmatter, mdxSource },
        nextPost,
        previousPost,
    } = await getTipBySlug(resolvedParams.id);
    const tipFrontmatter = frontmatter as TipFrontmatter;

    if (!tipFrontmatter) {
        return <h1>Tip is not found!</h1>;
    }

    const date = frontmatter.date;
    const tags = frontmatter.tags || [];

    return (
        <article className="relative mx-auto mt-[2rem] leading-8 max-sm:relative max-sm:bottom-0 max-sm:max-w-full max-sm:bg-none max-sm:p-0 max-sm:shadow-none">
            <ArticleJsonLd
                url={`${baseUrl}/tips/${frontmatter.slug}`}
                headline={frontmatter.title}
                image={frontmatter.featureImage}
                datePublished={date}
                dateModified={frontmatter.lastModified}
                author={config.author}
                description={frontmatter.description}
            />
            <h1 className="section-title mb-6">
                <Balancer>{tipFrontmatter.title}</Balancer>
            </h1>
            <TagList tags={tags} linkBase="/blog/tag" className="mb-8" />
            <MdxRemote source={mdxSource} />
            <p>{tipFrontmatter.description}</p>
            <NextNPrevious next={nextPost} prev={previousPost} postType={POST_TYPE.TIP} />
            <NewsLetterForm />
        </article>
    );
}
