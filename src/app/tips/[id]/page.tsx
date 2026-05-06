import { config } from "@/common/appconfig";
import { buildCanonicalUrl, generatePostMetadata } from "@/common/metadata";
import { getTipBySlug } from "@/common/tips";
import { MdxRemote } from "@/components/Mdx";
import NewsLetterForm from "@/components/NewsLetter";
import NextNPrevious from "@/components/NextNPrevious";
import { JsonLd } from "@/components/Seo/JsonLd";
import TagList from "@/components/Tags";
import { POST_TYPE } from "@/types/enums";
import type { TipFrontmatter } from "@/types/Post";
import type { PageParams } from "@/types/types";
import type { Metadata } from "next/types";
import Balancer from "react-wrap-balancer";

export async function generateMetadata({
    params,
}: {
    params: Promise<PageParams>;
}): Promise<Metadata | undefined> {
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

    const date = frontmatter.date;
    const tags = frontmatter.tags || [];

    return (
        <article className="relative mx-auto mt-[2rem] leading-8 max-sm:relative max-sm:bottom-0 max-sm:max-w-full max-sm:bg-none max-sm:p-0 max-sm:shadow-none">
            <JsonLd
                id={`tip-${frontmatter.slug}-jsonld`}
                data={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    author: {
                        "@type": "Person",
                        name: config.author,
                    },
                    dateModified: frontmatter.lastModified,
                    datePublished: date,
                    description: frontmatter.description,
                    headline: frontmatter.title,
                    image: buildCanonicalUrl(frontmatter.featureImage || ""),
                    url: buildCanonicalUrl(`/tips/${frontmatter.slug}`),
                }}
            />
            <h1 className="section-title mb-6">
                <Balancer>{frontmatter.title}</Balancer>
            </h1>
            <TagList tags={tags} linkBase="/blog/tag" className="mb-8" />
            <MdxRemote source={mdxSource} />
            <NextNPrevious next={nextPost} prev={previousPost} postType={POST_TYPE.TIP} />
            <NewsLetterForm />
        </article>
    );
}
