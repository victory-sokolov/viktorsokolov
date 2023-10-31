import { getContent } from "@common/content-utils";
import { MdxRemote } from "@components/Mdx";

const AboutPage: React.FC = async () => {
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
