import React, { useState } from "react";
import { getAllPosts, getPostBySlug } from "@common/posts";
import Categories from "@components/Categories";
import Comments from "@components/Comments";
import styled from "styled-components";
import { FaDev, FaGithub } from "react-icons/fa";
import { PostMeta } from "@components/Post/PostMeta";
import MDXComponents from "@components/Mdx/MDXComponent";
import { MDXRemote } from "next-mdx-remote";
import NextNPrevious from "@components/NextNPrevious";
import { POST_TYPE } from "src/types/enums";
import type { Post } from "src/types/Post";
import Seo from "@components/Seo";
import NewsLetterForm from "@components/NewsLetter";
import { ContentWrapper } from "src/styles/global-styles";
import { BlurryImage } from "@components/BlurryImage";

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--link-color);
    &:hover {
        color: var(--color-secondary);
    }
`;

const GithubLink = ({ slug }: { slug: string }) => (
    <a
        href={`https://github.com/victory-sokolov/viktorsokolov/tree/master/content/posts/${slug}/${slug}.mdx`}
        aria-labelledby="Edit this post"
        target="_blank"
        rel="noopener noreferrer"
    >
        <IconWrapper>
            <FaGithub />
            <span>Edit this post</span>
        </IconWrapper>
    </a>
);

const DevToLink = () => (
    <a href="#" aria-labelledby="Read on DevTo" target="_blank" rel="noopener noreferrer">
        <IconWrapper>
            <FaDev size={18} />
            <span>Read on DevTo</span>
        </IconWrapper>
    </a>
);

const PostPage: React.FC<Post> = ({ frontmatter, mdxSource, next, previous }) => {
    const featureImage = frontmatter.featureImage;
    const date = frontmatter.date;
    const title = frontmatter.title;
    const readTime = frontmatter.readTime;
    const tags = frontmatter.tags.split(",");

    return (
        <>
            <Seo title={title} description={frontmatter.description} date={date} keywords={tags} image={featureImage} />
            <ContentWrapper>
                <div className="image-wrapper">
                    <BlurryImage featureImage={featureImage} blurhash={frontmatter.blurhash} title={title} />
                </div>
                <h1 className="center" itemProp="headline" style={{ color: "var(--text-color-secondary)" }}>
                    {title}
                </h1>
                <PostMeta date={date} readTime={readTime} style={{ justifyContent: "center" }}>
                    <GithubLink slug={frontmatter.slug} />
                    <DevToLink />
                </PostMeta>
                <Categories categories={tags} />
                <MDXRemote {...mdxSource} components={MDXComponents} />
                <NextNPrevious next={next} prev={previous} postType={POST_TYPE.POST} />
                <NewsLetterForm />
            </ContentWrapper>
            <Comments />
        </>
    );
};

export async function getStaticPaths() {
    const posts = await getAllPosts();
    const paths = posts.map(post => {
        return {
            params: {
                slug: post.slug
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
    } = await getPostBySlug(slug);

    return {
        props: {
            frontmatter,
            mdxSource,
            next: nextPost,
            previous: previousPost
        }
    };
}

export default PostPage;
