import process from "node:process";
import type { Metadata } from "next";
import { ArticleJsonLd } from "next-seo";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { ContentWrapper } from "src/styles/global-styles";
import { POST_TYPE } from "src/types/enums";
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

export default async function Page(props: PageParams) {
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
            <ContentWrapper>
                <Modal>
                    <div className="image-wrapper">
                        <Image
                            src={featureImage}
                            title={title}
                            alt={title}
                            width={800}
                            height={400}
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 760px) 50vw. 33.3vw"
                        />
                    </div>
                    <h1
                        className="center"
                        itemProp="headline"
                        style={{ color: "var(--text-color-secondary)" }}
                    >
                        <Balancer>{title}</Balancer>
                    </h1>
                    <PostMeta date={date} readTime={readTime} style={{ justifyContent: "center" }}>
                        <GithubLink slug={frontmatter.slug} />
                        <DevToLink />
                        <ShareToSocialLink title={title} />
                    </PostMeta>
                    {tags && <Categories categories={tags} />}
                    <MdxRemote source={mdxSource} />
                    <NextNPrevious next={nextPost} prev={previousPost} postType={POST_TYPE.POST} />
                    <NewsLetterForm />
                </Modal>
            </ContentWrapper>
            <Comments />
        </>
    );
}
