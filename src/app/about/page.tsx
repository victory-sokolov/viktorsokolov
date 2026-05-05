import type { Metadata } from "next";
import { getContent } from "@/common/content-utils";
import { buildCanonicalAlternates } from "@/common/metadata";
import { MdxRemote } from "@/components/Mdx";

export const metadata: Metadata = {
    title: "About",
    description: "About me and my work.",
    alternates: buildCanonicalAlternates("/about"),
};

const AboutPage: React.FC = async () => {
    const { mdxSource } = await getContent("pages/about");

    return <MdxRemote source={mdxSource} />;
};

export default AboutPage;
