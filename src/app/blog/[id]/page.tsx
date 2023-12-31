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
import { Metadata } from "next";
import Image from "next/image";
import { ContentWrapper } from "src/styles/global-styles";
import { POST_TYPE } from "src/types/enums";

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
    const {
        currentPost: { frontmatter }
    } = await getPostBySlug(params.id);
    if (!frontmatter) {
        return;
    }

    const { title, description, featureImage, slug } = frontmatter;
    const ogImage = `${process.env.BASE_URL}/${featureImage}`;
    return {
        title: title,
        description: description,
        openGraph: {
            title,
            description,
            type: "article",
            url: `${process.env.BASE_URL}/blog/${slug}`,
            images: [
                {
                    url: ogImage
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage]
        }
    };
}

export default async function Page({ params }) {
    const {
        currentPost: { frontmatter, mdxSource },
        nextPost,
        previousPost
    } = await getPostBySlug(params.id);

    const featureImage = frontmatter.featureImage;
    const date = frontmatter.date;
    const title = frontmatter.title;
    const readTime = frontmatter.readTime;
    const tags = frontmatter.tags.split(",");

    return (
        <>
            <ContentWrapper>
                <Modal>
                    <div className="image-wrapper">
                        <Image
                            src={featureImage}
                            title={title}
                            alt={title}
                            width={800}
                            height={400}
                        />
                    </div>
                    <h1
                        className="center"
                        itemProp="headline"
                        style={{ color: "var(--text-color-secondary)" }}
                    >
                        {title}
                    </h1>
                    <PostMeta date={date} readTime={readTime} style={{ justifyContent: "center" }}>
                        <GithubLink slug={frontmatter.slug} />
                        <DevToLink />
                        <ShareToSocialLink title={title} />
                    </PostMeta>
                    {tags && <Categories categories={tags} />}
                    <MdxRemote mdxSource={mdxSource} />
                    <NextNPrevious next={nextPost} prev={previousPost} postType={POST_TYPE.POST} />
                    <NewsLetterForm />
                </Modal>
            </ContentWrapper>
            <Comments />
        </>
    );
}
