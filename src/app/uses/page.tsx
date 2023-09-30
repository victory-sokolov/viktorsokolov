import { getContent } from "@common/content-utils";
import { MdxRemote } from "@components/Mdx";
import type { MDXProps } from "src/types/Post";

const UsesPage: React.FC<MDXProps> = async () => {
    const { frontmatter, mdxSource } = await getContent("pages/uses");

    return (
        <>
            {/* <Seo title={title} description={description} date={date} /> */}
            <MdxRemote mdxSource={mdxSource} />
        </>
    );
};

export default UsesPage;
