import { getContent } from "@common/content-utils";
import { MdxRemote } from "@components/Mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About me and my work."
};

const AboutPage: React.FC = async () => {
    const { mdxSource } = await getContent("pages/about");

    return <MdxRemote mdxSource={mdxSource} />;
};

export default AboutPage;
