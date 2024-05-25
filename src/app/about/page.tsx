import process from "node:process";
import type { Metadata } from "next";
import { getContent } from "@/common/content-utils";
import { MdxRemote } from "@/components/Mdx";

export const metadata: Metadata = {
    title: "About",
    description: "About me and my work.",
    alternates: {
        canonical: `${process.env.BASE_URL}/about`,
        languages: {
            "en-US": "/en-US",
        },
    },
};

const AboutPage: React.FC = async () => {
    const { mdxSource } = await getContent("pages/about");

    return <MdxRemote source={mdxSource} />;
};

export default AboutPage;
