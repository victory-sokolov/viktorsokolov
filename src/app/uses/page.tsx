import { getContent } from "@/common/content-utils";
import { MdxRemote } from "@/components/Mdx";
import { config } from "@/src/common/appconfig";
import type { Metadata } from "next";
import { WebPageJsonLd } from "next-seo";

export const metadata: Metadata = {
    title: "Uses",
    description: "Tech I'm currently using for coding."
};

const UsesPage: React.FC = async () => {
    const { mdxSource } = await getContent("pages/uses");

    return (
        <>
            <WebPageJsonLd
                description={metadata.description}
                title="My Tech Uses"
                id={config.siteUrl}
            />
            <MdxRemote source={mdxSource} />
        </>
    );
};

export default UsesPage;
