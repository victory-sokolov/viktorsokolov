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
import Categories from "@/components/Categories";
import { MdxRemote } from "@/components/Mdx";
import NewsLetterForm from "@/components/NewsLetter";
import NextNPrevious from "@/components/NextNPrevious";
import { config } from "@/src/common/appconfig";

const baseUrl = process.env.BASE_URL;

export async function generateMetadata(props): Promise<Metadata | undefined> {
    const params = await props.params;
    return generatePostMetadata(params, getTipBySlug, "tips");
}

const TipPage: React.FC = async (props: { params: Promise<PageParams> }) => {
    const params = await props.params;
    const {
        currentPost: { frontmatter, mdxSource },
        nextPost,
        previousPost,
    } = await getTipBySlug(params.id);
    const tipFrontmatter = frontmatter as TipFrontmatter;

    if (!tipFrontmatter) {
        return <h1>Tip is not found!</h1>;
    }

    const date = new Date(frontmatter.date).toDateString();
    const tags = frontmatter.tags.split(" ");

    return (
        <article className="relative mx-auto mt-[2rem] leading-8 max-sm:relative max-sm:bottom-0 max-sm:max-w-full max-sm:bg-none max-sm:p-0 max-sm:shadow-none">
            <ArticleJsonLd
                url={`${baseUrl}/blog/${frontmatter.slug}`}
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
            <Categories categories={tags} style={{ textAlign: "left" }} />
            <MdxRemote source={mdxSource} />
            <p>{tipFrontmatter.description}</p>
            <NextNPrevious next={nextPost} prev={previousPost} postType={POST_TYPE.TIP} />
            <NewsLetterForm />
        </article>
    );
};

export default TipPage;
