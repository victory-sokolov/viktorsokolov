import type { Metadata } from "next";
import type { PageParams } from "@/src/types/types";
import process from "node:process";
import { ArticleJsonLd } from "next-seo";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { POST_TYPE } from "src/types/enums";
import { generatePostMetadata } from "@/common/metadata";
import { getPostBySlug } from "@/common/posts";
import Comments from "@/components/Comments";
import { MdxRemote } from "@/components/Mdx";
import { Modal } from "@/components/Modal";
import NewsLetterForm from "@/components/NewsLetter";
import NextNPrevious from "@/components/NextNPrevious";
import { PostMeta } from "@/components/Post/PostMeta";
import ShareToSocialLink from "@/components/ShareToSocial";
import { DevToLink, GithubLink } from "@/components/Social/SocialMedia";
import TagList from "@/components/Tags";
import { config } from "@/src/common/appconfig";

const baseUrl = process.env.BASE_URL;

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata | undefined> {
    const resolvedParams = await params;
    return generatePostMetadata(resolvedParams, getPostBySlug, "blog");
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
    const resolvedParams = await params;
    const {
        currentPost: { frontmatter, mdxSource },
        nextPost,
        previousPost,
    } = await getPostBySlug(resolvedParams.id);

    const featureImage = frontmatter.featureImage;
    const date = frontmatter.date;
    const title = frontmatter.title;
    const readTime = frontmatter.readTime;
    const tags = frontmatter.tags || [];

    return (
        <>
            <ArticleJsonLd
                url={`${baseUrl}/blog/${frontmatter.slug}`}
                headline={title}
                image={featureImage}
                datePublished={date}
                dateModified={frontmatter.lastModified}
                author={config.author}
                description={frontmatter.description}
            />
            <article className="mx-auto mt-8 w-full max-w-340 leading-relaxed max-sm:mt-4 md:mt-12">
                <Modal>
                    <div className="relative mb-8 h-auto w-full overflow-hidden rounded-lg md:mb-12">
                        <Image
                            src={featureImage}
                            title={title}
                            alt={title}
                            width={800}
                            height={400}
                            className="h-auto w-full object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 800px"
                        />
                    </div>
                    <h1
                        className="article-title mb-6 text-left text-3xl md:mb-8 md:text-4xl lg:text-5xl"
                        itemProp="headline"
                    >
                        <Balancer>{title}</Balancer>
                    </h1>
                    <div className="mb-8 flex flex-col items-start gap-3">
                        <PostMeta
                            date={date}
                            readTime={readTime}
                            style={{ justifyContent: "flex-start", marginBottom: 0, paddingLeft: 0 }}
                        >
                            <GithubLink slug={frontmatter.slug} />
                            <DevToLink />
                            <ShareToSocialLink title={title} />
                        </PostMeta>
                        <TagList tags={tags} linkBase="/blog/tag" className="mt-0" />
                    </div>
                    <div className="mt-8 max-w-none md:mt-12">
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
