import { getContent } from "@common/content-utils";
import { MdxRemote } from "@components/Mdx";
import type { MDXProps } from "src/types/Post";

const AboutPage: React.FC<MDXProps> = async () => {
    const { frontmatter, mdxSource } = await getContent("pages/about");
    const { title, description, date } = frontmatter;

    return (
        <>
            {/* <Seo title={title} description={description} date={date} /> */}
            <MdxRemote mdxSource={mdxSource} />
        </>
    );
};

export default AboutPage;
