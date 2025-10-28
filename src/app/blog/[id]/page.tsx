import { getPostBySlug } from "@/common/posts";
import Categories from "@/components/Categories";
import Comments from "@/components/Comments";
import { MdxRemote } from "@/components/Mdx";
import { Modal } from "@/components/Modal";
import NewsLetterForm from "@/components/NewsLetter";
import NextNPrevious from "@/components/NextNPrevious";
import { PostMeta } from "@/components/Post/PostMeta";
import ShareToSocialLink from "@/components/ShareToSocial";
import { DevToLink, GithubLink } from "@/components/Social/SocialMedia";
import { config } from "@/src/common/appconfig";
import type { PageParams } from "@/src/types/types";
import type { Metadata } from "next";
import { ArticleJsonLd } from "next-seo";
import Image from "next/image";
import process from "node:process";
import Balancer from "react-wrap-balancer";
import { POST_TYPE } from "src/types/enums";

const baseUrl = process.env.BASE_URL;

export async function generateMetadata(props): Promise<Metadata | undefined> {
    const params = await props.params;
    const {
        currentPost: { frontmatter },
    } = await getPostBySlug(params.id);
    if (!frontmatter) {
        return;
    }

    const { title, description, featureImage, slug } = frontmatter;
    const ogImage = `${baseUrl}/${featureImage}`;

    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/blog/${slug}`,
            languages: {
                "en-US": "/en-US",
            },
        },
        openGraph: {
            title,
            description,
            type: "article",
            url: `${process.env.BASE_URL}/blog/${slug}`,
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

export default async function Page(props: { params: Promise<PageParams> }) {
    const params = await props.params;
    const {
        currentPost: { frontmatter, mdxSource },
        nextPost,
        previousPost,
    } = await getPostBySlug(params.id);

    const featureImage = frontmatter.featureImage;
    const date = frontmatter.date;
    const title = frontmatter.title;
    const readTime = frontmatter.readTime;
    const tags = frontmatter.tags.split(",");

    return (
        <>
            <ArticleJsonLd
                useAppDir={true}
                url={`${baseUrl}/blog/${frontmatter.slug}`}
                title={title}
                images={[featureImage]}
                datePublished={date}
                dateModified={frontmatter.lastModified}
                authorName={config.author}
                description={frontmatter.description}
            />
            <article className="w-full max-w-[85rem] mx-auto mt-8 md:mt-12 leading-relaxed max-sm:mt-4">
                <Modal>
                    <div className="image-wrapper w-full mb-8 md:mb-12 rounded-lg overflow-hidden">
                        <Image
                            src={featureImage}
                            title={title}
                            alt={title}
                            width={800}
                            height={400}
                            className="w-full h-auto"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 800px"
                        />
                    </div>
                    <h1
                        className="text-center text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 article-title"
                        itemProp="headline"
                    >
                        <Balancer>{title}</Balancer>
                    </h1>
                    <PostMeta
                        date={date}
                        readTime={readTime}
                        style={{ justifyContent: "center", marginBottom: "2rem" }}
                    >
                        <GithubLink slug={frontmatter.slug} />
                        <DevToLink />
                        <ShareToSocialLink title={title} />
                    </PostMeta>
                    {tags && <Categories categories={tags} />}
                    <div className="prose prose-lg max-w-none mt-8 md:mt-12">
                        <MdxRemote source={mdxSource} />
                    </div>
                    <NextNPrevious next={nextPost} prev={previousPost} postType={POST_TYPE.POST} />
                    <NewsLetterForm />
                </Modal>
            </article>
            <Comments />
        </>
    );
}
