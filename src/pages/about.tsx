import { getContent } from "@common/content-utils";
import { MDXRemote } from "next-mdx-remote";
import Seo from "@components/Seo";
import { MDXProps } from "src/types/Post";
import MDXComponents from "@components/Mdx/MDXComponent";

const AboutPage: React.FC<MDXProps> = ({ mdxSource, frontmatter }) => {
    const { title, description, date } = frontmatter;

    return (
        <>
            <Seo title={title} description={description} date={date} />
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </>
    );
};

export async function getStaticProps() {
    const { frontmatter, mdxSource } = await getContent("pages/about");
    return {
        props: {
            mdxSource,
            frontmatter
        }
    };
}

export default AboutPage;
