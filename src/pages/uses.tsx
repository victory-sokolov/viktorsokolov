import { getContent } from "@common/content-utils";
import MDXComponents from "@components/Mdx/MDXComponent";
import { MDXRemote } from "next-mdx-remote";
import type { MDXProps } from "src/types/Post";

import Seo from "../components/Seo";

const UsesPage: React.FC<MDXProps> = ({ mdxSource, frontmatter }) => {
    const { title, description, date } = frontmatter;

    return (
        <>
            <Seo title={title} description={description} date={date} />
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </>
    );
};

export async function getStaticProps() {
    const { frontmatter, mdxSource } = await getContent("pages/uses");

    return {
        props: {
            frontmatter,
            mdxSource
        }
    };
}

export default UsesPage;
